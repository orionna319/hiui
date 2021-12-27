const Path = require('path')
const Fs = require('fs')

const getAllSvgComponentFileInfo = () => {
  const result = []
  const recursion = (dir) => {
    const list = Fs.readdirSync(dir)
    list.forEach((item) => {
      const fullPath = Path.join(dir, item)
      const stats = Fs.statSync(fullPath)
      if (stats.isDirectory()) {
        recursion(fullPath)
      } else {
        // 获取到svg文件
        if (item.endsWith('.svg')) {
          const dirs = dir.trim().split(Path.sep)
          const fileName = item.replace('.svg', '')
          const type = dirs[dirs.length - 1]
          const belong = dirs[dirs.length - 2]
          // 处理插件带来的数字后缀影响
          const pureName = fileName.split(' ')[0].trim()
          result.push({
            path: fullPath,
            name: pureName,
            type,
            belong,
            withTypeName: `${pureName}-${type}`,
            generateFileRelativePath: `${belong}/${pureName}-${type}`,
          })
        }
      }
    })
  }

  recursion(Path.join(__dirname, '../icon-resources'))

  return result
}

const disposeSvgSourceFile = (file) => {
  const removeXmlDeclaration = (source) => {
    return source.replace(/<\?xml.*?\?>/g, '').trim()
  }
  const removeDoctypeDeclaration = (source) => {
    return source.replace(/<\!DOCTYPE.*?>/g, '').trim()
  }

  const removeSvgClass = (source) => {
    return source.replace(/(?<=<svg.*?)class=\".*?\"(?=.*?>)/g, '')
  }

  const removeSvgSize = (source) => {
    return source
      .replace(/(?<=<svg.*?)width=\".*?\"(?=.*?>)/g, '')
      .replace(/(?<=<svg.*?)height=\".*?\"(?=.*?>)/g, '')
  }

  const removePathFill = (source) => {
    return source.replace(/(?<=<.*?)fill=\".*?\"(?=.*?>)/g, '')
  }

  const insertReactProps = (source) => {
    return source.replace(
      /<svg/g,
      '<svg className={cls} ref={ref} role={role} style={style} onClick={onClick} '
    )
  }

  const pureSvg = removeDoctypeDeclaration(removeXmlDeclaration(file))
  return insertReactProps(removePathFill(removeSvgSize(removeSvgClass(pureSvg))))
}

const transformToUpperCamelCase = (name) => {
  const words = String(name).split(/\-/g)
  return words.map((item) => item[0].toUpperCase() + item.slice(1)).join('')
}

const generateComponentTsxContent = (svg, name) => {
  const componentName = transformToUpperCamelCase(name)

  return `
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-${name}'
const _prefix = getPrefixCls(_role)

export const ${componentName} = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      ${svg}
    )
  }
)

if (__DEV__) {
  ${componentName}.displayName = '${componentName}'
}
  `
}

const componentFileInfo = getAllSvgComponentFileInfo()

console.log(`Auto generate: total ${componentFileInfo.length}`)
componentFileInfo.forEach(({ withTypeName, path, generateFileRelativePath }) => {
  const svg = disposeSvgSourceFile(Fs.readFileSync(path).toString())
  const targetFilePath = Path.join(
    __dirname,
    '../src/components',
    generateFileRelativePath + '.tsx'
  )
  // 保证文件夹存在
  if (!Fs.existsSync(Path.dirname(targetFilePath))) {
    Fs.mkdirSync(Path.dirname(targetFilePath))
  }
  Fs.writeFileSync(targetFilePath, generateComponentTsxContent(svg, withTypeName))
  console.log(`Auto generate: ${withTypeName}`)
})

const indexTsContent = `import './styles/index.scss'

${componentFileInfo
  .map(({ withTypeName, generateFileRelativePath }) => {
    return `export { ${transformToUpperCamelCase(
      withTypeName
    )} } from './components/${generateFileRelativePath}'`
  })
  .join('\n')}

export * from './@types/props'
`
Fs.writeFileSync(Path.join(__dirname, '../src/index.ts'), indexTsContent)

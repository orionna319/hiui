import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Upload from '../../../components/upload'
const prefix = 'upload-picture'
const code = `import React from 'react'
import Upload from '@hi-ui/hiui/es/upload'\n
class Demo extends React.Component {
  render () {
    return (
      <Upload
        type="pictureCard"
        uploadAction= "http://www.mocky.io/v2/5dc3b4413000007600347501"
        headers={{name: 'mi'}}
        onChange = {(file, fileList, response) => {
          console.log('upload callback', file, fileList, response)
        }}
        params={{id:'uid',channel:'youpin'}}
        name="pictureCard"
      />
    )
  }
}`
const DemoPicture = () => <DocViewer code={code} scope={{ Upload }} prefix={prefix} />
export default DemoPicture

import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-file-zip-outlined'
const _prefix = getPrefixCls(_role)

export const FileZipOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg
        className={cls}
        ref={ref}
        role={role}
        style={style}
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        version="1.1"
      >
        <path
          d="M627.498667 97.834667l-0.362667-0.384c5.973333 3.562667 11.52 7.893333 16.533333 12.885333l205.994667 205.994667c5.013333 5.013333 9.322667 10.56 12.885333 16.533333a41.813333 41.813333 0 0 1 11.733334 35.882667c0.256 2.624 0.384 5.269333 0.384 7.936V810.666667a128 128 0 0 1-128 128H277.333333a128 128 0 0 1-128-128V213.333333a128 128 0 0 1 128-128h305.984c2.666667 0 5.333333 0.128 7.978667 0.362667l0.64-0.064a41.749333 41.749333 0 0 1 35.562667 12.202667zM298.666667 170.666667h-21.333334a42.666667 42.666667 0 0 0-42.56 39.466666L234.666667 213.333333v597.333334a42.666667 42.666667 0 0 0 39.466666 42.56L277.333333 853.333333h469.333334a42.666667 42.666667 0 0 0 42.56-39.466666L789.333333 810.666667V405.333333h-192a42.666667 42.666667 0 0 1-42.56-39.466666L554.666667 362.666667l-0.021334-192H405.333333v85.333333h-106.666666V170.666667z m213.333333 426.666666v170.666667H298.666667v-85.333333h106.666666v-85.333334h106.666667z m-106.666667-85.333333v85.333333h-106.666666v-85.333333h106.666666z m106.666667-85.333333v85.333333h-106.666667v-85.333333h106.666667z m-106.666667-85.333334v85.333334h-106.666666v-85.333334h106.666666z m106.666667-85.333333v85.333333h-106.666667v-85.333333h106.666667z m128-24.981333V320h88.981333L640 231.018667z"
          p-id="39535"
        ></path>
      </svg>
    )
  }
)

if (__DEV__) {
  FileZipOutlined.displayName = 'FileZipOutlined'
}

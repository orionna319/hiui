
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-picture-filled'
const _prefix = getPrefixCls(_role)

export const PictureFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M789.333333 106.666667a128 128 0 0 1 128 128v554.666666a128 128 0 0 1-128 128H234.666667a128 128 0 0 1-128-128V234.666667a128 128 0 0 1 128-128h554.666666z m0 85.333333H234.666667a42.666667 42.666667 0 0 0-42.56 39.466667L192 234.666667v345.045333l37.482667-37.546667a128 128 0 0 1 177.130666-3.733333l3.904 3.733333 46.314667 46.336c1.258667 1.237333 2.389333 2.56 3.456 3.882667l123.178667-118.357333a128 128 0 0 1 173.290666-3.754667l4.053334 3.754667L832 542.4V234.666667a42.666667 42.666667 0 0 0-39.466667-42.56L789.333333 192z m-405.333333 85.333333a106.666667 106.666667 0 1 1 0 213.333334 106.666667 106.666667 0 0 1 0-213.333334z" p-id="15261"></path></svg>
    )
  }
)

if (__DEV__) {
  PictureFilled.displayName = 'PictureFilled'
}
  
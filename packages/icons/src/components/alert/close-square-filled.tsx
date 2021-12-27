import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-close-square-filled'
const _prefix = getPrefixCls(_role)

export const CloseSquareFilled = forwardRef<SVGSVGElement | null, IconProps>(
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
          d="M789.333333 106.666667a128 128 0 0 1 128 128v554.666666a128 128 0 0 1-128 128H234.666667a128 128 0 0 1-128-128V234.666667a128 128 0 0 1 128-128z m-85.333333 362.666666H320a42.666667 42.666667 0 1 0 0 85.333334h384a42.666667 42.666667 0 1 0 0-85.333334z"
          p-id="47591"
        ></path>
      </svg>
    )
  }
)

if (__DEV__) {
  CloseSquareFilled.displayName = 'CloseSquareFilled'
}

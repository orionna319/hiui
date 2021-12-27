import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-caret-left-filled'
const _prefix = getPrefixCls(_role)

export const CaretLeftFilled = forwardRef<SVGSVGElement | null, IconProps>(
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
          d="M349.504 536.576L651.52 788.266667A32 32 0 0 0 704 763.669333V260.330667a32 32 0 0 0-52.48-24.597334L349.504 487.424a32 32 0 0 0 0 49.152z"
          p-id="49656"
        ></path>
      </svg>
    )
  }
)

if (__DEV__) {
  CaretLeftFilled.displayName = 'CaretLeftFilled'
}

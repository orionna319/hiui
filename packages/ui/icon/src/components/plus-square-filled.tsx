
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-plus-square-filled'
const _prefix = getPrefixCls(_role)

export const PlusSquareFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M896 112a16 16 0 0 1 16 16v768a16 16 0 0 1-16 16H128a16 16 0 0 1-16-16V128a16 16 0 0 1 16-16h768z m-416 184a8 8 0 0 0-8 8v167.998L304 472a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8l168-0.002V720a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-168h168a8 8 0 0 0 8-8v-64a8 8 0 0 0-8-8h-168v-168a8 8 0 0 0-8-8z" p-id="11645"></path></svg>
    )
  }
)

if (__DEV__) {
  PlusSquareFilled.displayName = 'PlusSquareFilled'
}
  
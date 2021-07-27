
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-minus-square-outlined'
const _prefix = getPrefixCls(_role)

export const MinusSquareOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M896 112a16 16 0 0 1 16 16v768a16 16 0 0 1-16 16H128a16 16 0 0 1-16-16V128a16 16 0 0 1 16-16h768z m-64 80H192v640h640V192zM304 472h416a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8H304a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8z" p-id="13285"></path></svg>
    )
  }
)

if (__DEV__) {
  MinusSquareOutlined.displayName = 'MinusSquareOutlined'
}
  
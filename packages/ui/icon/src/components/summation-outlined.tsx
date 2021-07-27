
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-summation-outlined'
const _prefix = getPrefixCls(_role)

export const SummationOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M112 906l2.39-9.42 0.052-0.266 0.062-0.266L132.134 826h0.17l78.2-308.102a24 24 0 0 0 0.002-11.796L132.476 198h-0.34l-17.632-70.048A8 8 0 0 1 122.264 118H904a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8H212.304l78.198 308.096a24 24 0 0 1 0 11.808L212.304 826H904a8 8 0 0 1 7.99 7.6l0.01 0.4v64a8 8 0 0 1-7.6 7.99l-0.4 0.01H112z" p-id="13555"></path></svg>
    )
  }
)

if (__DEV__) {
  SummationOutlined.displayName = 'SummationOutlined'
}
  
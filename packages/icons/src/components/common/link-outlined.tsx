
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-link-outlined'
const _prefix = getPrefixCls(_role)

export const LinkOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M557.248 587.392l45.269333 45.290667a85.333333 85.333333 0 0 1 0 120.682666L512 843.861333c-83.306667 83.328-218.389333 83.328-301.696 0l-30.165333-30.165333c-83.328-83.306667-83.328-218.389333 0-301.696l90.496-90.517333a85.333333 85.333333 0 0 1 120.682666 0l45.248 45.226666-60.330666 60.352-45.248-45.226666-90.517334 90.496a128 128 0 0 0-3.328 177.578666l3.328 3.456 30.165334 30.165334a128 128 0 0 0 177.578666 3.328l3.456-3.328 90.496-90.517334-45.248-45.269333 60.330667-60.352z m105.6-226.24a42.666667 42.666667 0 0 1 0 60.330667L421.482667 662.848a42.666667 42.666667 0 1 1-60.330667-60.330667l241.365333-241.365333a42.666667 42.666667 0 0 1 60.330667 0z m181.013333-150.848c83.328 83.306667 83.328 218.389333 0 301.696l-90.496 90.517333a85.333333 85.333333 0 0 1-120.682666 0l-45.248-45.290666 60.330666-60.352 45.248 45.290666 90.517334-90.496a128 128 0 0 0 3.328-177.578666l-3.328-3.456-30.165334-30.165334a128 128 0 0 0-177.578666-3.328l-3.456 3.328-90.496 90.517334 45.248 45.226666-60.330667 60.330667-45.269333-45.226667a85.333333 85.333333 0 0 1 0-120.682666L512 180.138667c83.306667-83.328 218.389333-83.328 301.696 0l30.165333 30.165333z" p-id="39695"></path></svg>
    )
  }
)

if (__DEV__) {
  LinkOutlined.displayName = 'LinkOutlined'
}
  
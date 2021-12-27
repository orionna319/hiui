
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-star-filled'
const _prefix = getPrefixCls(_role)

export const StarFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M454.613333 147.882667l-90.090666 182.485333-201.386667 29.269333a64 64 0 0 0-36.608 18.666667l-2.837333 3.114667a64 64 0 0 0 3.989333 87.381333l145.706667 142.037333-34.389334 200.597334a64 64 0 0 0 6.442667 40.597333l1.92 3.413333a64 64 0 0 0 84.501333 23.466667L512 784.192l180.138667 94.72a64 64 0 0 0 40.597333 6.421333l3.690667-0.746666a64 64 0 0 0 48.576-73.152l-34.410667-200.597334 145.728-142.037333a64 64 0 0 0 18.666667-36.629333l0.426666-3.733334a64 64 0 0 0-54.549333-68.8l-201.408-29.269333-90.069333-182.485333a64 64 0 0 0-114.773334 0z" p-id="15321"></path></svg>
    )
  }
)

if (__DEV__) {
  StarFilled.displayName = 'StarFilled'
}
  
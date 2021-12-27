import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-fire-filled'
const _prefix = getPrefixCls(_role)

export const FireFilled = forwardRef<SVGSVGElement | null, IconProps>(
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
          d="M470.229333 109.44l-1.706666 8.234667-4.373334 20.096-4.394666 19.456-4.437334 18.773333c-0.725333 3.093333-1.493333 6.122667-2.218666 9.152l-4.458667 17.706667-4.458667 16.917333-4.416 16.149333-4.394666 15.317334-4.352 14.464-4.266667 13.546666-4.181333 12.629334-4.053334 11.669333-3.968 10.666667-3.818666 9.664-2.666667 6.293333-8.448-23.445333-3.797333-10.026667c-1.194667-3.072-2.346667-5.909333-3.498667-8.64-6.186667-14.592-11.968-25.088-20.202667-33.749333-19.2-20.202667-49.621333-24-72.277333-3.050667C230.741333 315.264 170.666667 486.4 170.666667 597.333333c0 197.205333 158.762667 341.333333 362.666666 341.333334s362.666667-144.128 362.666667-341.333334c0-89.322667-31.765333-189.888-82.346667-251.477333a42.666667 42.666667 0 0 0-61.504-4.650667l-4.48 4.138667-5.12 4.885333-7.957333 7.893334-0.064-1.066667c-12.010667-132.010667-82.496-223.210667-205.141333-277.909333a42.666667 42.666667 0 0 0-59.157334 30.293333z"
          p-id="15101"
        ></path>
      </svg>
    )
  }
)

if (__DEV__) {
  FireFilled.displayName = 'FireFilled'
}

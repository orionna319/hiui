import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-setting-outlined'
const _prefix = getPrefixCls(_role)

export const SettingOutlined = forwardRef<SVGSVGElement | null, IconProps>(
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
          d="M576 106.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v12.992c14.549333 7.082667 28.522667 15.168 41.813334 24.192l11.306666-6.506667a85.333333 85.333333 0 0 1 116.565334 31.232l64 110.848a85.333333 85.333333 0 0 1-31.232 116.565334l-11.306667 6.549333a346.304 346.304 0 0 1 0 48.234667l11.306667 6.570666a85.333333 85.333333 0 0 1 31.232 116.565334l-64 110.848a85.333333 85.333333 0 0 1-116.565334 31.232l-11.306666-6.506667c-13.290667 9.024-27.264 17.109333-41.813334 24.192V832a85.333333 85.333333 0 0 1-85.333333 85.333333h-128a85.333333 85.333333 0 0 1-85.333333-85.333333v-12.970667a340.970667 340.970667 0 0 1-41.834667-24.213333l-11.306667 6.506667a85.333333 85.333333 0 0 1-116.544-31.232l-64-110.848a85.333333 85.333333 0 0 1 31.232-116.565334l11.306667-6.570666a346.304 346.304 0 0 1 0-48.234667l-11.306667-6.549333a85.333333 85.333333 0 0 1-31.232-116.565334l64-110.848a85.333333 85.333333 0 0 1 116.565334-31.232l11.285333 6.506667c13.312-9.024 27.285333-17.109333 41.834667-24.213333V192a85.333333 85.333333 0 0 1 85.333333-85.333333h128z m-128 85.333333l0.042667 66.304-48 23.381333a255.36 255.36 0 0 0-23.765334 13.205334l-7.594666 4.949333-44.224 29.952-57.6-33.216-64 110.848 57.493333 33.237333-3.712 53.141334c-0.426667 6.037333-0.64 12.096-0.64 18.197333l0.149333 9.109333 0.490667 9.066667 3.690667 53.056-57.450667 33.344 64.021333 110.826667 57.557334-33.194667 44.224 29.952c7.509333 5.098667 15.296 9.770667 23.296 14.037333l8.085333 4.117334 48 23.381333L448 832h128l0.064-66.346667 47.893333-23.338666a255.36 255.36 0 0 0 23.765334-13.205334l7.594666-4.949333 44.16-29.909333 57.642667 33.173333 64-110.869333-57.450667-33.322667 3.690667-53.056c0.426667-6.016 0.64-12.074667 0.64-18.176l-0.149333-9.130667-0.490667-9.066666-3.712-53.141334 57.472-33.237333-64-110.848-57.642667 33.173333-44.16-29.909333a255.914667 255.914667 0 0 0-23.274666-14.037333l-8.085334-4.117334-47.893333-23.338666L576 192h-128z m64 149.333333a170.666667 170.666667 0 1 1 0 341.333334 170.666667 170.666667 0 0 1 0-341.333334z m0 85.333334a85.333333 85.333333 0 1 0 0 170.666666 85.333333 85.333333 0 0 0 0-170.666666z"
          p-id="38945"
        ></path>
      </svg>
    )
  }
)

if (__DEV__) {
  SettingOutlined.displayName = 'SettingOutlined'
}


import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-location-outlined'
const _prefix = getPrefixCls(_role)

export const LocationOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M787.772 164.044c151.08 151.08 152.83 394.852 5.07 547.492l-4.524 4.598L518.352 986.1a8.22 8.22 0 0 1-11.624-0.012l-270.5-270.5C83.622 562.98 83.38 315.8 235.682 163.498c152.304-152.304 399.484-152.06 552.09 0.546z m-56.568 56.568c-121.39-121.388-317.916-121.582-438.954-0.546-119.826 119.828-120.834 313.64-3.06 435.29l3.606 3.664 219.75 219.748 218.988-218.99 3.96-4.026 3.358-3.522c112.856-120.404 111.228-308.93-4.084-427.994l-3.564-3.624zM512 290c83.948 0 152 68.052 152 152s-68.052 152-152 152-152-68.052-152-152 68.052-152 152-152z m0 80c-39.764 0-72 32.236-72 72s32.236 72 72 72 72-32.236 72-72-32.236-72-72-72z" p-id="12965"></path></svg>
    )
  }
)

if (__DEV__) {
  LocationOutlined.displayName = 'LocationOutlined'
}
  
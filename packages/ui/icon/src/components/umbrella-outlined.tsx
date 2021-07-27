
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-umbrella-outlined'
const _prefix = getPrefixCls(_role)

export const UmbrellaOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M672 786a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v32c0 77.32-62.68 140-140 140s-140-62.68-140-140V510H76c0-240.796 195.204-436 436-436 238.388 0 432.092 191.32 435.94 428.79L948 510H552v308c0 33.138 26.862 60 60 60 33.138 0 60-26.862 60-60v-32zM512 154c-167.396 0-307.808 115.536-345.842 271.216L165.024 430h693.954l-1.148-4.87c-37.638-153.948-175.38-268.44-340.008-271.084L512 154z" p-id="11525"></path></svg>
    )
  }
)

if (__DEV__) {
  UmbrellaOutlined.displayName = 'UmbrellaOutlined'
}
  

import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-lock-outlined'
const _prefix = getPrefixCls(_role)

export const LockOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M122 348a8 8 0 0 1 8-8h764a8 8 0 0 1 8 8v608a8 8 0 0 1-8 8H130a8 8 0 0 1-8-8V348z m700 72H202v464h620V420zM512 60c132.548 0 240 107.452 240 240h-80c0-88.366-71.634-160-160-160s-160 71.634-160 160h-80c0-132.548 107.452-240 240-240zM672 300h80v86h-80zM272 300h80v86h-80zM480 564h64a8 8 0 0 1 8 8v160a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-160a8 8 0 0 1 8-8z" p-id="12905"></path></svg>
    )
  }
)

if (__DEV__) {
  LockOutlined.displayName = 'LockOutlined'
}
  
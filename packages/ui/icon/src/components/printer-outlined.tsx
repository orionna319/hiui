
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-printer-outlined'
const _prefix = getPrefixCls(_role)

export const PrinterOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M944 308a8 8 0 0 1 8 8v384a8 8 0 0 1-8 8h-198v-80h126V388H152v240h126v80H80a8 8 0 0 1-8-8V316a8 8 0 0 1 8-8h864zM784 516a8 8 0 0 1 8 8v424a8 8 0 0 1-8 8H240a8 8 0 0 1-8-8V524a8 8 0 0 1 8-8h544z m-72 80H312v280h400V596zM804 88a8 8 0 0 1 8 8v284a8 8 0 0 1-8 8H220a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h584z m-72 80H292v140h440V168zM732 412m4 0l72 0q4 0 4 4l0 72q0 4-4 4l-72 0q-4 0-4-4l0-72q0-4 4-4Z" p-id="13045"></path></svg>
    )
  }
)

if (__DEV__) {
  PrinterOutlined.displayName = 'PrinterOutlined'
}
  
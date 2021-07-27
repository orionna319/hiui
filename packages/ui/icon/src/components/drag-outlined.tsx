
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-drag-outlined'
const _prefix = getPrefixCls(_role)

export const DragOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M830.322 472v-80.45a4 4 0 0 1 0.934-2.57l0.24-0.26a4 4 0 0 1 5.436-0.202l0.22 0.202 120.45 120.452a4 4 0 0 1 0.204 5.438l-0.204 0.22-120.45 120.45a4 4 0 0 1-6.814-2.484l-0.016-0.346V552H552V830.32h80.452l0.346 0.016a4 4 0 0 1 2.72 6.554l-0.236 0.26-120.452 120.45-0.22 0.204a4 4 0 0 1-5.18 0.032l-0.256-0.236-120.452-120.45-0.202-0.22a4 4 0 0 1-0.032-5.18l0.234-0.258 0.26-0.238a4 4 0 0 1 2.218-0.918l0.352-0.016H472V552H193.676v80.452a4 4 0 0 1-0.934 2.57l-0.24 0.26a4 4 0 0 1-5.436 0.202l-0.22-0.202L66.4 514.828a4 4 0 0 1-0.204-5.438l0.204-0.22 120.45-120.45a4 4 0 0 1 6.814 2.484l0.016 0.346V472H472V193.676h-80.45l-0.346-0.016a4 4 0 0 1-2.72-6.554l0.236-0.26L509.172 66.4l0.22-0.204a4 4 0 0 1 5.18-0.032l0.256 0.236 120.452 120.45 0.202 0.22a4 4 0 0 1 0.032 5.18l-0.234 0.258-0.26 0.238a4 4 0 0 1-2.218 0.918l-0.352 0.016H552v278.32l110 0.002h168.322z" p-id="13505"></path></svg>
    )
  }
)

if (__DEV__) {
  DragOutlined.displayName = 'DragOutlined'
}
  
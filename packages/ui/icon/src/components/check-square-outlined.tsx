
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-check-square-outlined'
const _prefix = getPrefixCls(_role)

export const CheckSquareOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M896 112a16 16 0 0 1 16 16v768a16 16 0 0 1-16 16H128a16 16 0 0 1-16-16V128a16 16 0 0 1 16-16h768z m-64 80H192v640h640V192zM330.98 500.628a8 8 0 0 1 11.314 0l96.166 96.164 243.246-243.242a8 8 0 0 1 11.314 0l45.254 45.254a8 8 0 0 1 0 11.314L444.12 704.274a8 8 0 0 1-11.314 0l-147.08-147.078a8 8 0 0 1 0-11.314l45.256-45.254z" p-id="13205"></path></svg>
    )
  }
)

if (__DEV__) {
  CheckSquareOutlined.displayName = 'CheckSquareOutlined'
}
  
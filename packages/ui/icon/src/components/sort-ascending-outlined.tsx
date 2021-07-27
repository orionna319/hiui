
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-sort-ascending-outlined'
const _prefix = getPrefixCls(_role)

export const SortAscendingOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M145.172 769.378l-0.204-0.22a4 4 0 0 1 0.204-5.438l0.26-0.236a4 4 0 0 1 2.568-0.934h80.452V614l-0.012-0.002V132h80v366.888l0.01 0.382v263.28h80.452l0.344 0.014a4 4 0 0 1 2.484 6.814l-120.45 120.45-0.22 0.204a4 4 0 0 1-5.438-0.204L145.172 769.38zM620.058 476l26.956-76.16h128.528L801.536 476H880L751.472 134h-77.5L544 476h76.058zM754 344h-88l44.238-126h0.952L754 344zM856.64 890v-63.226h-188.794l183.99-219.38V548h-269.98v63.226h169.578l-183.99 219.38V890z" p-id="13545"></path></svg>
    )
  }
)

if (__DEV__) {
  SortAscendingOutlined.displayName = 'SortAscendingOutlined'
}
  
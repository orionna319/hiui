import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-video-camera-outlined'
const _prefix = getPrefixCls(_role)

export const VideoCameraOutlined = forwardRef<SVGSVGElement | null, IconProps>(
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
          d="M640 170.666667a128 128 0 0 1 127.914667 123.2L768 298.666667v47.466666l79.68-26.56a85.333333 85.333333 0 0 1 104.746667 45.824l1.706666 4.010667 1.493334 4.138667a85.333333 85.333333 0 0 1 4.202666 21.482666l0.170667 5.504v222.933334a85.333333 85.333333 0 0 1-107.050667 82.517333l-5.269333-1.557333L768 677.845333V725.333333a128 128 0 0 1-118.442667 127.658667l-4.757333 0.256L640 853.333333H192a128 128 0 0 1-127.914667-123.2L64 725.333333V298.666667a128 128 0 0 1 123.2-127.914667L192 170.666667h448z m0 85.333333H192a42.666667 42.666667 0 0 0-42.56 39.466667L149.333333 298.666667v426.666666a42.666667 42.666667 0 0 0 39.466667 42.56L192 768h448a42.666667 42.666667 0 0 0 42.56-39.466667L682.666667 725.333333v-77.077333a64 64 0 0 1 0.533333-8.256H682.666667V384h0.533333a64.32 64.32 0 0 1-0.426667-4.501333L682.666667 375.744V298.666667a42.666667 42.666667 0 0 0-42.666667-42.666667z m209.002667 153.237333l-2.410667 0.64L768 436.096v151.829333l78.592 26.197334a21.333333 21.333333 0 0 0 27.946667-17.749334l0.128-2.474666v-163.754667a21.333333 21.333333 0 0 0-25.664-20.885333zM405.333333 320a42.666667 42.666667 0 1 1 0 85.333333h-149.333333a42.666667 42.666667 0 1 1 0-85.333333h149.333333z"
          p-id="38685"
        ></path>
      </svg>
    )
  }
)

if (__DEV__) {
  VideoCameraOutlined.displayName = 'VideoCameraOutlined'
}

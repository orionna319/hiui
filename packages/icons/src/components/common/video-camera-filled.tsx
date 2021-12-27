import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-video-camera-filled'
const _prefix = getPrefixCls(_role)

export const VideoCameraFilled = forwardRef<SVGSVGElement | null, IconProps>(
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
          d="M640 170.666667a128 128 0 0 1 127.914667 123.2L768 298.666667v47.466666l79.68-26.56a85.333333 85.333333 0 0 1 104.746667 45.824l1.706666 4.010667 1.493334 4.138667a85.333333 85.333333 0 0 1 4.202666 21.482666l0.170667 5.504v222.933334a85.333333 85.333333 0 0 1-107.050667 82.517333l-5.269333-1.557333L768 677.845333V725.333333a128 128 0 0 1-118.442667 127.658667l-4.757333 0.256L640 853.333333H192a128 128 0 0 1-127.914667-123.2L64 725.333333V298.666667a128 128 0 0 1 123.2-127.914667L192 170.666667h448z m-234.666667 149.333333h-149.333333a42.666667 42.666667 0 0 0-3.2 85.226667L256 405.333333h149.333333a42.666667 42.666667 0 1 0 0-85.333333z"
          p-id="15531"
        ></path>
      </svg>
    )
  }
)

if (__DEV__) {
  VideoCameraFilled.displayName = 'VideoCameraFilled'
}

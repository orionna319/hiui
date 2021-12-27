import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-bulb-outlined'
const _prefix = getPrefixCls(_role)

export const BulbOutlined = forwardRef<SVGSVGElement | null, IconProps>(
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
          d="M512 64c200.298667 0 362.666667 162.368 362.666667 362.666667a362.645333 362.645333 0 0 1-183.552 315.434666l-6.613334 3.669334-1.834666 0.938666V832a128 128 0 0 1-118.442667 127.658667l-4.757333 0.256L554.666667 960h-85.333334a128 128 0 0 1-127.914666-123.2L341.333333 832v-85.269333l-1.792-0.96a362.666667 362.666667 0 0 1-189.866666-303.424l-0.256-7.893334L149.333333 426.666667c0-200.298667 162.368-362.666667 362.666667-362.666667z m85.333333 704h-170.666666v64a42.666667 42.666667 0 0 0 39.466666 42.56L469.333333 874.666667h85.333334a42.666667 42.666667 0 0 0 42.56-39.488l0.106666-3.2V768zM512 149.333333c-153.173333 0-277.333333 124.16-277.333333 277.333334 0 108.992 63.445333 206.336 160.213333 251.477333l6.186667 2.794667 4.266666 1.856V682.666667h213.333334v0.106666l4.266666-1.834666A277.376 277.376 0 0 0 789.333333 426.666667c0-153.173333-124.16-277.333333-277.333333-277.333334z m0 85.333334a192 192 0 0 1 192 192 42.666667 42.666667 0 0 1-85.226667 3.2L618.666667 426.666667a106.666667 106.666667 0 0 0-106.666667-106.666667 42.666667 42.666667 0 1 1 0-85.333333z"
          p-id="39235"
        ></path>
      </svg>
    )
  }
)

if (__DEV__) {
  BulbOutlined.displayName = 'BulbOutlined'
}

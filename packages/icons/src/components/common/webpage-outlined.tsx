import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-webpage-outlined'
const _prefix = getPrefixCls(_role)

export const WebpageOutlined = forwardRef<SVGSVGElement | null, IconProps>(
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
          d="M789.333333 106.666667a128 128 0 0 1 128 128v554.666666a128 128 0 0 1-128 128H234.666667a128 128 0 0 1-128-128V234.666667a128 128 0 0 1 128-128h554.666666z m42.666667 362.666666H192v320a42.666667 42.666667 0 0 0 39.466667 42.56L234.666667 832h554.666666a42.666667 42.666667 0 0 0 42.56-39.466667L832 789.333333V469.333333zM789.333333 192H234.666667a42.666667 42.666667 0 0 0-42.56 39.466667L192 234.666667v149.333333h640v-149.333333a42.666667 42.666667 0 0 0-39.466667-42.56L789.333333 192z m-469.333333 64a21.333333 21.333333 0 0 1 21.333333 21.333333v42.666667a21.333333 21.333333 0 0 1-21.333333 21.333333h-42.666667a21.333333 21.333333 0 0 1-21.333333-21.333333v-42.666667a21.333333 21.333333 0 0 1 21.333333-21.333333h42.666667z m128 0a21.333333 21.333333 0 0 1 21.333333 21.333333v42.666667a21.333333 21.333333 0 0 1-21.333333 21.333333h-42.666667a21.333333 21.333333 0 0 1-21.333333-21.333333v-42.666667a21.333333 21.333333 0 0 1 21.333333-21.333333h42.666667z m128 0a21.333333 21.333333 0 0 1 21.333333 21.333333v42.666667a21.333333 21.333333 0 0 1-21.333333 21.333333h-42.666667a21.333333 21.333333 0 0 1-21.333333-21.333333v-42.666667a21.333333 21.333333 0 0 1 21.333333-21.333333h42.666667z"
          p-id="38625"
        ></path>
      </svg>
    )
  }
)

if (__DEV__) {
  WebpageOutlined.displayName = 'WebpageOutlined'
}

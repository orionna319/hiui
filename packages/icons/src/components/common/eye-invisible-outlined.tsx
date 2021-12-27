import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-eye-invisible-outlined'
const _prefix = getPrefixCls(_role)

export const EyeInvisibleOutlined = forwardRef<SVGSVGElement | null, IconProps>(
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
          d="M851.498667 172.501333a42.666667 42.666667 0 0 1 2.496 57.621334l-2.496 2.709333-89.130667 89.130667C824 367.488 882.773333 430.848 938.666667 512c-127.36 184.896-269.568 277.333333-426.666667 277.333333-60.736 0-119.253333-13.824-175.530667-41.450666l-103.637333 103.616a42.666667 42.666667 0 0 1-62.826667-57.621334l2.496-2.709333 89.130667-89.130667C200 656.512 141.226667 593.152 85.333333 512c127.36-184.896 269.568-277.333333 426.666667-277.333333 60.736 0 119.253333 13.824 175.530667 41.450666l103.637333-103.616a42.666667 42.666667 0 0 1 60.330667 0z m-150.229334 210.56l-73.728 73.770667a128 128 0 0 1-170.709333 170.709333l-55.594667 55.594667c34.048 13.141333 68.629333 19.989333 103.786667 20.778667L512 704c109.226667 0 212.736-58.026667 312-180.778667l8.896-11.221333-2.282667-2.944c-42.304-53.653333-85.397333-95.466667-129.344-125.973333zM512 320c-111.658667 0-217.322667 60.629333-318.613333 189.056L191.082667 512l2.304 2.944c42.304 53.653333 85.397333 95.466667 129.344 125.973333l73.728-73.749333a128 128 0 0 1 170.709333-170.709333l55.594667-55.594667a305.344 305.344 0 0 0-103.786667-20.778667L512 320z"
          p-id="39405"
        ></path>
      </svg>
    )
  }
)

if (__DEV__) {
  EyeInvisibleOutlined.displayName = 'EyeInvisibleOutlined'
}

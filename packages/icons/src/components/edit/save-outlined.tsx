import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-save-outlined'
const _prefix = getPrefixCls(_role)

export const SaveOutlined = forwardRef<SVGSVGElement | null, IconProps>(
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
          d="M729.002667 106.666667a85.333333 85.333333 0 0 1 56.810666 21.674666l3.52 3.328L892.330667 234.666667a85.333333 85.333333 0 0 1 24.874666 55.509333l0.128 4.821333V789.333333a128 128 0 0 1-123.2 127.914667L789.333333 917.333333H234.666667a128 128 0 0 1-127.914667-123.2L106.666667 789.333333V234.666667a128 128 0 0 1 123.2-127.914667L234.666667 106.666667h494.336zM320 192h-85.333333a42.666667 42.666667 0 0 0-42.56 39.466667L192 234.666667v554.666666a42.666667 42.666667 0 0 0 39.466667 42.56L234.666667 832h554.666666a42.666667 42.666667 0 0 0 42.56-39.466667L832 789.333333V330.368a85.333333 85.333333 0 0 0-21.674667-56.832l-3.328-3.52-53.013333-53.013333A85.333333 85.333333 0 0 0 704 192.64L704 384a85.333333 85.333333 0 0 1-81.066667 85.226667L618.666667 469.333333H405.333333a85.333333 85.333333 0 0 1-85.226666-81.066666L320 384V192z m365.013333 448a21.333333 21.333333 0 0 1 21.333334 21.333333v42.666667a21.333333 21.333333 0 0 1-21.333334 21.333333H345.984a21.333333 21.333333 0 0 1-21.333333-21.333333v-42.666667a21.333333 21.333333 0 0 1 21.333333-21.333333H685.013333zM618.666667 192H405.333333v192h213.333334V192z"
          p-id="44946"
        ></path>
      </svg>
    )
  }
)

if (__DEV__) {
  SaveOutlined.displayName = 'SaveOutlined'
}

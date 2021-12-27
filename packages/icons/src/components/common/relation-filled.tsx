import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-relation-filled'
const _prefix = getPrefixCls(_role)

export const RelationFilled = forwardRef<SVGSVGElement | null, IconProps>(
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
          d="M533.333333 106.666667a128 128 0 0 1 128 128v42.666666a128.042667 128.042667 0 0 1-106.666666 126.229334V469.333333h234.666666a85.333333 85.333333 0 0 1 85.226667 81.066667L874.666667 554.666667v88.064c48.853333 11.093333 85.333333 54.784 85.333333 106.986666v36.565334A109.717333 109.717333 0 0 1 850.282667 896h-36.565334A109.717333 109.717333 0 0 1 704 786.282667v-36.565334a109.76 109.76 0 0 1 85.333333-107.008V554.666667H554.666667v88.064a109.76 109.76 0 0 1 85.226666 102.336l0.106667 4.650666v36.565334A109.717333 109.717333 0 0 1 530.282667 896h-36.565334A109.717333 109.717333 0 0 1 384 786.282667v-36.565334a109.76 109.76 0 0 1 85.333333-107.008V554.666667H234.666667v88.064c48.853333 11.093333 85.333333 54.784 85.333333 106.986666v36.565334A109.717333 109.717333 0 0 1 210.282667 896H173.717333A109.717333 109.717333 0 0 1 64 786.282667v-36.565334a109.76 109.76 0 0 1 85.333333-107.008V554.666667a85.333333 85.333333 0 0 1 81.066667-85.226667L234.666667 469.333333h234.666666v-65.770666a128.042667 128.042667 0 0 1-106.581333-121.429334L362.666667 277.333333v-42.666666a128 128 0 0 1 128-128z"
          p-id="15231"
        ></path>
      </svg>
    )
  }
)

if (__DEV__) {
  RelationFilled.displayName = 'RelationFilled'
}

import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-document-search-outlined'
const _prefix = getPrefixCls(_role)

export const DocumentSearchOutlined = forwardRef<SVGSVGElement | null, IconProps>(
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
          d="M746.666667 85.333333a128 128 0 0 1 128 128v341.333334a42.666667 42.666667 0 0 1-85.226667 3.2L789.333333 554.666667V213.333333a42.666667 42.666667 0 0 0-39.466666-42.56L746.666667 170.666667H277.333333a42.666667 42.666667 0 0 0-42.56 39.466666L234.666667 213.333333v597.333334a42.666667 42.666667 0 0 0 39.466666 42.56L277.333333 853.333333h213.333334a42.666667 42.666667 0 0 1 3.2 85.226667L490.666667 938.666667H277.333333a128 128 0 0 1-128-128V213.333333a128 128 0 0 1 128-128h469.333334z m-74.666667 512a138.666667 138.666667 0 0 1 123.477333 201.813334l66.688 66.688a42.666667 42.666667 0 0 1-57.621333 62.826666l-2.709333-2.496-66.688-66.688A138.666667 138.666667 0 1 1 672 597.333333z m0 85.333334a53.333333 53.333333 0 1 0 20.48 102.613333l3.754667-1.728 15.402666-7.914667 7.893334-15.402666c3.178667-6.186667 5.077333-12.885333 5.632-19.946667L725.333333 736a53.333333 53.333333 0 0 0-53.333333-53.333333zM618.666667 469.333333a42.666667 42.666667 0 1 1 0 85.333334H405.333333a42.666667 42.666667 0 1 1 0-85.333334h213.333334z m0-170.666666a42.666667 42.666667 0 1 1 0 85.333333H405.333333a42.666667 42.666667 0 1 1 0-85.333333h213.333334z"
          p-id="44926"
        ></path>
      </svg>
    )
  }
)

if (__DEV__) {
  DocumentSearchOutlined.displayName = 'DocumentSearchOutlined'
}

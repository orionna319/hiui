
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-exe-colorful')

export const ExeColorful = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, size, style: styleProp, ...rest }, ref) => {
    const cls = cx(prefixCls, className)
    const style = { fontSize: size, ...styleProp }

    return (
      <svg className={cls} ref={ref} role="icon" style={style} {...rest}     viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M643.669333 110.336l205.994667 205.994667A85.333333 85.333333 0 0 1 874.666667 376.682667V810.666667a128 128 0 0 1-128 128H277.333333a128 128 0 0 1-128-128V213.333333a128 128 0 0 1 128-128h305.984a85.333333 85.333333 0 0 1 60.352 25.002667z" fill="#7298D0" /><path d="M554.666667 128v234.666667a42.666667 42.666667 0 0 0 42.666666 42.666666h234.666667c38.016 0 57.045333-45.952 30.165333-72.832l-234.666666-234.666666C600.618667 70.954667 554.666667 89.984 554.666667 128z" fill="#BCDAF7" /><path d="M380.736 708.48c20.992 0 37.333333-6.613333 49.002667-19.84 7.488-8.341333 11.690667-16.554667 12.608-24.64H405.973333c-1.92 4.010667-4.117333 7.125333-6.613333 9.386667-4.586667 4.16-10.538667 6.229333-17.877333 6.229333-6.912 0-12.842667-1.706667-17.749334-5.12-8.106667-5.504-12.373333-15.082667-12.885333-28.736h93.248c0.170667-11.754667-0.213333-20.757333-1.109333-27.008-1.6-10.666667-5.056-20.053333-10.389334-28.117333a53.653333 53.653333 0 0 0-22.485333-20.138667 71.402667 71.402667 0 0 0-30.634667-6.378667c-19.072 0-34.602667 6.293333-46.570666 18.88-11.946667 12.586667-17.92 30.677333-17.92 54.250667 0 25.173333 6.613333 43.328 19.861333 54.506667a69.098667 69.098667 0 0 0 45.866667 16.746666z m26.368-86.229333h-55.381333c1.173333-8.832 4.032-15.829333 8.576-20.992 4.544-5.184 10.922667-7.765333 19.2-7.765334 7.573333 0 13.909333 2.453333 19.050666 7.317334 5.12 4.885333 7.978667 12.032 8.554667 21.44zM497.984 704l23.616-40.874667L545.109333 704h44.373334l-46.506667-69.632 44.757333-66.368h-42.389333l-22.229333 39.509333-22.762667-39.509333H456.746667l44.501333 66.986667L454.72 704h43.264z m167.488 4.48c21.013333 0 37.333333-6.613333 49.002667-19.84 7.509333-8.341333 11.712-16.554667 12.629333-24.64h-36.373333c-1.92 4.010667-4.117333 7.125333-6.613334 9.386667-4.586667 4.16-10.56 6.229333-17.898666 6.229333-6.912 0-12.821333-1.706667-17.749334-5.12-8.064-5.504-12.373333-15.082667-12.864-28.736h93.248c0.170667-11.754667-0.213333-20.757333-1.130666-27.008-1.578667-10.666667-5.034667-20.053333-10.368-28.117333a53.653333 53.653333 0 0 0-22.506667-20.138667 71.402667 71.402667 0 0 0-30.613333-6.378667c-19.093333 0-34.602667 6.293333-46.570667 18.88-11.946667 12.586667-17.92 30.677333-17.92 54.250667 0 25.173333 6.613333 43.328 19.84 54.506667a69.098667 69.098667 0 0 0 45.888 16.746666z m26.389333-86.229333h-55.381333c1.173333-8.832 4.010667-15.829333 8.554667-20.992 4.544-5.184 10.944-7.765333 19.2-7.765334 7.573333 0 13.930667 2.453333 19.050666 7.317334 5.12 4.885333 7.978667 12.032 8.576 21.44z" fill="#FFFFFF" /></svg>
    )
  }
)

if (__DEV__) {
  ExeColorful.displayName = 'ExeColorful'
}
  
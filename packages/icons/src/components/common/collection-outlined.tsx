
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-collection-outlined')

export const CollectionOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, size, style: styleProp, ...rest }, ref) => {
    const cls = cx(prefixCls, className)
    const style = { fontSize: size, ...styleProp }

    return (
      <svg className={cls} ref={ref} role="icon" style={style} {...rest}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M335.68 149.333333a85.333333 85.333333 0 0 1 73.173333 41.429334L460.8 277.333333H810.666667a128 128 0 0 1 128 128v341.333334a128 128 0 0 1-128 128H213.333333a128 128 0 0 1-128-128V234.666667a85.333333 85.333333 0 0 1 85.333334-85.333334h165.013333z m0 85.333334H170.666667v512a42.666667 42.666667 0 0 0 39.466666 42.56L213.333333 789.333333h597.333334a42.666667 42.666667 0 0 0 42.56-39.466666L853.333333 746.666667V405.333333a42.666667 42.666667 0 0 0-39.466666-42.56L810.666667 362.666667H412.48l-76.8-128z m158.442667 196.394666a43.733333 43.733333 0 0 1 78.421333 0l26.730667 54.165334 59.797333 8.682666a43.733333 43.733333 0 0 1 37.333333 46.314667l-0.341333 3.264a43.733333 43.733333 0 0 1-12.757333 25.024L640 610.666667l10.24 59.541333a43.733333 43.733333 0 0 1-32.512 49.834667l-3.2 0.661333a43.733333 43.733333 0 0 1-27.733333-4.394667L533.333333 688.213333l-53.461333 28.117334a43.733333 43.733333 0 0 1-57.365333-15.381334l-1.706667-2.986666a43.733333 43.733333 0 0 1-4.394667-27.733334l10.218667-59.541333-43.264-42.154667a43.733333 43.733333 0 0 1-3.2-59.178666l2.410667-2.666667a43.733333 43.733333 0 0 1 25.024-12.757333l59.776-8.682667zM533.333333 544.213333l-0.832 1.536a43.733333 43.733333 0 0 1-31.210666 20.778667l1.856-0.362667 1.152 1.28c6.933333 7.957333 10.730667 18.133333 10.752 28.608l-0.170667 3.946667-0.234667 1.685333 1.877334-0.853333a43.733333 43.733333 0 0 1 33.621333 0l1.856 0.853333-0.213333-1.706666a43.733333 43.733333 0 0 1 10.581333-32.554667l1.152-1.258667-1.664-0.298666a43.733333 43.733333 0 0 1-27.690667-20.117334L533.333333 544.213333zM768 149.333333a42.666667 42.666667 0 1 1 0 85.333334H512a42.666667 42.666667 0 1 1 0-85.333334h256z" p-id="39305"></path></svg>
    )
  }
)

if (__DEV__) {
  CollectionOutlined.displayName = 'CollectionOutlined'
}
  
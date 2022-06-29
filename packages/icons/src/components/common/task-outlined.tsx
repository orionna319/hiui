
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-task-outlined')

export const TaskOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, size, style: styleProp, ...rest }, ref) => {
    const cls = cx(prefixCls, className)
    const style = { fontSize: size, ...styleProp }

    return (
      <svg className={cls} ref={ref} role="icon" style={style} {...rest}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M661.333333 64a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666666h85.333333a128 128 0 0 1 128 128v512a128 128 0 0 1-128 128H234.666667a128 128 0 0 1-128-128V277.333333a128 128 0 0 1 128-128h85.333333V106.666667a42.666667 42.666667 0 1 1 85.333333 0v42.666666h213.333334V106.666667a42.666667 42.666667 0 0 1 42.666666-42.666667z m170.666667 384H192v341.333333a42.666667 42.666667 0 0 0 39.466667 42.56L234.666667 832h554.666666a42.666667 42.666667 0 0 0 42.56-39.466667L832 789.333333V448z m-129.834667 44.501333a42.666667 42.666667 0 0 1 0 60.330667l-176.917333 176.917333a64 64 0 0 1-90.496 0l-91.584-91.584a42.666667 42.666667 0 0 1 60.330667-60.330666l61.418666 61.397333a21.333333 21.333333 0 0 0 30.165334 0l146.752-146.730667a42.666667 42.666667 0 0 1 60.330666 0zM320 234.666667h-85.333333a42.666667 42.666667 0 0 0-42.56 39.466666L192 277.333333v85.333334h640v-85.333334a42.666667 42.666667 0 0 0-39.466667-42.56L789.333333 234.666667h-85.333333v42.666666a42.666667 42.666667 0 1 1-85.333333 0v-42.666666H405.333333v42.666666a42.666667 42.666667 0 1 1-85.333333 0v-42.666666z" p-id="39075"></path></svg>
    )
  }
)

if (__DEV__) {
  TaskOutlined.displayName = 'TaskOutlined'
}
  
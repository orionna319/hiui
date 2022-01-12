import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { TableRow } from './TableRow'
import { useTableContext } from './context'
import { useLatestCallback } from '@hi-ui/use-latest'
import { TableRowRequiredProps } from './types'
import { isArrayNonEmpty } from '@hi-ui/type-assertion'
import { EmptyState } from '@hi-ui/empty-state'

const _role = 'table'
const _prefix = getPrefixCls(_role)

/**
 * TODO: What is TableBody
 */
export const TableBody = forwardRef<HTMLDivElement | null, TableBodyProps>(
  ({ prefixCls = _prefix }, ref) => {
    const {
      columns,
      leafColumns,
      firstRowElementRef,
      isExpandTreeRows,
      transitionData,
      getColgroupProps,
      bodyTableRef,
      scrollBodyElementRef,
      onTableBodyScroll,
      maxHeight,
      canScroll,
      // fixedColWidth,
    } = useTableContext()

    const cls = cx(`${prefixCls}__body`)

    // const calcColPosition = (col, idx) => {
    //   // TODO: 前缀和优化
    //   return fixedColWidth
    //     .slice(0, idx)
    //     .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    // }

    const getRequiredProps = useLatestCallback(
      (id: React.ReactText): TableRowRequiredProps => {
        return {
          // @ts-ignore
          expandedTree: isExpandTreeRows(id),
          // checked: isCheckedId(id),
          // semiChecked: isSemiCheckedId(id),
          // selected: selectedId === id,
          // loading: isLoadingId(id),
          // focused: focusedId === id,
        }
      }
    )

    // TODO: 空状态

    return (
      // 外层增加 div 作为滚动容器
      <div
        ref={scrollBodyElementRef}
        className={cls}
        onScroll={onTableBodyScroll}
        style={{
          maxHeight: maxHeight || 'auto',
          // maxHeight 小于 table 实际高度才出现纵向滚动条
          overflowY:
            maxHeight !== undefined &&
            bodyTableRef.current &&
            bodyTableRef.current.clientHeight > maxHeight
              ? 'scroll'
              : undefined,
          // 表格宽度大于div宽度才出现横向滚动条
          overflowX: canScroll ? 'scroll' : undefined,
        }}
      >
        <table ref={bodyTableRef} style={{ width: '100%' }}>
          <colgroup>
            {leafColumns.map((col: any, idx) => {
              return (
                <col key={idx} className={`${prefixCls}-col`} {...getColgroupProps(col, idx)} />
              )
            })}
          </colgroup>
          <tbody>
            {isArrayNonEmpty(transitionData) ? (
              transitionData.map((row, index) => {
                return (
                  <TableRow
                    ref={index === 0 ? firstRowElementRef : null}
                    // key={depth + index}
                    key={row.id}
                    // @ts-ignore
                    rowIndex={index}
                    rowData={row}
                    // expandedTree={isExpandTreeRows(row.id)}
                    {...getRequiredProps(row.id)}
                  />
                )
              })
            ) : (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: 'center', height: 60 }}>
                  <EmptyState style={{ marginTop: 24 }} />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
)

export interface TableBodyProps {
  /**
   * 组件默认的选择器类
   */
  prefixCls?: string
}

if (__DEV__) {
  TableBody.displayName = 'TableBody'
}

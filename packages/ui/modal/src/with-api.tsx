import React, { createRef, createElement } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import * as Container from '@hi-ui/container'

import { _prefix, Modal, ModalProps } from './Modal'

const prefixCls = _prefix
const selector = `.${prefixCls}-wrapper`

// TODO： 抽离合并到 Toast API
const open = ({ onConfirm, onCancel, content, ...rest }: ModalApiProps = {}) => {
  // TODO: 考虑是否支持多个 Modal 共存
  let container: any = Container.getContainer(selector)

  const toastManagerRef = createRef<any>()

  const ClonedModal = createElement(Modal, {
    width: 400,
    showHeaderDivider: false,
    type: 'info',
    ...rest,
    visible: true,
    innerRef: toastManagerRef,
    container,
    onExited: () => {
      // 卸载
      if (container) {
        unmountComponentAtNode(container)
        Container.removeContainer(selector)
      }

      container = undefined
    },
    onConfirm: () => {
      onConfirm?.()
      toastManagerRef.current?.close()
    },
    onCancel: () => {
      onCancel?.()
      toastManagerRef.current?.close()
    },
    children: content,
  })

  // TODO：存在弹出时延迟感
  render(ClonedModal, container)
}

export interface ModalApiProps
  extends Pick<
    ModalProps,
    | 'onConfirm'
    | 'onCancel'
    | 'title'
    | 'cancelText'
    | 'confirmText'
    | 'className'
    | 'type'
    | 'closeable'
    | 'showMask'
  > {
  /**
   * 	confirm 的内容
   */
  content?: React.ReactNode
}

export function withModal(instance: typeof Modal) {
  return Object.assign(instance, { confirm: open })
}

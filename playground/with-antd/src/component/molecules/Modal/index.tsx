import { CloseOutlined } from '@ant-design/icons'
import { Modal, ModalProps } from 'antd'
import React from 'react'
import { IModalProps } from 'react-global-modal'

// const {
//   component: RenderInner,
//   props,
//   closable = true,
//   onClose = () => {},
//   closeModal = () => {},
//   isVisible,
//   width = 500,
//   title,
//   className = '',
//   modalFooter,
//   closeable = true,
//   closeIcon = false,
//   centered = true,
// } = propsValues

type IAntModalProps = IModalProps & {
  width?: number
}
export const CustomModalComponent = React.forwardRef((propsValues: IAntModalProps, ref) => {
  // const {
  //   component: RenderInner,
  //   props,
  //   closable = true,
  //   onClose = () => {},
  //   closeModal = () => {},
  //   isVisible,
  //   width = 500,
  //   title,
  //   className = '',
  //   modalFooter,
  //   closeable = true,
  //   closeIcon = false,
  //   centered = true,
  // } = propsValues

  const {
    children,
    open,
    className = '',
    isCloseable = true,
    title = 'Modal Header',
    onModalClose = () => {},
    footer,
    width,
    closeIconComponent,
  } = propsValues

  return (
    <Modal
      open={open}
      title={title}
      onCancel={onModalClose}
      footer={footer ? [footer] : null}
      width={width}
      className={className}
      closeIcon={closeIconComponent ?? <CloseOutlined />}
      closable={isCloseable}
      centered={true}
    >
      <div
        style={{
          position: 'relative',
        }}
      >
        {children}
      </div>
    </Modal>
  )
})

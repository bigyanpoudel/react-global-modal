import { CloseOutlined } from '@ant-design/icons'
import { Button, Modal } from 'antd'
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
    actions = [],
  } = propsValues
  let footerComponent = null
  if (actions.length > 0)
    footerComponent = actions.map((el: any) => (
      <Button key="back" onClick={el.key} className={el.className}>
        {el.title}
      </Button>
    ))
  if (footer) footerComponent = footer
  return (
    <Modal
      open={open}
      title={title}
      onCancel={onModalClose}
      footer={footerComponent}
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

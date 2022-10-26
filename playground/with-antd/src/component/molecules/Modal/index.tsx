import { Modal } from 'antd'
import React from 'react'
export type IModalProps = {
  open?: boolean
  responsive?: boolean
  children?: any
  className?: string
  onClose?: () => void
  modalSize?: 'xs' | 'sm' | 'md' | 'lg'
  isCloseable?: boolean
  closeButtonClassName?: string
  title?: string
  hideHeader?: boolean
  headerComponent?: React.FC<any>
  headerClassName?: string
  actions?: any[]
  actionClassName?: string
  contentClassName?: string
  onModalClose?: () => void
  hideCloseIcon?: boolean
  width?: string
  isSlidePane?: boolean
  position?: 'right' | 'left'
  footerComponent?: React.ReactNode
}

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

export const CustomModalComponent = React.forwardRef((propsValues: IModalProps, ref) => {
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
    isCloseable = false,
    title = 'Modal Header',
    onModalClose = () => {},
    footerComponent,
  } = propsValues
  // const onModalClose = (isClose: any) => {
  //   if (!closable) return
  //   if (isClose) {
  //     closeModal()
  //     onClose()
  //   }
  //   ModalUtil.close()
  // }

  // props closeIcon React.ReactNode deafult false
  // footer React.ReactNode
  // width

  return (
    <Modal
      visible={open}
      title={title}
      onCancel={onModalClose}
      footer={footerComponent ? footerComponent : null}
      width={500}
      className={className}
      // closeIcon={closeIcon}
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

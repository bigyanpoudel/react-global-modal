import { CloseOutlined } from '@ant-design/icons'
import { Button, Drawer, Modal } from 'antd'
import React from 'react'
import { IModalProps } from 'react-global-modal'

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
    hideCloseIcon = true,
    isSlidePane = false,
    position,
  } = propsValues

  let footerComponent: any = null
  let closeIcon: any = <CloseOutlined />
  if (actions.length > 0)
    footerComponent = actions.map((el: any) => (
      <Button key={el.title} className={el.className} onClick={() => el?.onClick()}>
        {el.title}
      </Button>
    ))

  if (footer) footerComponent = footer

  if (closeIconComponent) closeIcon = closeIconComponent

  if (isCloseable) closeIcon = null

  if (isSlidePane) {
    return (
      <Drawer
        title={title}
        placement={position}
        closable={hideCloseIcon}
        onClose={onModalClose}
        open={open}
        size={width}
        bodyStyle={{
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            position: 'relative',
            height: '100%',
          }}
        >
          {children}
        </div>
      </Drawer>
    )
  }
  return (
    <Modal
      open={open}
      title={title}
      onCancel={onModalClose}
      footer={footerComponent}
      width={width}
      closeIcon={closeIcon}
      closable={hideCloseIcon}
      centered={true}
      bodyStyle={{
        margin: 0,
        padding: 0,
      }}
      className={className}
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

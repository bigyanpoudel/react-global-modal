import { CloseOutlined } from '@ant-design/icons'
import { Button, Drawer, Modal } from 'antd'
import React from 'react'
import { IModalProps } from 'react-global-modal'

type IAntModalProps = IModalProps & {
  width?: number
  centered?: boolean
}
export const CustomModalComponent = React.forwardRef((propsValues: IAntModalProps, ref) => {
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
    isSlidePane = false,
    position,
    centered = true,
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
        closable={isCloseable}
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
      closable={isCloseable}
      centered={centered}
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

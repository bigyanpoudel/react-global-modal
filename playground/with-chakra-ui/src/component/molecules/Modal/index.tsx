import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
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
    open = false,
    className = '',
    isCloseable,
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
  console.log('Close', isCloseable)
  return (
    <Modal isOpen={open} onClose={onModalClose} closeOnOverlayClick={isCloseable}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        {!isCloseable && <ModalCloseButton />}
        <ModalBody>
          <h1>hasdasdasdasd</h1>
        </ModalBody>

        {actions.length > 0 && (
          <ModalFooter>
            {actions.map((el: any) => (
              <Button
                key={el.title}
                colorScheme={el.colorScheme}
                mr={3}
                onClick={el.onClick}
                variant={el.variant ?? 'ghost'}
              >
                {el.title}
              </Button>
            ))}
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
})

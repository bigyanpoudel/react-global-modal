import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
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
  scrollBehavior?: 'inside' | 'outside'
  isCentered?: boolean
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}
export const CustomModalComponent = React.forwardRef((propsValues: IAntModalProps, ref) => {
  const {
    children,
    open = false,
    isCloseable,
    title = 'Modal Header',
    onModalClose = () => {},
    footer,
    closeIconComponent,
    actions = [],
    isSlidePane = false,
    position,
    hideHeader,
    scrollBehavior = 'inside',
    isCentered = false,
    size = 'md',
  } = propsValues

  if (isSlidePane) {
    return (
      <Drawer placement={position} isOpen={open} onClose={onModalClose} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          {!isCloseable && (!closeIconComponent ? <DrawerCloseButton /> : closeIconComponent)}
          {!hideHeader && <DrawerHeader>{title}</DrawerHeader>}
          <DrawerBody padding={0} position="relative">
            {children}
          </DrawerBody>
          {footer && footer}
          {actions.length > 0 && !footer && (
            <DrawerFooter>
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
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    )
  }
  return (
    <Modal
      isOpen={open}
      onClose={onModalClose}
      closeOnOverlayClick={!isCloseable}
      scrollBehavior={scrollBehavior}
      isCentered={isCentered}
      size={size}
    >
      <ModalOverlay />
      <ModalContent>
        {!hideHeader && <ModalHeader>Modal Title</ModalHeader>}
        {!isCloseable && <ModalCloseButton />}
        <ModalBody padding={0} position="relative">
          {children}
        </ModalBody>
        {footer && footer}
        {actions.length > 0 && !footer && (
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

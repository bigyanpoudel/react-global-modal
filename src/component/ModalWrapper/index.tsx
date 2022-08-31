import React, { forwardRef } from 'react'

import { IButtonProps } from '../Modal/ModalActions'
import { ModalComponent } from '../Modal/ModalComponent'
import { GlobalModalWrapperProps } from './WrapperGlobalComponent'

export type GlobalModalComponentProps = {
  component?: React.FC<any>
  props?: { [key: string]: unknown }
  isOpen?: boolean
  onClose?: () => void
  className?: string
  modalSize?: 'xs' | 'sm' | 'md' | 'lg'
  isCloseable?: boolean
  closeButtonClassName?: string
  title?: string
  hideHeader?: boolean
  headerComponent?: React.FC<any>
  headerClassName?: string
  actions?: IButtonProps[]
  actionClassName?: string
  contentClassName?: string
  hideCloseIcon?: boolean
  width?: string
  isSlidePane?: boolean
  position?: 'right' | 'left'
  closeModal?: () => void
}

export type GlobalModalComponentType = GlobalModalComponentProps & GlobalModalWrapperProps

export const GlobalModalComponent = forwardRef(
  (
    {
      isOpen,
      component: MainComponent,
      props,
      isCloseable = false,
      onClose = () => {},
      closeModal = () => {},
      width,
      customModal: CustomModal,
      ...args
    }: GlobalModalComponentType,
    ref: any,
  ) => {
    const onModalClose = () => {
      if (isCloseable) return
      closeModal()
      onClose()
    }
    if (CustomModal) {
      return (
        <CustomModal
          open={isOpen || false}
          width={width}
          onModalClose={onModalClose}
          {...args}
          ref={ref}
        >
          {MainComponent && <MainComponent {...props} isInModal={true} />}
        </CustomModal>
      )
    }
    return (
      <ModalComponent
        open={isOpen || false}
        width={width}
        onModalClose={onModalClose}
        {...args}
        ref={ref}
      >
        {MainComponent && <MainComponent {...props} isInModal={true} />}
      </ModalComponent>
    )
  },
)

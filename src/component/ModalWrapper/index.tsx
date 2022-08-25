import React, { forwardRef } from 'react'

import { ModalComponent } from '../Modal/ModalComponent'
import { GlobalModalComponentProps, GlobalModalWrapperProps } from './WrapperGlobalComponent'
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

import React, { forwardRef } from 'react'

import { ModalComponent } from '../Modal/ModalComponent'
import { GlobalModalComponentProps } from './WrapperGlobalComponent'

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
      ...args
    }: GlobalModalComponentProps,
    ref: any,
  ) => {
    const onModalClose = () => {
      if (isCloseable) return
      closeModal()
      onClose()
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

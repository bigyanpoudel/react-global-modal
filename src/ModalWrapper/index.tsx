import React, { forwardRef } from 'react'

import { ModalComponent } from '../Modal/ModalComponent'
import { GlobalModalComponentProps, GlobalModalWrapperProps } from './WrapperGlobalComponent'

export type GlobalModalComponentType = GlobalModalComponentProps &
  GlobalModalWrapperProps & {
    closeModal?: () => void
    isOpen?: boolean
  }
/**
 * GlobalModalComponent is a higher-order component that wraps the main component
 * in a modal dialog. It provides functionality for opening and closing the modal.
 *
 * @component
 *
 * @param {object} props - The properties that define the behavior of the modal.
 * @param {boolean} props.isOpen - Determines whether the modal is open or not.
 * @param {React.ComponentType} props.component - The main component to be rendered inside the modal.
 * @param {object} props.props - The properties to pass to the main component.
 * @param {boolean} [props.isCloseable=false] - Determines whether the modal can be closed by the user.
 * @param {function} [props.onClose=() => {}] - The function to call when the modal is closed.
 * @param {function} [props.closeModal=() => {}] - The function to call to close the modal.
 * @param {string} props.width - The width of the modal.
 *
 * @returns {React.Component} The GlobalModalComponent.
 */
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
          isCloseable={isCloseable}
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

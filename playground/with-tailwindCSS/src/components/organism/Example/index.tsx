import React from 'react'
import { AsyncConfirmationModal, ConfirmationModal, GlobalModal } from 'react-global-modal'

import { Button } from '../../atom'
import { SlidePaneWithFooter } from '../SidePaneWithFooter'
import { SimpleModal } from '../SimpleModal'
import { SimpleModalWithFooter } from '../SimpleModalWithFooter'
import { SlidePanComponent } from '../SlidePan'

export const ModalExample = () => {
  const openSimpleModal = () => {
    GlobalModal.push({
      component: SimpleModal,
      title: 'Simple Modal Example',
      modalSize: 'md',
    })
  }

  const openSimpleModalWithFooter = () => {
    GlobalModal.push({
      component: SimpleModalWithFooter,
      title: 'Simple Modal Example',
      modalSize: 'md',
    })
  }
  const openSidePane = () => {
    GlobalModal.push({
      component: SlidePanComponent,
      title: 'Simple Modal Example',
      modalSize: 'sm',
      isSlidePane: true,
    })
  }
  const openSidePaneWithFooter = () => {
    GlobalModal.push({
      component: SlidePaneWithFooter,
      title: 'Simple Modal Example',
      modalSize: 'sm',
      isSlidePane: true,
      props: {
        title: 'This is props of sidePane',
        onClose: () => {
          GlobalModal.pop()
        },
        onPress: () => {
          GlobalModal.pop()
        },
      },
      position: 'left',
    })
  }

  const openConfirmationModal = () => {
    ConfirmationModal({
      title: 'Do you like react global modal',
      message: 'If you like, then rate the repo. Thankyou !',
      confirmationClassName: 'h-20 p-3',
      onCancel: () => {
        // TODO ON CANCEL
      },
      onOkay: () => {
        // TODO ON OKAY
      },
    })
  }

  const openAsyncConfirmationModal = async () => {
    const isSelected = await AsyncConfirmationModal({
      title: 'Do you like react global modal',
      message: 'If you like, then rate the repo. Thankyou !',
      confirmationClassName: 'h-20 p-3',
    })
    if (isSelected) {
      //TODO IF SELECTED YES
    } else {
      // TODO IF SELECTED NO
    }
  }

  return (
    <div className="container flex flex-row flex-wrap gap-5 py-[200px] h-full items-center justify-center">
      <Button onClick={openSimpleModal} type="primary">
        Simple Modal
      </Button>
      <Button onClick={openSimpleModalWithFooter} type="secondary">
        Simple Modal with footer
      </Button>
      <Button onClick={openSidePane} type="warning">
        Open slidePane
      </Button>
      <Button onClick={openSidePaneWithFooter} type="success">
        Open slidePane with footer
      </Button>
      <Button onClick={openConfirmationModal} type="error">
        Simple Confirmation Modal
      </Button>
      <Button onClick={openAsyncConfirmationModal} type="accent">
        Simple Async Confirmation Modal
      </Button>
    </div>
  )
}

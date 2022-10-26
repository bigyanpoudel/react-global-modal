import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { AsyncConfirmationModal, ConfirmationModal, GlobalModal } from 'react-global-modal'

import { SlidePaneWithFooter } from '../SidePaneWithFooter'
import { SimpleModal } from '../SimpleModal'
import { SimpleModalWithFooter } from '../SimpleModalWithFooter'
import { SlidePanComponent } from '../SlidePan'
const useStyles = makeStyles(() => ({
  conatiner: {
    padding: 200,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    gap: 20,
  },
}))
export const ModalExample = () => {
  const classes = useStyles()

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
      width: '800px',
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
      okyActionProps: {
        colorScheme: 'blue',
      },
      cancelActionProps: {
        colorScheme: 'red',
      },
    })
  }

  const openAsyncConfirmationModal = async () => {
    const isSelected = await AsyncConfirmationModal({
      title: 'Do you like react global modal',
      message: 'If you like, then rate the repo. Thankyou !',
      okyActionProps: {
        colorScheme: 'blue',
      },
      cancelActionProps: {
        colorScheme: 'red',
      },
    })
    if (isSelected) {
      //TODO IF SELECTED YES
    } else {
      // TODO IF SELECTED NO
    }
  }

  return (
    <div className={classes.conatiner}>
      <Button onClick={openSimpleModal}>Simple Modal</Button>
      <Button onClick={openSimpleModalWithFooter}>Simple Modal with footer</Button>
      <Button onClick={openSidePane}>Open slidePane</Button>
      <Button onClick={openSidePaneWithFooter}>Open slidePane with footer</Button>
      <Button onClick={openConfirmationModal}>Simple Confirmation Modal</Button>
      <Button onClick={openAsyncConfirmationModal}>Simple Async Confirmation Modal</Button>
    </div>
  )
}

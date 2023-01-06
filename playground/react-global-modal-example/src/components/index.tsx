import React from 'react'
import { AsyncConfirmationModal, ConfirmationModal, GlobalModal } from 'react-global-modal'
import { createUseStyles } from 'react-jss'

import ModalWithComponent from './modal-with-component/ModalWithComponent'
import { SimpleModal } from './simple-modal/SimpleModal'
import SlidePaneComponent from './slidepane-component/slidepaneComponent'
const useStyles = createUseStyles({
  conatiner: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 100px',
  },
})

const ModalExample = () => {
  const classes = useStyles()
  const openSimpleModal = () => {
    GlobalModal.push({
      component: SimpleModal,
      title: 'My Simple Modal',
    })
  }

  const openModalWithComponent = () => {
    GlobalModal.push({
      component: ModalWithComponent,
      title: 'Modal title',
      props: {
        title: 'hello',
      },
    })
  }

  const confirmation = async () => {
    ConfirmationModal({
      title: 'This is title',
      message: 'hello their',
      onOkay: () => {
        //TODO IF PRESSED OKAY
      },
      onCancel: () => {
        // TODO IF PRESS CANCEL OR NO
      },
    })
  }

  const confirmationModalAsync = async () => {
    const isResponse = await AsyncConfirmationModal({
      title: 'This is title',
      message: 'hello their',
    })
    if (isResponse) {
      //to do if yes
    } else {
      //to do if no
    }
  }

  const openSlidePane = async () => {
    GlobalModal.push({
      component: SlidePaneComponent,
      title: 'Modal title',
      isSlidePane: true,
      props: {
        title: 'hello',
      },
    })
  }
  const openModal3 = () => {
    GlobalModal.push({
      component: () => (
        <div style={{ height: '500', padding: '20px' }}>
          <button onClick={() => GlobalModal.closeAll()}>close all</button>
        </div>
      ),
    })
  }

  const openModal2 = () => {
    GlobalModal.push({
      component: () => (
        <div style={{ height: '400', padding: '20px' }}>
          <button onClick={openModal3}>Open new</button>
        </div>
      ),
    })
  }

  const openModal = () => {
    GlobalModal.push({
      component: () => (
        <div style={{ height: '400', padding: '20px' }}>
          <button onClick={openModal2}>Open new</button>
        </div>
      ),
    })
  }

  return (
    <div className={classes.conatiner}>
      <button onClick={openSimpleModal}>Simple Modal</button>
      <button onClick={openModalWithComponent}>Simple Modal with component</button>
      <button onClick={confirmationModalAsync}>Async confirmation modal</button>
      <button onClick={confirmation}>confirmation modal</button>
      <button onClick={openSlidePane}>Open slide pane</button>
      <button onClick={openModal}>Open new</button>
    </div>
  )
}

export default ModalExample

import './App.css'

import React, { forwardRef, useEffect } from 'react'

import { AsyncConfirmationModal, GlobalModalWrapper } from './component'
import { IModalProps, ModalComponent } from './component/Modal/ModalComponent'
import { ConfirmationModal } from './component/util/Confirmation'
import { GlobalModal } from './component/util/Modal'

let globalModalRef: any
function App() {
  useEffect(() => {
    GlobalModal.setUpModal(globalModalRef)
  })
  const openModal = async () => {
    const value = await AsyncConfirmationModal({})
  }
  return (
    <div className="App">
      <button onClick={openModal}>Open</button>
      <GlobalModalWrapper ref={(el) => (globalModalRef = el)} customModal={customModal} />
    </div>
  )
}
const customModal = React.forwardRef((props: IModalProps, ref: any) => {
  return <ModalComponent {...props}>{props?.children}</ModalComponent>
})
const ComponentText = () => {
  return (
    <div
      style={{
        height: '800px',
        // width: 500,x
      }}
    >
      hello
    </div>
  )
}
export default App

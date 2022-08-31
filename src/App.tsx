import './App.css'

import React, { forwardRef, useEffect } from 'react'

import { AsyncConfirmationModal, GlobalModalWrapper } from './component'
import { IModalProps, ModalComponent } from './component/Modal/ModalComponent'
import { ConfirmationModal } from './component/util/Confirmation'
import { GlobalModal } from './component/util/Modal'
import Example from './Example/Example'

let globalModalRef: any
function App() {
  useEffect(() => {
    GlobalModal.setUpModal(globalModalRef)
  })

  return (
    <div className="App">
      <Example />
      <GlobalModalWrapper ref={(el) => (globalModalRef = el)} customModal={customModal} />
    </div>
  )
}
const customModal = React.forwardRef((props: IModalProps, ref: any) => {
  return <ModalComponent {...props}>{props?.children}</ModalComponent>
})

export default App

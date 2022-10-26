import './App.css'

import { useEffect } from 'react'
import { GlobalModal, GlobalModalWrapper } from 'react-global-modal'

import CustomModalComponent from './components/molecules/Modal/Modal'
import { ModalExample } from './components/organism'

let globalModalRef: any = null
function App() {
  useEffect(() => {
    GlobalModal.setUpModal(globalModalRef)
  }, [])

  return (
    <div className="App">
      <ModalExample />

      <GlobalModalWrapper customModal={CustomModalComponent} ref={(el) => (globalModalRef = el)} />
    </div>
  )
}

export default App

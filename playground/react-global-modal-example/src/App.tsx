import './App.css'
import 'react-global-modal/dist/style.css'

import { useEffect } from 'react'
import { GlobalModal, GlobalModalWrapper } from 'react-global-modal'

import ModalExample from './components'

let globalModalRef: any = null

function App() {
  useEffect(() => {
    GlobalModal.setUpModal(globalModalRef)
  }, [])

  return (
    <div className="App">
      <ModalExample />
      <GlobalModalWrapper ref={(el) => (globalModalRef = el)} />
    </div>
  )
}

export default App

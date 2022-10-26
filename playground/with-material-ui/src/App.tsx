import { useEffect } from 'react'
import { GlobalModal, GlobalModalWrapper } from 'react-global-modal'

import { CustomModalComponent } from './component/molecules'
import { ModalExample } from './component/organism'
let globalModalRef: any = null
function App() {
  useEffect(() => {
    GlobalModal.setUpModal(globalModalRef)
  }, [])

  return (
    <>
      <ModalExample />
      <GlobalModalWrapper customModal={CustomModalComponent} ref={(el) => (globalModalRef = el)} />
    </>
  )
}

export default App

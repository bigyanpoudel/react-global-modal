import { ChakraProvider } from '@chakra-ui/react'
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
    <ChakraProvider>
      <ModalExample />
      <GlobalModalWrapper customModal={CustomModalComponent} ref={(el) => (globalModalRef = el)} />
    </ChakraProvider>
  )
}

export default App

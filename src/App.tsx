import './App.css'

import React, { useEffect } from 'react'

import { GlobalModalWrapper } from './component'
import { GlobalModal } from './component/util/Modal'

let globalModalRef: any
function App() {
  useEffect(() => {
    GlobalModal.setUpModal(globalModalRef)
  })
  const openModal = () => {
    GlobalModal.push({
      component: ComponentText,
      title: 'hellllll',
      // isSlidePane: true,
    })
  }
  return (
    <div className="App">
      <button onClick={openModal}>Open</button>
      <GlobalModalWrapper ref={(el) => (globalModalRef = el)} />
    </div>
  )
}
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

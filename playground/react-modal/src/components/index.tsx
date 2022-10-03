import React from 'react'
import { GlobalModal } from 'react-global-modal'

import { SimpleModal } from './simple-modal/SimpleModal'

const ModalExample = () => {
  const openSimpleModal = () => {
    GlobalModal.push({
      component: SimpleModal,
      title: 'My Simple Modal',
    })
  }
  return (
    <div>
      <button onClick={openSimpleModal}>Simple Modal</button>
    </div>
  )
}

export default ModalExample

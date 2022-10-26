import React from 'react'
import { GlobalModal } from 'react-global-modal'

import { ModalActions } from '../../atom'

export const SimpleModalWithFooter = () => {
  return (
    <div className="h-[60vh] relative p-0">
      <ModalActions
        actions={[
          {
            onClick: () => {
              GlobalModal.pop()
            },
            title: 'Cancel',
            type: 'error',
          },
          {
            onClick: () => {
              GlobalModal.pop()
            },
            title: 'Okay',
            type: 'warning',
          },
        ]}
        className="fixed bottom-0 w-full left-0"
      />
    </div>
  )
}

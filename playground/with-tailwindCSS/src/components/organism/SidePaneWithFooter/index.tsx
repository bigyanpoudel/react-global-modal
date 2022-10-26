import React from 'react'

import { ModalActions } from '../../atom'

export const SlidePaneWithFooter = ({
  onClose,
  onPress,
  title,
}: {
  onClose: () => void
  onPress: () => void
  title: string
}) => {
  return (
    <div className="h-full">
      <div className="p-3">{title}</div>
      <ModalActions
        actions={[
          {
            onClick: onClose,
            title: 'Cancel',
            type: 'error',
          },
          {
            onClick: onPress,
            title: 'Okay',
            type: 'primary',
          },
        ]}
        className="fixed bottom-0 w-full left-0"
      />
    </div>
  )
}

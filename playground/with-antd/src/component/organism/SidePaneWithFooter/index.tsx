import React from 'react'

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
    </div>
  )
}

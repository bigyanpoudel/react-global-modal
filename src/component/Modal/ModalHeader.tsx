import React from 'react'

export interface IModalHeader {
  children?: React.ReactNode
  className?: string
  onBackdropClick?: () => void
  hideCloseIcon?: boolean
  closeIconComponent: React.ReactNode
}

export const ModalHeader = ({
  children,
  className = '',
  onBackdropClick,
  hideCloseIcon = false,
  closeIconComponent,
}: IModalHeader) => {
  return (
    <div className={`modalHeader ${className}`}>
      <div className="modal-header-title">{children}</div>
      {!hideCloseIcon &&
        (closeIconComponent ? (
          closeIconComponent
        ) : (
          <div
            className="close-wrapper"
            onClick={() => {
              onBackdropClick && onBackdropClick()
            }}
          >
            <div className="icon">x</div>
          </div>
        ))}
    </div>
  )
}

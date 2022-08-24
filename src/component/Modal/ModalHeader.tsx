export interface IModalHeader {
  children?: React.ReactNode
  className?: string
  onBackdropClick?: () => void
  hideCloseIcon?: boolean
}

export const ModalHeader = ({
  children,
  className = '',
  onBackdropClick,
  hideCloseIcon = false,
}: IModalHeader) => {
  return (
    <div className={`modalHeader ${className}`}>
      <div className="modal-header-title">{children}</div>
      {!hideCloseIcon && (
        <div
          className="close-wrapper"
          onClick={() => {
            onBackdropClick && onBackdropClick()
          }}
        >
          <div className="icon">x</div>
        </div>
      )}
    </div>
  )
}

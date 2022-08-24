import '../styles/Modal.css'

import React, { forwardRef } from 'react'

import { IButtonProps, ModalActions } from './ModalActions'
import { ModalHeader } from './ModalHeader'
interface IModalProps {
  open?: boolean
  responsive?: boolean
  children?: any
  className?: string
  onClose?: () => void
  modalSize?: 'xs' | 'sm' | 'md' | 'lg'
  isCloseable?: boolean
  closeButtonClassName?: string
  title?: string
  hideHeader?: boolean
  headerComponent?: React.FC<any>
  headerClassName?: string
  actions?: IButtonProps[]
  actionClassName?: string
  contentClassName?: string
  onModalClose?: () => void
  hideCloseIcon?: boolean
  width?: string
  isSlidePane?: boolean
  position?: 'right' | 'left'
}

export const ModalComponent = forwardRef<HTMLDivElement, IModalProps>(
  (
    {
      open,
      className = '',
      isCloseable = false,
      title = 'Modal Header',
      hideHeader = false,
      headerComponent: HeaderComponent,
      headerClassName = '',
      actions = [],
      actionClassName = '',
      contentClassName = '',
      onModalClose = () => {},
      hideCloseIcon = false,
    }: IModalProps,
    ref: any,
  ): JSX.Element => {
    return (
      <div
        aria-hidden={!open}
        aria-modal={open}
        className={`modal modal-open ${className}`}
        onClick={(e) => {
          e.stopPropagation()
          if (e.target === e.currentTarget) {
            e.stopPropagation()
            onModalClose()
          }
        }}
      >
        <div className="moda-wrapper">
          <div className="modalContent">
            <div
              style={{
                position: 'relative',
              }}
            >
              {!hideHeader ? (
                <ModalHeader
                  className={headerClassName}
                  onBackdropClick={onModalClose}
                  hideCloseIcon={hideCloseIcon}
                >
                  <>
                    {title ?? null}
                    {HeaderComponent ?? null}
                  </>
                </ModalHeader>
              ) : (
                !hideCloseIcon && (
                  <div
                    className="close-wrapper"
                    onClick={() => {
                      if (!isCloseable) {
                        onModalClose()
                      }
                    }}
                  >
                    <div className="icon">x</div>
                  </div>
                )
              )}
            </div>
            <div className={`modal-body ${contentClassName}`}>{children}</div>
            {actions?.length > 0 && <ModalActions actions={actions} className={actionClassName} />}
          </div>
        </div>
      </div>
    )
  },
)

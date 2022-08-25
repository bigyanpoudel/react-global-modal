// import '../styles/Modal.css'

import clsx from 'clsx'
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
      children,
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
      isSlidePane = false,
      position = 'right',
      modalSize = 'sm',
    }: IModalProps,
    ref: any,
  ): JSX.Element => {
    const classes = clsx(
      'modal',
      'modal-open',
      // {
      //   'modal-open': open,
      // },
      className,
    )

    const modalWrapper = clsx(
      // 'modal-wrapper',
      {
        'modal-wrapper': !isSlidePane,
        'slidepane-wrapper': isSlidePane,
        right: isSlidePane && position === 'right',
        left: isSlidePane && position === 'left',
      },
    )

    const modalBody = clsx(
      'modal-body',
      {
        'w-xs': modalSize === 'xs',
        'w-sm': modalSize === 'sm',
        'w-md': modalSize === 'md',
        'w-lg': modalSize === 'lg',
      },
      contentClassName,
    )
    const modalContent = clsx('modalContent')
    return (
      <div
        aria-hidden={!open}
        aria-modal={open}
        className={classes}
        onClick={(e) => {
          e.stopPropagation()
          if (e.target === e.currentTarget) {
            e.stopPropagation()
            onModalClose()
          }
        }}
      >
        <div className={modalWrapper}>
          <div className={modalContent}>
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
            <div className={modalBody}>{children}</div>
            {actions?.length > 0 && <ModalActions actions={actions} className={actionClassName} />}
          </div>
        </div>
      </div>
    )
  },
)

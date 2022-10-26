// import '../styles/Modal.css'

import clsx from 'clsx'
import React, { forwardRef, useEffect } from 'react'

import { IButtonProps, ModalActions } from './ModalActions'
import { ModalHeader } from './ModalHeader'
export interface IModalProps {
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
  actions?: IButtonProps[] | any[]
  actionClassName?: string
  contentClassName?: string
  onModalClose?: () => void
  hideCloseIcon?: boolean
  width?: string
  isSlidePane?: boolean
  position?: 'right' | 'left'
  isDark?: boolean
  disableTheme?: boolean
  footer?: React.ReactNode
  closeIconComponent?: React.ReactNode
  [key: string]: any
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
      isDark = false,
      disableTheme = false,
      footer,
      closeIconComponent,
    }: IModalProps,
    ref: any,
  ): JSX.Element => {
    useEffect(() => {
      if (!disableTheme) {
        const attri = document.documentElement.getAttributeNames()
        if (isDark && !attri.includes('dark')) {
          document.documentElement.setAttribute('data-theme', 'dark')
        }
        if (attri.includes('dark') && !isDark) {
          document.documentElement.setAttribute('data-theme', 'dark')
        }
      }
    }, [isDark, disableTheme])

    const classes = clsx('modal', 'modal-open', className, {
      dark: isDark,
    })

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
        dark-them="light"
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
            <div className="position">
              {!hideHeader ? (
                <ModalHeader
                  className={headerClassName}
                  onBackdropClick={onModalClose}
                  hideCloseIcon={hideCloseIcon}
                  closeIconComponent={closeIconComponent}
                >
                  <>
                    {title ?? null}
                    {HeaderComponent ?? null}
                  </>
                </ModalHeader>
              ) : (
                !hideCloseIcon && (
                  <>
                    {closeIconComponent ? (
                      closeIconComponent
                    ) : (
                      <div
                        className="close-wrapper close"
                        onClick={() => {
                          if (!isCloseable) {
                            onModalClose()
                          }
                        }}
                      >
                        <div className="icon">x</div>
                      </div>
                    )}
                  </>
                )
              )}
            </div>
            <div className={modalBody}>{children}</div>
            {footer && footer}
            {actions?.length > 0 && !footer && (
              <ModalActions actions={actions} className={actionClassName} />
            )}
          </div>
        </div>
      </div>
    )
  },
)

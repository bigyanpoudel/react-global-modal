import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { IModalProps } from 'react-global-modal'

import { Button, ModalActions, ModalHeader } from '../../atom'

const CustomModalComponent = forwardRef<HTMLDivElement, IModalProps>(
  (
    {
      children,
      open,
      responsive,
      className = '',
      modalSize = 'md',
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
      width,
      isSlidePane = false,
      position = 'right',
      footer,
    }: IModalProps,
    ref,
  ): JSX.Element => {
    const containerClasses = clsx('modal h-full', {
      'modal-open': open,
      'modal-bottom sm:modal-middle': responsive,
    })

    const bodyClasses = clsx(
      'modal-box rounded-md  p-0 flex flex-col max-h-full  overflow-hidden',
      className,
      {
        'max-w-[350px]': modalSize === 'xs',
        'max-w-[500px]': modalSize === 'sm',
        'max-w-[750px]': modalSize === 'md',
        'max-w-[90%]': modalSize === 'lg',
        [`absolute top-0 max-h-full bottom-0`]: isSlidePane,
        'right-0 rounded-r-none': isSlidePane && position === 'right',
        'left-0': isSlidePane && position === 'left',
      },
    )

    const contentClasses = clsx('p-0 m-0  relative flex-1 overflow-y-auto', contentClassName)

    return (
      <div
        aria-label="Modal"
        aria-hidden={!open}
        aria-modal={open}
        className={containerClasses}
        onClick={(e) => {
          e.stopPropagation()
          if (e.target === e.currentTarget) {
            e.stopPropagation()
            onModalClose()
          }
        }}
      >
        <div
          className={`${bodyClasses}`}
          style={{
            maxWidth: width && `${width}`,
            width: width && `${width}`,
          }}
          ref={ref}
        >
          <div className="relative">
            {!hideHeader ? (
              <ModalHeader
                className={headerClassName}
                onClickBackdrop={onModalClose}
                isCloseable={isCloseable}
                hideCloseIcon={hideCloseIcon}
              >
                <>
                  {title && title}
                  {HeaderComponent && HeaderComponent}
                </>
              </ModalHeader>
            ) : (
              !hideCloseIcon && (
                <div className="absolute right-2 top-1/2  -translate-y-1/2 font-light ">
                  <Button
                    size="sm"
                    shape="circle"
                    className="text-black text-lg btn-circle "
                    type="ghost"
                    onClick={() => {
                      if (!isCloseable) {
                        onModalClose()
                      }
                    }}
                  >
                    ✕
                  </Button>
                </div>
              )
            )}
          </div>
          <div className={contentClasses}>{children}</div>
          {footer && footer}
          {actions?.length > 0 && !footer && (
            <ModalActions actions={actions} className={actionClassName} />
          )}
        </div>
      </div>
    )
  },
)

export default CustomModalComponent

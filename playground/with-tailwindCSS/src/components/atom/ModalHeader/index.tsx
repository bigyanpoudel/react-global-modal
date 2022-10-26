import clsx from 'clsx'
import React from 'react'

import { Button } from '../button'

export interface IModalHeader {
  children: React.ReactNode
  className?: string
  onClickBackdrop?: () => void
  isCloseable?: boolean
  hideCloseIcon?: boolean
}

export const ModalHeader = ({
  children,
  className = '',
  isCloseable = false,
  onClickBackdrop,
  hideCloseIcon,
}: IModalHeader) => {
  const classes = clsx([
    'w-full  p-3 pr-10 text-xl font-semibold flex flex-row items-center border-b border-red',
    className,
    { 'pr-3': isCloseable },
  ])
  return (
    <div className={classes}>
      {children}
      {!hideCloseIcon && (
        <div className="absolute right-2 top-1/2  -translate-y-1/2 font-light ">
          <Button
            size="sm"
            shape="circle"
            className="text-black  btn-circle"
            type="ghost"
            onClick={() => {
              onClickBackdrop && onClickBackdrop()
            }}
          >
            ✕
          </Button>
        </div>
      )}
    </div>
  )
}

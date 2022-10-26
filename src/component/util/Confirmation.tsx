import clsx from 'clsx'
import React from 'react'

import { IButtonProps } from '../Modal/ModalActions'
import { GlobalModal } from './Modal'

export interface ConfirmationModalProps {
  title?: string
  message?: string
  onCancel?: () => void
  onOkay?: () => void
  cancelLabel?: string
  okayLabel?: string
  isCloseable?: boolean
  className?: string
  confirmationBody?: React.FC
  confirmationClassName?: string
  actions?: IButtonProps[] | any
  footer?: React.ReactNode
  [key: string]: any
}

/**
 * Confirmation Modal
 * Used to handle the confirmation from user and perform action accordingly
 * @param title string // title of the modal
 * @param cancelLabel string
 * @param okayLabel string
 * @param message string
 * @param onCancel Function
 * @param onOkay Function
 * @param closable bool
 * @param confirmationBody React Functional Component
 * @param footer React Node
 * @param confirmationClassName string
 */

export const ConfirmationModal = ({
  title = 'Confirmation Modal Title',
  cancelLabel = 'Cancel',
  message = 'Confirmation Modal Message',
  okayLabel = 'Okay',
  onCancel = () => {},
  onOkay = () => {},
  isCloseable = true,
  confirmationBody: ConfirmationBody,
  confirmationClassName = '',
  className = '',
  actions,
  footer,
  ...args
}: ConfirmationModalProps) => {
  const modalAction: IButtonProps[] = [
    {
      title: okayLabel,
      onClick: () => {
        onOkay()
        GlobalModal.pop()
      },
      className: 'btn-primary',
    },
    {
      title: cancelLabel,
      onClick: () => {
        onCancel()
        GlobalModal.pop()
      },
      className: 'btn-error',
    },
  ]

  GlobalModal.push({
    component: ConfirmationBody ?? ConfirmationModalBody,
    actions: actions ?? modalAction,
    title: title,
    isCloseable: isCloseable,
    hideCloseIcon: true,
    modalSize: 'sm',
    className: className,
    footer: footer,
    props: {
      message: message,
      confirmationClassName,
    },
    ...args,
  })
}

const ConfirmationModalBody = ({ message, confirmationClassName = '' }: ConfirmationModalProps) => {
  const classes = clsx('confirmation', confirmationClassName)
  return <div className={classes}>{message}</div>
}

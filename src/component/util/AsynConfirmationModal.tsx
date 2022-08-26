import clsx from 'clsx'

import { IButtonProps } from '../Modal/ModalActions'
import { GlobalModal } from './Modal'

export interface AsyncConfirmationModalProps {
  title?: string
  message?: string
  cancelLabel?: string
  okayLabel?: string
  isClosable?: boolean
  confirmationBody?: React.FC
  confirmationClassName?: string
  className?: string
  actions?: IButtonProps[]
}

/**
 * Async Confirmation Modal
 * Can be used to take a response from the user and perform action based on user decision
 * @param title string
 * @param cancelLabel string
 * @param okayLabel string
 * @param closable bool
 * @param message string
 * @param confirmationBody React Functional Component
 * @param confirmationClassName string
 * @param className string
 * @returns Promise
 */

export const AsyncConfirmationModal = ({
  cancelLabel = 'Cancel',
  okayLabel = 'Confirm',
  message = 'AsynConfirmation Modal message',
  title = 'AsyncConfirmation Modal Title',
  isClosable = false,
  confirmationBody: ConfirmationBody,
  confirmationClassName = '',
  className = '',
  actions,
}: AsyncConfirmationModalProps) => {
  return new Promise<boolean>((resolve) => {
    const defaultAction: IButtonProps[] = [
      {
        title: okayLabel,
        onClick: () => {
          resolve(true)
          GlobalModal.pop()
        },
        className: 'btn-primary',
      },
      {
        title: cancelLabel,
        onClick: () => {
          resolve(false)
          GlobalModal.pop()
        },
        className: 'btn-error',
      },
    ]

    GlobalModal.push({
      component: ConfirmationBody ?? ConfirmationModalBody,
      actions: actions ?? defaultAction,
      title: title,
      isCloseable: isClosable,
      hideCloseIcon: true,
      modalSize: 'sm',
      className: className,
      props: {
        message: message,
        confirmationClassName,
      },
    })
  })
}

const ConfirmationModalBody = ({
  message,
  confirmationClassName = '',
}: AsyncConfirmationModalProps) => {
  const classes = clsx('confirmation', confirmationClassName)
  return <div className={classes}>{message}</div>
}

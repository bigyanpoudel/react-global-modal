import React, { Component } from 'react'

import { IButtonProps } from '../Modal/ModalActions'
import { GlobalModalComponent } from '.'

export type GlobalModalComponentProps = {
  component?: React.FC<any>
  props?: { [key: string]: unknown }
  onClose?: () => void
  className?: string
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
  hideCloseIcon?: boolean
  width?: string
  isSlidePane?: boolean
  position?: 'right' | 'left'
  [key: string]: any
}
export interface IGlobalModalOpenProps extends GlobalModalComponentProps {
  component?: React.FC<any> // React FC as component
  ref?: any // @todo specify ref object
  id?: number
  // customModal?: React.FC<any>
}
export type GlobalModalWrapperProps = {
  customModal?: React.FC<any>
}
/**
 * GlobalModalWrapper is a higher-order component that wraps another component
 * and provides it with modal functionality. It uses the GlobalModalComponent
 * to render the wrapped component inside a modal dialog.
 *
 * @component
 *
 * @param {object} props - The properties that define the behavior of the modal and the wrapped component.
 * @param {boolean} props.isOpen - Determines whether the modal is open or not.
 * @param {React.ComponentType} props.component - The component to be wrapped and rendered inside the modal.
 * @param {object} props.props - The properties to pass to the wrapped component.
 * @param {boolean} [props.isCloseable=false] - Determines whether the modal can be closed by the user.
 * @param {function} [props.onClose=() => {}] - The function to call when the modal is closed.
 * @param {string} props.width - The width of the modal.
 *
 * @returns {React.Component} The GlobalModalWrapper component.
 */
export class GlobalModalWrapper extends Component<
  GlobalModalWrapperProps,
  { modals: IGlobalModalOpenProps[] }
> {
  state: any = {
    modals: [],
  }

  totalIndex = 0

  open = ({ ...args }: IGlobalModalOpenProps) => {
    const sheet = { ...args }

    const { modals } = this.state
    this.totalIndex++
    ;(sheet as any).isOpen = true
    ;(sheet as any).id = this.totalIndex

    if (!sheet.ref) {
      sheet.ref = React.createRef()
    }

    modals.push({ ...sheet })
    this.setState({ modals })
  }

  close = (index: number = this.state.modals.length - 1) => {
    const { modals } = this.state
    setTimeout(() => {
      modals.splice(index, 1)
      this.setState({ modals })
    }, 200)
    if (modals[index]) {
      modals[index].isOpen = false
      this.setState({ modals })
    }
  }

  updateModalProps = (
    { ...props }: { [key: string]: any },
    index: number = this.state.modals.length - 1,
  ) => {
    const { modals } = this.state

    const modalRef = modals[index]?.ref
    if (modalRef) {
      modalRef.current?.add(props)
    }
  }

  closeAll = () => {
    const { modals } = this.state
    modals.forEach(() => {
      setTimeout(() => {
        modals.splice(modals.length - 1, 1)
        this.setState({ modals })
      }, 10)
      if (modals[modals.length - 1]) {
        modals[modals.length - 1].isOpen = false
        this.setState({ modals })
      }
    })
  }

  render() {
    const { modals } = this.state
    const { customModal } = this.props
    return modals.map((sheet: any, index: number) => {
      return (
        <GlobalModalComponent
          key={sheet.id + '' + index}
          closeModal={this.close.bind(this)}
          {...sheet}
          customModal={customModal}
        />
      )
    })
  }
}

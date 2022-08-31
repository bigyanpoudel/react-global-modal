import React, { Component } from 'react'

import { IButtonProps } from '../Modal/ModalActions'
import { IModalProps } from '../Modal/ModalComponent'
import { GlobalModalComponent } from '.'

export type GlobalModalComponentProps = {
  component?: React.FC<any>
  props?: { [key: string]: unknown }
  onClose?: () => void
  closeModal?: () => void
  isOpen?: boolean
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

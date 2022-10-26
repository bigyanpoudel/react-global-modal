import React from 'react'

export interface IButtonProps {
  title?: string
  className?: string
  onClick: () => void
  props?: any
}

export interface IModalActionsProps {
  actions?: IButtonProps[]
  className?: string
}

export const ModalActions = ({ className = '', actions = [] }: IModalActionsProps) => {
  return (
    <div className={`modal-action ${className}`}>
      {actions.map((el, index) => (
        <button key={index} className={`btn ${el.className}`} onClick={el.onClick} {...el.props}>
          {el.title}
        </button>
      ))}
    </div>
  )
}

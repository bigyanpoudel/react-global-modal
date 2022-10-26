import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

function isUndefined(val: any): boolean {
  return typeof val === 'undefined'
}

export interface IButtonProps {
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  type?: ButtonTypes
  shape?: 'square' | 'circle' | 'default'
  active?: boolean
  outline?: boolean
  dashed?: boolean
  wide?: boolean
  block?: boolean
  disabled?: boolean
  noAnimation?: boolean
  loading?: boolean
  progress?: boolean
  addTimeout?: boolean
  tabIndex?: number
  children?: React.ReactNode
  onClick: (...props: any) => void
  title?: string
}

export type ButtonTypes =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'ghost'
  | 'link'

const buttonTypeOptions: Record<string, string> = {
  default: '',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  info: 'btn-info',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error',
  ghost: 'btn-ghost',
  link: 'btn-link',
}

const sizeOptions: Record<string, string> = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

const shapeOptions: Record<string, string> = {
  square: 'btn-square',
  circle: 'btn-circle',
  default: '',
}

export const Button = ({
  className = '',
  size = 'md',
  shape = 'default',
  type = 'default',
  active = false,
  outline = false,
  dashed,
  wide = false,
  block = false,
  disabled = false,
  noAnimation,
  loading: loadingProp,
  progress,
  addTimeout,
  children,
  tabIndex,
  onClick,
  title,
}: IButtonProps) => {
  const [loading, setLoading] = useState<any>(false)

  useEffect(() => {
    if (!isUndefined(loadingProp)) {
      setLoading(loadingProp)
    }
  }, [loadingProp])

  const btnClasses = clsx(
    sizeOptions[size],
    buttonTypeOptions[type],
    {
      'btn-active': active,
      'btn-outline': outline,
      'btn-dashed': dashed,
      'btn-wide': wide,
      'btn-block': block,
      'no-animation': noAnimation,
      loading: loading,
    },
    shapeOptions[shape],
  )

  const next = () => {
    setLoading(false)
  }

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    if (loading) return
    if (progress && !loading) {
      setLoading(true)

      if (addTimeout) {
        setTimeout(() => {
          setLoading(false)
        }, 400)
      }

      onClick(next, e)
    }
    if (!progress && !loading) {
      e.preventDefault()
      onClick(e)
    }
  }

  return (
    <button
      className={`btn ${btnClasses} ${className}`}
      disabled={disabled}
      tabIndex={tabIndex}
      onClick={handleOnClick}
    >
      {children && children}
      {title && title}
    </button>
  )
}

import { Close as CloseIcon } from '@mui/icons-material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import React from 'react'
import { IModalProps } from 'react-global-modal'
type IAntModalProps = IModalProps & {
  width?: number
}
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    minWidth: 350,
    width: '100%',
    padding: 0,
  },
  '& .MuiDialogActions-root': {
    minWidth: 350,
  },
}))

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
  isCloseable?: boolean
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, isCloseable, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {!isCloseable ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

export const CustomModalComponent = React.forwardRef((propsValues: IAntModalProps, ref) => {
  const {
    children,
    open = false,
    isCloseable,
    title = 'Modal Header',
    onModalClose = () => {},
    footer,
    actions = [],
    isSlidePane = false,
    position,
    className = '',
  } = propsValues
  if (isSlidePane) {
    return (
      <Drawer anchor={position} open={open} onClose={onModalClose} className={className}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={onModalClose}
          isCloseable={isCloseable}
        >
          {title}
        </BootstrapDialogTitle>
        {children}
      </Drawer>
    )
  }
  return (
    <BootstrapDialog
      className={className}
      onClose={onModalClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={onModalClose}
        isCloseable={isCloseable}
      >
        {title}
      </BootstrapDialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      {actions.length > 0 && !footer && (
        <DialogActions>
          {actions.map((el: any) => (
            <Button key={el.title} onClick={el.onClick} className={el.className}>
              {el.title}
            </Button>
          ))}
        </DialogActions>
      )}
    </BootstrapDialog>
  )
})

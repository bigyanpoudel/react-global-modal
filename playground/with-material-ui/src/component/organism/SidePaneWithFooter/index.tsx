import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
const useStyles = makeStyles(() => ({
  conatiner: {
    height: '100%',
    width: 500,
    padding: 0,
    position: 'relative',
  },
  footer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    borderTop: '1px solid gray',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cancelButton: {
    marginLeft: 20,
  },
}))
export const SlidePaneWithFooter = ({
  onClose,
  onPress,
  title,
}: {
  onClose: () => void
  onPress: () => void
  title: string
}) => {
  const classes = useStyles()
  return (
    <div className={classes.conatiner}>
      <div className="p-3">{title}</div>
      <div className={classes.footer}>
        <Button onClick={onPress}>Confirm</Button>
        <Button onClick={onClose} className={classes.cancelButton}>
          Cancel
        </Button>
      </div>
    </div>
  )
}

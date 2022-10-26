import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { GlobalModal } from 'react-global-modal'

const useStyles = makeStyles(() => ({
  conatiner: {
    height: 500,
    // maxWidth: 800,
    padding: 0,
    position: 'relative',
    width: 500,
  },
  footer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    // height: 40,
    borderTop: '1px solid gray',
    textAlign: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cancelButton: {
    marginLeft: 40,
    marginRight: 20,
  },
}))
export const SimpleModalWithFooter = () => {
  const classes = useStyles()
  return (
    <div className={classes.conatiner}>
      <div className={classes.footer}>
        <Button onClick={() => GlobalModal.pop()} variant="outlined">
          Confirm
        </Button>
        <Button onClick={() => GlobalModal.pop()} className={classes.cancelButton}>
          Cancel
        </Button>
      </div>
    </div>
  )
}

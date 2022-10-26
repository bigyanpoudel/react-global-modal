import { Button } from 'antd'
import React from 'react'
import { GlobalModal } from 'react-global-modal'
import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
  conatiner: {
    height: 500,
    // maxWidth: 800,
    padding: 0,
    position: 'relative',
  },
  footer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    // height: 40,
    borderTop: '1px solid gray',
    textAlign: 'center',
    padding: '10px 20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cancelButton: {
    marginLeft: 20,
  },
})
export const SimpleModalWithFooter = () => {
  const classes = useStyles()
  return (
    <div className={classes.conatiner}>
      <div className={classes.footer}>
        <Button type="primary" onClick={() => GlobalModal.pop()}>
          Confirm
        </Button>
        <Button
          type="primary"
          danger
          onClick={() => GlobalModal.pop()}
          className={classes.cancelButton}
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}

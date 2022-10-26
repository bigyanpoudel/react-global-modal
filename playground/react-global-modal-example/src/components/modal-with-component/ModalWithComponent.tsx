import React from 'react'
import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
  conatiner: {
    height: 500,
    // maxWidth: 800,
    padding: 10,
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
    padding: 20,
  },
})
const ModalWithComponent = () => {
  const classes = useStyles()
  return (
    <div className={classes.conatiner}>
      ModalWithComponent
      <div className={classes.footer}>This is footer</div>
    </div>
  )
}

export default ModalWithComponent

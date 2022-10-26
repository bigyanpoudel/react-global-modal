import { Button } from 'antd'
import React from 'react'
import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
  conatiner: {
    height: '100%',
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
        <Button type="primary" onClick={onPress}>
          Confirm
        </Button>
        <Button type="primary" danger onClick={onClose} className={classes.cancelButton}>
          Cancel
        </Button>
      </div>
    </div>
  )
}

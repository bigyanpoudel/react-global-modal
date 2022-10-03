import React from 'react'
import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
  conatiner: {
    height: 500,
    maxWidth: 800,
  },
})
export const SimpleModal = () => {
  const classes = useStyles()
  return <div className={classes.conatiner}>SimpleModal</div>
}

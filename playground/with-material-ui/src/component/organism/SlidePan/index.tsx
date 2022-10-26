import { makeStyles } from '@mui/styles'
import React from 'react'
const useStyles = makeStyles(() => ({
  container: {
    width: 800,
  },
}))
export const SlidePanComponent = () => {
  const classes = useStyles()
  return <div className={classes.container}>index</div>
}

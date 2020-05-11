import React from 'react'
import { Typography, CircularProgress } from '@material-ui/core'
import useStyles from './Status.style'

type ComponentProps = {
  status?: string,
  spinner?: boolean,
}

const Status: React.FunctionComponent<ComponentProps> = ({ status, spinner }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Typography className={classes.statusBarText}>{status ?? ""}</Typography>
      {spinner ? <CircularProgress size={12} /> : <></>}
    </div>
  )
}

export default Status

import React from 'react'
import { withStyles, Typography, CircularProgress } from '@material-ui/core'
import { styles, StyleProps } from './Status.style'

type ComponentProps = {
 status?: string,
 spinner?: boolean,
}

const Status: React.FunctionComponent<ComponentProps & StyleProps> = ({classes, status, spinner}) => (
  <div className={classes.container}>
    <Typography className={classes.statusBarText}>{ status ?? ""}</Typography>
    { spinner ? <CircularProgress size={12}/> : <></> }
  </div>
)

export default withStyles(styles)(Status)

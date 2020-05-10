import React from 'react'
import { withStyles, Typography } from '@material-ui/core'
import { styles, StyleProps } from './SubsectionHeader.style'

type ComponentProps = {
 title: string,
}

const SubsectionHeader: React.FunctionComponent<ComponentProps & StyleProps> = ({classes, title, children}) => (
  <div className={classes.headerContainer}>
    <Typography variant="h2" className={classes.titleText}>{title}</Typography>
    <div className={classes.controlComponents}>{children}</div>
  </div>
)

export default withStyles(styles)(SubsectionHeader)

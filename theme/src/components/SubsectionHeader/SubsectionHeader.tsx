import React from 'react'
import { withStyles, Typography } from '@material-ui/core'
import { styles, StyleProps } from './SubsectionHeader.style'
import clsx from 'clsx'

type ComponentProps = {
 title: string,
 className?: string,
}

const SubsectionHeader: React.FunctionComponent<ComponentProps & StyleProps> = ({classes, title, children, className}) => (
  <div className={clsx(classes.headerContainer, className)}>
    <Typography variant="h2" className={classes.titleText}>{title}</Typography>
    <div className={classes.controlComponents}>{children}</div>
  </div>
)

export default withStyles(styles)(SubsectionHeader)

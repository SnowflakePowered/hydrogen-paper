import React from 'react'
import { withStyles, Typography } from '@material-ui/core'
import { styles, StyleProps } from './TitleHeader.style'

type ComponentProps = {
 subtitle: string | React.ReactElement,
 title: string,
}

const TitleHeader: React.FunctionComponent<ComponentProps & StyleProps> = ({classes, subtitle, title, children}) => (
  <div className={classes.headerContainer}>
    <div className={classes.subtitleText}>{subtitle}</div>
    <Typography variant="h1" className={classes.titleText}>{title}</Typography>
    <div className={classes.controlComponents}>{children}</div>
  </div>
)

export default withStyles(styles)(TitleHeader)

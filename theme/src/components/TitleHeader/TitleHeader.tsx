import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './TitleHeader.style'

type ComponentProps = {
  subtitle: string | React.ReactElement,
  title: string,
}

const TitleHeader: React.FunctionComponent<ComponentProps> = ({ subtitle, title, children }) => {
  const classes = useStyles()
  return (
    <div className={classes.headerContainer}>
      <div className={classes.subtitleText}>{subtitle}</div>
      <Typography variant="h1" className={classes.titleText}>{title}</Typography>
      <div className={classes.controlComponents}>{children}</div>
    </div>
  )
}

export default TitleHeader

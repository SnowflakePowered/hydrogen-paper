import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './SubsectionHeader.style'
import clsx from 'clsx'

type ComponentProps = {
  title: string,
  className?: string,
}

const SubsectionHeader: React.FunctionComponent<ComponentProps> = ({ title, children, className }) => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.headerContainer, className)}>
      <Typography variant="h2" className={classes.titleText}>{title}</Typography>
      <div className={classes.controlComponents}>{children}</div>
    </div>
  )
}

export default SubsectionHeader

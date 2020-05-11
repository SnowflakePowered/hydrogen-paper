import React from 'react'
import { IconButton } from '@material-ui/core'
import useStyles from './NavigationButtons.style'
import { ArrowForward, ArrowBack } from '@material-ui/icons'
import clsx from 'clsx'
type ComponentProps = {
  onForward?: VoidFunction
  onBackward?: VoidFunction
  className?: string
}

const NavigationButtons: React.FunctionComponent<ComponentProps> =
  ({ className, onBackward, onForward }) => {
    const classes = useStyles()
    return (
      <div className={clsx(classes.buttonContainer, className)}>
        <IconButton onClick={onBackward} className={classes.buttons}>
          <ArrowBack />
        </IconButton>
        <IconButton onClick={onForward} className={classes.buttons}>
          <ArrowForward />
        </IconButton>
      </div>
    )
  }

export default NavigationButtons

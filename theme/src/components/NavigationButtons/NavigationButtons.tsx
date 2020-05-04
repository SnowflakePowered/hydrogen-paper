import React from 'react'
import { withStyles, IconButton } from '@material-ui/core'
import { styles, StyleProps } from './NavigationButtons.style'
import { ArrowForward, ArrowBack } from '@material-ui/icons'
import classNames from 'classnames'
type ComponentProps = {
  onForward?: VoidFunction
  onBackward?: VoidFunction
  className?: string
}

const NavigationButtons: React.FunctionComponent<ComponentProps & StyleProps> =
  ({ classes, className, onBackward, onForward }) => (
    <div className={classNames({
      [classes.buttonContainer]: true,
      [className ?? '']: className !== undefined
    })}>
      <IconButton onClick={onBackward} className={classes.buttons}>
        <ArrowBack />
      </IconButton>
      <IconButton onClick={onForward} className={classes.buttons}>
        <ArrowForward />
      </IconButton>
    </div>
  )

export default withStyles(styles)(NavigationButtons)

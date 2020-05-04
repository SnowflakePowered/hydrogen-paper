import React from 'react'
import { withStyles, IconButton } from '@material-ui/core'
import { styles, StyleProps } from './TopNavigation.style'
import classNames from 'classnames'
import NavigationButtons from 'components/NavigationButtons/NavigationButtons'
import { Settings} from '@material-ui/icons'
type ComponentProps = {
  onSettings?: VoidFunction,
  className?: string,
} & React.ComponentPropsWithoutRef<typeof NavigationButtons>

const TopNavigation: React.FunctionComponent<ComponentProps & StyleProps> = ({classes, className, onForward, onBackward, onSettings }) => (
  <div className={
      classNames({
        [classes.buttonContainer]: true,
        [className ?? ""]: className !== undefined,
      })}>
    <div className={classes.left}>
      <IconButton edge="end" className={classes.button} onClick={onSettings}>
        <Settings/>
      </IconButton>
    </div>
    <div className={classes.right}>
      <NavigationButtons onBackward={onBackward} onForward={onForward}/>
    </div>
  </div>
)

export default withStyles(styles)(TopNavigation)

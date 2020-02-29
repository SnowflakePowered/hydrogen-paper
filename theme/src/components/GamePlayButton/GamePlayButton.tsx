import React from 'react'
import { PlayArrow } from '@material-ui/icons'
import { IconButton, CircularProgress, withStyles } from '@material-ui/core'

import { styles, StyleProps } from './GamePlayButton.style'

type GamePlayButtonProps = {
  onClick?: (event: React.MouseEvent<{}>) => void,
  loading?: boolean
}

const GamePlayButton: React.SFC<GamePlayButtonProps & StyleProps> = ({classes, onClick, loading}) => (
  <div className={classes.buttonContainer}>
    <div className={classes.pulse}/>
    {loading ? <CircularProgress size={48} className={classes.progress} /> : ''}
    <IconButton className={classes.button} onClick={onClick}>
      <PlayArrow className={classes.arrow}/>
    </IconButton>
  </div>
)

export default withStyles(styles)(GamePlayButton)

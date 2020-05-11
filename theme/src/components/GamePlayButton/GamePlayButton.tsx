import React from 'react'
import { PlayArrow } from '@material-ui/icons'
import { IconButton, CircularProgress } from '@material-ui/core'

import useStyles from './GamePlayButton.style'

type GamePlayButtonProps = {
  onClick?: (event: React.MouseEvent<{}>) => void,
  loading?: boolean
}

const GamePlayButton: React.SFC<GamePlayButtonProps> = ({ onClick, loading }) => {
  const classes = useStyles()
  return (
    <div className={classes.buttonContainer}>
      <div className={classes.pulse} />
      {loading ? <CircularProgress size={'28px'} className={classes.progress} /> : ''}
      <IconButton className={classes.button} onClick={onClick}>
        <PlayArrow className={classes.arrow} />
      </IconButton>
    </div>
  )
}

export default GamePlayButton

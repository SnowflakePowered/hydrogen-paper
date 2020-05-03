import React from 'react'
import GamePlayButton from 'components/GamePlayButton/GamePlayButton'
import { styles, StyleProps } from './GamePlayButtonHover.style'
import { withStyles } from '@material-ui/core'

type GamePlayButtonProps = {
    onClick?: (event: React.MouseEvent<{}>) => void,
    onButtonClick?: (event: React.MouseEvent<{}>) => void,
    loading?: boolean
  }

const GamePlayButtonHover: React.SFC<GamePlayButtonProps & StyleProps> = ({classes, onClick, onButtonClick, loading}) => (
    <div className={classes.hoverContainer} onClick={onClick}>
      <div className={classes.playButton}>
          <GamePlayButton onClick={onButtonClick}/>
      </div>
    </div>
  )

export default withStyles(styles)(GamePlayButtonHover)

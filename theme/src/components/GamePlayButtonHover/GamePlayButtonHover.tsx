import React from 'react'
import GamePlayButton from 'components/GamePlayButton/GamePlayButton'
import { styles, StyleProps } from './GamePlayButtonHover.style'
import { withStyles } from '@material-ui/core'

type MouseEventHandler = (event: React.MouseEvent<{}>) => void

type GamePlayButtonProps = {
    onClick?: MouseEventHandler,
    onButtonClick?: MouseEventHandler,
    loading?: boolean
}

const onlyButtonEvent : (onButtonClick?: MouseEventHandler) => (event: React.MouseEvent<{}>) => void = (onButtonClick) => event => {
  if (onButtonClick !== undefined) onButtonClick(event)
  event.stopPropagation()
}

const GamePlayButtonHover: React.SFC<GamePlayButtonProps & StyleProps> = ({classes, onClick, onButtonClick, loading}) => (
    <div className={classes.hoverContainer} onClick={onClick}>
      <div className={classes.playButton}>
          <GamePlayButton onClick={onlyButtonEvent(onButtonClick)}/>
      </div>
    </div>
  )

export default withStyles(styles)(GamePlayButtonHover)

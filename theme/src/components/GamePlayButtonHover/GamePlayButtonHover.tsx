import React from 'react'
import GamePlayButton from 'components/GamePlayButton/GamePlayButton'
import { styles, StyleProps } from './GamePlayButtonHover.style'
import { withStyles } from '@material-ui/core'
import clsx from 'clsx'

type MouseEventHandler = (event: React.MouseEvent<{}>) => void

type GamePlayButtonProps = {
    onClick?: MouseEventHandler,
    onButtonClick?: MouseEventHandler,
    loading?: boolean,
    className?: string,
}

const onlyButtonEvent : (onButtonClick?: MouseEventHandler) => (event: React.MouseEvent<{}>) => void = (onButtonClick) => event => {
  onButtonClick?.(event)
  event.stopPropagation()
}

const GamePlayButtonHover: React.SFC<GamePlayButtonProps & StyleProps> = ({classes, onClick, onButtonClick, loading, className}) => (
    <div className={clsx(classes.hoverContainer, className)}
      onClick={onClick}>
      <div className={classes.playButton}>
          <GamePlayButton onClick={onlyButtonEvent(onButtonClick)} loading={loading}/>
      </div>
    </div>
  )

export default withStyles(styles)(GamePlayButtonHover)

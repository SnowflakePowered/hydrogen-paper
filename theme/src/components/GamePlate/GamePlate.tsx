import React from 'react'

import { Typography, Card, CardContent, CardMedia, withStyles } from '@material-ui/core'

import GamePlayButton from 'components/GamePlayButton/GamePlayButton'

import PhotoIcon from '@material-ui/icons/Photo'

import classNames from 'classnames'
import { styles, StyleProps } from './GamePlate.style'
import { QuickPlayEvent } from 'support/ComponentEvents/QuickPlayEvent'
import { ViewTransitionEvent, ViewStates } from 'support/ComponentEvents/ViewTransitionEvent'
import GamePlayButtonHover from 'components/GamePlayButtonHover/GamePlayButtonHover'
import ImageCard from 'components/ImageCard/ImageCard'

type GameDetailsTransitionProps = {
  platformID: string,
  guid: string
}
// todo: z-depth on hover
// todo: button on hover
type GameCardProps = {
  image?: string,
  title: string,
  subtitle?: string,
  portrait?: boolean,
  size: number,
  onQuickPlay?: (event: QuickPlayEvent) => void
  onTransition?: (event: ViewTransitionEvent<GameDetailsTransitionProps>) => void
}

const GameCard: React.FunctionComponent<GameCardProps & StyleProps> =
 ({ classes, size, image, title, subtitle }) => (
  <div className={classes.plateContainer} style={{width: size, height: size}}>
    <div className={classes.centeredContainer}>
      <div className={classes.coverArtImageContainer}>
        <GamePlayButtonHover/>
        <ImageCard className={classes.coverArtImage} image={image} height={size * 0.75}/>
      </div>
      <div className={classes.textContainer}>
        <div className={classes.titleText}>
          <Typography color='textPrimary'
            className={classes.titleTextContent}>{title}
          </Typography>
        </div>
        <div className={classes.subtitleText}>
        <Typography color='textSecondary'
            variant='caption'
            className={classes.subtitleTextContent}>{subtitle ?? ''}
          </Typography>
        </div>
      </div>
    </div>
  </div>)

export default withStyles(styles)(GameCard)

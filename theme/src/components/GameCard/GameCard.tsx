import React from 'react'

import { Typography, Card, CardContent, CardMedia, withStyles } from '@material-ui/core'

import GamePlayButton from 'components/GamePlayButton/GamePlayButton'

import PhotoIcon from '@material-ui/icons/Photo'

import classNames from 'classnames'
import { styles, StyleProps } from './GameCard.style'
import { QuickPlayEvent } from 'support/ComponentEvents/QuickPlayEvent'
import { ViewTransitionEvent, ViewStates } from 'support/ComponentEvents/ViewTransitionEvent'
import GamePlayButtonHover from 'components/GamePlayButtonHover/GamePlayButtonHover'

type GameDetailsTransitionProps = {
  platformID: string,
  guid: string
}
// todo: z-depth on hover
// todo: button on hover
type GameCardProps = {
  // tslint:disable-next-line:no-any
  image?: string,
  title: string,
  subtitle?: string,
  portrait?: boolean,
  landscape?: boolean,
  square?: boolean,
  guid: string,
  platformID: string,
  onQuickPlay?: (event: QuickPlayEvent) => void
  onTransition?: (event: ViewTransitionEvent<GameDetailsTransitionProps>) => void
}

const GameCard: React.SFC<GameCardProps & StyleProps> =
 ({ classes, image, title, subtitle, portrait, landscape, square, guid, platformID,
    onQuickPlay, onTransition }) => (
  <div 
    className={classNames({
      [classes.cardContainer]: true,
      [classes.cardContainerSquare]: square,
      [classes.cardContainerLandscape]: landscape,
      [classes.cardContainerPortrait]: portrait,
      [classes.cardContainerPortrait]: !(portrait && landscape && square)
    })}
  >
    <Card>
      <CardMedia className={classes.cardMedia} image={image || 'someimage'}>
      <GamePlayButtonHover onClick={() => onQuickPlay!({gameGuid: guid})}/>
        <div 
          className={classNames({
            [classes.sizer]: true,
            [classes.sizerSquare]: square,
            [classes.sizerLandscape]: landscape,
            [classes.sizerPortrait]: portrait,
            [classes.sizerPortrait]: !(portrait && landscape && square)
          })}
        >
          <div
            className={classes.cardImageContainer} 
            onClick={
            () => onTransition ? onTransition!({
              nextView: ViewStates.GameDetailsView, props: {platformID: platformID, guid: guid}
            }) : undefined }
          >
            {image ? <img className={classes.cardImage} src={image ? image : ''} alt="Game Cover"/> : <PhotoIcon/>}
          </div>
        </div>
      </CardMedia>
      <div 
        className={classes.cardText}
        onClick={
          () => onTransition!({
            nextView: ViewStates.GameDetailsView, props: {platformID: platformID, guid: guid}
          })}
      >
        <CardContent>
          <Typography component="h2" className={classes.cardTitle}>{title}</Typography>
          <Typography component="h3" className={classes.cardSubtitle}>{subtitle}</Typography>
        </CardContent>
      </div>
    </Card>
  </div>)

export default withStyles(styles)(GameCard)

import React, { useState } from 'react'

import { Typography, withStyles } from '@material-ui/core'

import { styles, StyleProps } from './GamePlate.style'
import GamePlayButtonHover from 'components/GamePlayButtonHover/GamePlayButtonHover'
import ImageCard from 'components/ImageCard/ImageCard'

type GameDetailsTransitionProps = {
  platformID: string,
  guid: string
}
// todo: z-depth on hover
// todo: button on hover
type GamePlateProps = {
  image?: string,
  title: string,
  subtitle?: string,
  portrait?: boolean,
  size: number,
  onCardClick?: (event: React.MouseEvent<{}>) => void
  onCardButtonClick?: (event: React.MouseEvent<{}>) => void
}

const GamePlate: React.FunctionComponent<GamePlateProps & StyleProps> =
 ({ classes, size, image, title, subtitle, onCardButtonClick, onCardClick }) => {
   const [hover, setHover] = useState(false);
   return (<div className={classes.plateContainer} style={{width: size, height: size}}>
      <div className={classes.centeredContainer}>
        <div className={classes.coverArtImageContainer} 
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}>
          <GamePlayButtonHover onButtonClick={onCardButtonClick} onClick={onCardClick}/>
          <ImageCard elevation={hover ? 4 : 1} className={classes.coverArtImage} image={image} height={size * 0.75}/>
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
 }

export default withStyles(styles)(GamePlate)

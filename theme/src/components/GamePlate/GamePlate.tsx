import React, { useState } from 'react'

import { Typography } from '@material-ui/core'

import useStyles from './GamePlate.style'
import GamePlayButtonHover from 'components/GamePlayButtonHover/GamePlayButtonHover'
import ImageCard from 'components/ImageCard/ImageCard'

type GameDetailsTransitionProps = {
  platformID: string,
  guid: string
}

// todo: z-depth on hover
// todo: button on hover

type ShowTitleGamePlateProps = {
  image?: string,
  showTitle?: true,
  title: string,
  subtitle?: string,
  size: number,
  onCardClick?: (event: React.MouseEvent<{}>) => void
  onCardButtonClick?: (event: React.MouseEvent<{}>) => void
}


type NoTitleGamePlateProps = {
  image?: string,
  showTitle: false,
  size: number,
  title?: never,
  subtitle?: never,
  onCardClick?: (event: React.MouseEvent<{}>) => void
  onCardButtonClick?: (event: React.MouseEvent<{}>) => void
}

type GamePlateProps = (NoTitleGamePlateProps | ShowTitleGamePlateProps) & StyleProps

const GamePlate: React.FunctionComponent<GamePlateProps> =
 ({ size, image, title, subtitle, showTitle, onCardButtonClick, onCardClick }) => {
   const classes = useStyles()
   const [hover, setHover] = useState(false);
   return (<div className={classes.plateContainer} style={{width: size, height: size}}>
      <div className={classes.centeredContainer}>
        <div className={classes.coverArtImageContainer} 
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}>
          <GamePlayButtonHover onButtonClick={onCardButtonClick} onClick={onCardClick}/>
          <ImageCard elevation={hover ? 4 : 1} className={classes.coverArtImage} image={image} height={size * 0.8} width={size * 0.8}/>
        </div>
        { showTitle ?? true ? 
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
          : <></>
        }
      </div>
    </div>)
 }

export default GamePlate

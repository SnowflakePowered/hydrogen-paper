import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Paper } from '@material-ui/core'
import useStyles from 'components/ImageCard/ImageCard.styles'
import PhotoIcon from '@material-ui/icons/Photo'
import clsx from 'clsx'
import ProgressiveImage from 'react-progressive-image'

type ImageCardProps = {
  image?: string,
  elevation?: number,
  height: number,
  width?: number,
  className?: string,
}

const ImageCard: React.FunctionComponent<ImageCardProps> = ({ image, elevation, height, width, className }) => {
  const classes = useStyles()
  const [loaded, setLoaded] = useState(false)
  const setLoadedTrue = () => setLoaded(true)
  return (
    <div className={classes.padding}>
      <div className={classes.root}>
        <div className={classes.paperContainer}>
          <Paper elevation={elevation || 1} className={clsx(classes.paper, className)}
            style={{
              minHeight: Math.min(height, 100),
              minWidth: Math.min(height, 100)
            }}>
            <div className={classes.imageContainer}>
              {image ?
                <ProgressiveImage delay={75} src={image} placeholder="">
                  {(src: string, loading: boolean) =>
                    loading ? <PhotoIcon color='disabled' />
                      : <img className={clsx(classes.image, {
                        [classes.imageLoaded]: loaded
                      })}
                        onLoad={setLoadedTrue}
                        src={src} style={{ maxHeight: height, maxWidth: width }} alt="ImageCard" />}
                </ProgressiveImage>
                : <PhotoIcon color='disabled' />
              }
            </div>
          </Paper>
        </div>
      </div>
    </div>
  )
}

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  elevation: PropTypes.number
}

export default ImageCard

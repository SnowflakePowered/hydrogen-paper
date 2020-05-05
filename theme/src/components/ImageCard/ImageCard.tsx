import React, { useState } from 'react'
import * as PropTypes from 'prop-types'

import { Paper, withStyles } from '@material-ui/core'
import { styles, StyleProps } from 'components/ImageCard/ImageCard.styles'
import PhotoIcon from '@material-ui/icons/Photo'
import classNames from 'classnames'
import ProgressiveImage from 'react-progressive-image'

type ImageCardProps = {
  image?: string,
  elevation?: number,
  height: number,
  width?: number,
  className?: string,
}

const ImageCard: React.FunctionComponent<ImageCardProps & StyleProps> = ({ classes, image, elevation, height, width, className }) => {
  const [loaded, setLoaded] = useState(false)
  const setLoadedTrue = () => setLoaded(true)
  return (
    <div className={classes.padding}>
      <div className={classes.root}>
        <div className={classes.paperContainer}>
          <Paper elevation={elevation || 1} className={
            classNames({
              [classes.paper]: [true],
              [className ?? '']: className !== undefined
            })}
            style={{
              minHeight: Math.min(height, 100),
              minWidth: Math.min(height, 100)
            }}>
            <div className={classes.imageContainer}>
              {image ?
                <ProgressiveImage delay={75} src={image} placeholder="">
                  {(src, loading) =>
                    loading ? <PhotoIcon color='disabled' />
                      : <img className={classNames({
                          [classes.image]: true,
                          [classes.imageLoaded]: loaded })}
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

export default withStyles(styles)(ImageCard)

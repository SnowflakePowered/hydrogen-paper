import React from 'react'
import * as PropTypes from 'prop-types'

import { Paper, withStyles } from '@material-ui/core'
import { styles, StyleProps } from 'components/ImageCard/ImageCard.styles'
import PhotoIcon from '@material-ui/icons/Photo'
import classNames from 'classnames'

type ImageCardProps = {
  image?: string,
  elevation?: number,
  height: number,
  className?: string,
}

const ImageCard: React.FunctionComponent<ImageCardProps & StyleProps> = ({ classes, image, elevation, height, className }) => (
  <div className={classes.padding}>
    <div className={classes.root}>
      <div className={classes.paperContainer}>
        <Paper elevation={elevation || 1} className={
          classNames({
            [classes.paper]: [true],
            [className ?? '']: className !== undefined
          })}>
          <div className={classes.imageContainer}>
          {image ? <img className={classes.image} src={image} style={{maxHeight: height}} alt="ImageCard"/> : <PhotoIcon/>}
          </div>
        </Paper>
      </div>
    </div>
  </div>
)

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  elevation: PropTypes.number
}

export default withStyles(styles)(ImageCard)

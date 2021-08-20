import React, { useState } from 'react'
import useStyles from './Rating.style'
import RatingStar from 'components/RatingStar/RatingStar'
import VoidEvent from 'support/VoidEvent'
type ComponentProps = {
  rating: 0 | 1 | 2 | 3 | 4 | 5
  onRating?: VoidEvent<{ rating: ComponentProps["rating"] }>
}

const makeRatingSet = (rating: number) => (
  [...[...Array(rating)].map(_ => true), ...[...Array(5 - rating)].map(_ => false)]
)

const shouldBeFilled = (self: number, ratingSet: boolean, hover: number) => {
  if (hover > self - 1) {
    return true
  } else if (hover != -2 && hover < self) {
    return false
  } else {
    return ratingSet
  }
}

const hoverToRating = (hover: number) : ComponentProps["rating"] => {
  if (hover <= 0) {
    return 0
  }
  if (hover >= 5) {
    return 5
  }
  // wish typescript had proof types
  return hover + 1 as ComponentProps["rating"]
}

const Rating: React.FunctionComponent<ComponentProps> = ({ rating, onRating }) => {
  const classes = useStyles()
  const [hover, setHover] = useState(-2)
  const ratingSet = makeRatingSet(rating)
  return (
    <div onMouseLeave={() => setHover(-2)}>
      <span className={classes.star} onMouseEnter={() => setHover(-1)} style={{opacity: 0}}
         onClick={() => onRating?.({ rating: 0 })}>
        <RatingStar filled={false} key={"star-none"} />
      </span>
      {[...Array(5).keys()].map(i =>
        <span className={classes.star} 
          onMouseEnter={() => setHover(i)} onClick={() => onRating?.({rating: hoverToRating(i)})}>
          <RatingStar filled={shouldBeFilled(i, ratingSet[i], hover)} key={"star" + (i) } />
        </span>
      )}
    </div>
  )
}

export default Rating

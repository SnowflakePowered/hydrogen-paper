import React from 'react'
import useStyles from './RatingStar.style'
import { Grade, GradeOutlined } from '@material-ui/icons'

type ComponentProps = {
  filled: boolean
}

const Rating: React.FunctionComponent<ComponentProps> = ({ filled }) => {
  const classes = useStyles()
  return (
    filled ? 
      <Grade /> : <GradeOutlined />
  )
}

export default Rating

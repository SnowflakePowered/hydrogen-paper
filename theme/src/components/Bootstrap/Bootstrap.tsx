import React from 'react'
import { withStyles } from '@material-ui/core'
import { styles, StyleProps } from './Bootstrap.style'

type ComponentProps = {
 
}

const Bootstrap: React.FunctionComponent<ComponentProps & StyleProps> = ({classes}) => (
  <div>
  </div>
)

export default withStyles(styles)(Bootstrap)

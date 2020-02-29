
import React from 'react'
import { WithStyles, createStyles, withStyles } from '@material-ui/core'

type ConfigurationRendererProps = {
  name: string,
  // configurations: n
}

const styles = createStyles({
  container: {}
})

type StyleProps = WithStyles<typeof styles>

// export type WidgetChildrenProps = {
//   onValueChange?: (e: ConfigurationValueChangeEvent) => void
// }

const ConfigurationRenderer: React.FunctionComponent<ConfigurationRendererProps & StyleProps>
 = ({classes}) => (
  <div className={classes.container}>
   {

   }
  </div>
)

export default withStyles(styles)(ConfigurationRenderer)

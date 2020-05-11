
import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core'

type ConfigurationRendererProps = {
  name: string,
  // configurations: n
}

const styles = createStyles({
  container: {}
})

const useStyles = makeStyles(styles)

// export type WidgetChildrenProps = {
//   onValueChange?: (e: ConfigurationValueChangeEvent) => void
// }

const ConfigurationRenderer: React.FunctionComponent<ConfigurationRendererProps>
  = () => {
    const classes = useStyles()
    return (
      <div className={classes.container}>
        {

        }
      </div>
    )
  }

export default ConfigurationRenderer

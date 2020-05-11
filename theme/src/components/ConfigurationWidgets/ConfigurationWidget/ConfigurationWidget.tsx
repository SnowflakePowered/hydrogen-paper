import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { useStyles } from './ConfigurationWidget.style'
import { ConfigurationValueChangeEvent } from 'support/ComponentEvents/ConfigurationValueChangeEvent'

type ConfigurationWidgetProps = {
  name: string,
  description: string,
  isLoading: boolean,
}

export type WidgetChildrenProps = {
  onValueChange?: (e: ConfigurationValueChangeEvent) => void
}

const ConfigurationWidget: React.FunctionComponent<ConfigurationWidgetProps & WidgetChildrenProps>
  = ({ name, description, isLoading, children, onValueChange }) => {
    const classes = useStyles()
    return (
      <div className={classes.container}>
        <div className={classes.description}>
          <div className={classes.configTitle}>
            {name}
          </div>
          <div className={classes.configDescription}>
            {description}
          </div>
        </div>
        <div className={classes.control}>
          {isLoading ? <CircularProgress size={32} /> : children}
        </div>
      </div>
    )
  }

export default ConfigurationWidget

import React from 'react'
import { Switch } from '@material-ui/core'

import ConfigurationWidget, { WidgetChildrenProps }
from 'components/ConfigurationWidgets/ConfigurationWidget/ConfigurationWidget'
import { ConfigurationOption } from 'support/Snowflake'

type BooleanWidgetProps = {
  option: ConfigurationOption,
  isLoading?: boolean
}
// todo: Refactor this out to a container.

const BooleanWidget: React.FunctionComponent<BooleanWidgetProps & WidgetChildrenProps> =
     ({option, isLoading, onValueChange}) => {
  return (
    <ConfigurationWidget
        name={option.Descriptor.DisplayName}
        description={option.Descriptor.Description}
        isLoading={isLoading || false}
    >
    <Switch
        checked={option.Value.Value as boolean}
        onChange={(_, newValue) => onValueChange?.({
                previousValue: option.Value.Value,
                newValue: newValue,
                type: 'boolean',
                valueGuid: option.Value.Guid
        })}
    />
    </ConfigurationWidget>
  )
}

export default BooleanWidget

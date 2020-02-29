import React from 'react'
import { TextField } from '@material-ui/core'
import { ConfigurationOption, ConfigurationKey } from 'support/Snowflake'
import ConfigurationWidget, { WidgetChildrenProps } from '../ConfigurationWidget/ConfigurationWidget'

type StringWidgetProps = {
  option: ConfigurationOption,
  isLoading?: boolean,
}
// <Switch checked={stringOption.Value.Value} onChange={valueChangeHandler}/>
// todo: Refactor this out to a container.
const StringWidget: React.FunctionComponent<StringWidgetProps & WidgetChildrenProps> =
 ({option, isLoading, onValueChange}) => {
  return (
    <ConfigurationWidget
      name={option.Descriptor.DisplayName}
      description={option.Descriptor.Description}
      isLoading={isLoading || false}
    >
     <TextField
      value={option.Value.Value as string}
      onChange={(e) => onValueChange!({
          newValue: e.target.value,
          valueGuid: option.Value.Guid,
          previousValue: option.Value.Value,
          type: 'string'
        })}
     />
    </ConfigurationWidget>
  )
}

export default StringWidget

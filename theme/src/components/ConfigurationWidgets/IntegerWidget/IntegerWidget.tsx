import React from 'react'
import { ConfigurationOption } from 'support/Snowflake'
import ConfigurationWidget, {
  WidgetChildrenProps
} from '../ConfigurationWidget/ConfigurationWidget'
import { Slider } from '@material-ui/core'

type IntegerWidgetProps = {
  option: ConfigurationOption;
  isLoading?: boolean;
}

// todo: Refactor this out to a container.
const IntegerWidget: React.FunctionComponent<IntegerWidgetProps & WidgetChildrenProps> = ({
  option,
  isLoading,
  onValueChange
}) => {
  return (
    <ConfigurationWidget
      name={option.Descriptor.DisplayName}
      description={option.Descriptor.Description}
      isLoading={isLoading || false}
    >
      <div>
        <Slider
          value={option.Value.Value as number}
          min={option.Descriptor.Min}
          max={option.Descriptor.Max}
          step={option.Descriptor.Increment}
          marks={true}
          valueLabelDisplay="auto"
          onChange={(_, newValue) =>
            onValueChange?.({
              newValue: newValue as number,
              valueGuid: option.Value.Guid,
              previousValue: option.Value.Value,
              type: 'integer'
            })
          }
        />
      </div>
    </ConfigurationWidget>
  )
}

export default IntegerWidget

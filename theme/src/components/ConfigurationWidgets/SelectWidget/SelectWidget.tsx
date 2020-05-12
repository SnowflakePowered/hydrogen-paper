import React from 'react'

import ConfigurationWidget, { WidgetChildrenProps }
 from 'components/ConfigurationWidgets/ConfigurationWidget/ConfigurationWidget'
import { ConfigurationOption } from 'support/Snowflake'
import { Select, MenuItem } from '@material-ui/core'

type SelectWidgetProps = {
  option: ConfigurationOption,
  isLoading?: boolean
}
// todo: Refactor this out to a container.
const SelectWidget: React.FunctionComponent<SelectWidgetProps & WidgetChildrenProps> =
     ({option, isLoading, onValueChange}) => {
  return (
    <ConfigurationWidget
        name={option.Descriptor.DisplayName}
        description={option.Descriptor.Description}
        isLoading={isLoading || false}
    >
      <Select
        value={option.Value.Value as number}
        onChange={(e, newValue) => onValueChange?.(
          {
            previousValue: option.Value.Value as number,
            newValue: parseInt(e.target.value as string, 10),
            type: 'selection',
            valueGuid: option.Value.Guid
          }
        )}
      >
        {option.Selection!.map(s => (
        <MenuItem
            key={s.NumericValue}
            value={s.NumericValue}
        >
            {s.DisplayName}
        </MenuItem>))}
      </Select>
    </ConfigurationWidget>
  )
}

export default SelectWidget

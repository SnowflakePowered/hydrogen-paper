
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'
import { ConfigurationOption } from 'support/Snowflake';

import BooleanWidget from 'components/ConfigurationWidgets/BooleanWidget/BooleanWidget'
import SelectWidget from 'components/ConfigurationWidgets/SelectWidget/SelectWidget'
import StringWidget from 'components/ConfigurationWidgets/StringWidget/StringWidget'
import IntegerWidget from 'components/ConfigurationWidgets/IntegerWidget/IntegerWidget'
import DecimalWidget from 'components/ConfigurationWidgets/DecimalWidget/DecimalWidget'


export default {
    title: 'ConfigurationWidgets',
};

const booleanOption: ConfigurationOption = {
    Descriptor: {
        DisplayName: 'Test Boolean Option',
        Description: 'A Test Boolean Option',
        Default: true,
        Simple: false,
        Flag: false,
        Private: false,
        Type: 'boolean',
        OptionKey: 'test-boolean'
    },
    Value: {
        Value: true,
        Guid: 'test-guid',
        OptionKey: 'test-boolean'
    }
}

const selectOption: ConfigurationOption = {
    Descriptor: {
        DisplayName: 'Test Selection Option',
        Description: 'A Test Selection Option',
        Default: 0,
        Simple: false,
        Flag: false,
        Private: false,
        Type: 'selection',
        OptionKey: 'test-select'
    },
    Value: {
        Value: 0,
        Guid: 'test-guid',
        OptionKey: 'test-select'
    },
    Selection: [
        {
            DisplayName: 'Option One',
            NumericValue: 0,
            Private: false,
        },
        {
            DisplayName: 'Option Two',
            NumericValue: 1,
            Private: false,
        },
        {
            DisplayName: 'Option Three',
            NumericValue: 3,
            Private: false,
        }
    ]
}

const stringOption: ConfigurationOption = {
    Descriptor: {
        DisplayName: 'Test String Option',
        Description: 'A Test String Option',
        Default: "hello world",
        Simple: false,
        Flag: false,
        Private: false,
        Type: 'string',
        OptionKey: 'test-string'
    },
    Value: {
        Value: "Lorem Ipsum",
        Guid: 'test-guid',
        OptionKey: 'test-string'
    }
}

const integerOption: ConfigurationOption = {
    Descriptor: {
        DisplayName: 'Test Integer Option',
        Description: 'A Test Integer Option',
        Min: -10,
        Max: 10,
        Increment: 2,
        Default: 0,
        Simple: false,
        Flag: false,
        Private: false,
        Type: 'integer',
        OptionKey: 'test-int'
    },
    Value: {
        Value: 0,
        Guid: 'test-guid',
        OptionKey: 'test-int'
    }
}

const decimalOption: ConfigurationOption = {
    Descriptor: {
        DisplayName: 'Test Decimal Option',
        Description: 'A Test Decimal Option',
        Min: -10,
        Max: 10,
        Increment: 0.5,
        Default: 0,
        Simple: false,
        Flag: false,
        Private: false,
        Type: 'boolean',
        OptionKey: 'test-decimal'
    },
    Value: {
        Value: 0,
        Guid: 'test-guid',
        OptionKey: 'test-decimal'
    }
}

export const BooleanWidgetStory = () =>
    <BooleanWidget option={booleanOption} onValueChange={action('on-config-value-changed')} />

export const SelectionWidgetStory = () =>
    <SelectWidget option={selectOption} onValueChange={action('on-config-value-changed')} />

export const StringWidgetStory = () =>
    <StringWidget option={stringOption} onValueChange={action('on-config-value-changed')} />

export const IntegerWidgetStory = () =>
    <IntegerWidget option={integerOption} onValueChange={action('on-config-value-changed')} />

export const DecimalWidgetStory = () =>
    <DecimalWidget option={decimalOption} onValueChange={action('on-config-value-changed')} />


const actionHandler = action('on-config-value-change-handled')
const handleValueChange = (e, oldOption, setOption) => {
    actionHandler(e)
    setOption({...oldOption, Value: {
        ...oldOption.Value,
        Value: e.newValue,
      }})
}

const BooleanWidgetView = () => {
    const [option, setOption] = useState(booleanOption);
    return <BooleanWidget option={option} onValueChange={e => handleValueChange(e, option, setOption)}/>
}
const SelectWidgetView = () => {
    const [option, setOption] = useState(selectOption);
    return <SelectWidget option={option} onValueChange={e => handleValueChange(e, option, setOption)}/>
}
const StringWidgetView = () => {
    const [option, setOption] = useState(stringOption);
    return <StringWidget option={option} onValueChange={e => handleValueChange(e, option, setOption)}/>
}
const IntegerWidgetView = () => {
    const [option, setOption] = useState(integerOption);
    return <IntegerWidget option={option} onValueChange={e => handleValueChange(e, option, setOption)}/>
}
const DecimalWidgetView = () => {
    const [option, setOption] = useState(decimalOption);
    return <DecimalWidget option={option} onValueChange={e => handleValueChange(e, option, setOption)}/>
}

export const BooleanWidgetHandled = () => <BooleanWidgetView/>
export const StringWidgetHandled = () => <StringWidgetView/>
export const SelectWidgetHandled = () => <SelectWidgetView/>
export const IntegerWidgetHandled = () => <IntegerWidgetView/>
export const DecimalWidgetHandled = () => <DecimalWidgetView/>

// storiesOf('Configuration Widgets', module)
// .add('boolean widget', () => 
//   <BooleanWidget option={booleanOption} onValueChange={action('on-config-value-changed')}/>)
// .add('boolean widget handled', () => 
//   <BooleanWidgetView/>)
// .add('selection widget', () =>
//   <SelectWidget option={selectOption} onValueChange={action('on-config-value-changed')}/>)
// .add('selection widget handled', () =>
//   <SelectWidgetView/>)
// .add('string widget', () =>
//   <StringWidget option={stringOption} onValueChange={action('on-config-value-changed')}/>)
// .add('string widget handled', () =>
//   <StringWidgetView/>)
// .add('integer slider widget', () =>
//   <IntegerWidget option={integerOption} onValueChange={action('on-config-value-changed')}/>)
// .add('integer slide widget handled', () => 
// <IntegerWidgetView/>)
// .add('decimal slider widget', () =>
//   <DecimalWidget option={decimalOption} onValueChange={action('on-config-value-changed')}/>)
// .add('decimal slide widget handled', () => 
//   <DecimalWidgetView/>)
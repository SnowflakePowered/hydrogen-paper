
import React from 'react';
import NavigationButtons from 'components/NavigationButtons/NavigationButtons'
import { action } from '@storybook/addon-actions'

export default {
    title: 'NavigationButtons',
    component: NavigationButtons,
};

export const NavigationButtonsStory = () => <NavigationButtons 
    onForward={action('onForward')} onBackward={action('onBackward')}/>
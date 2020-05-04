
import React from 'react';
import TopNavigation from 'containers/TopNavigation/TopNavigation'
import { action } from '@storybook/addon-actions'

export default {
    title: 'TopNavigation',
    component: TopNavigation,
};

export const TopNavigationStory = () => <TopNavigation onForward={action('on-forward')} 
    onBackward={action('on-backward')} onSettings={action('on-settings')}/>
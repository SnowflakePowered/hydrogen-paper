
import React from 'react';
import SearchBar from 'components/SearchBar/SearchBar'
import { action } from '@storybook/addon-actions'

export default {
    title: 'SearchBar',
    component: SearchBar,
};

export const SearchBarStory = () => <SearchBar onSearch={action('on-search')}/>
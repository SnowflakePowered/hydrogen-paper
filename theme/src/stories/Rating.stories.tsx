
import React from 'react';
import Rating from 'containers/Rating/Rating'
import { action } from '@storybook/addon-actions'

export default {
    title: 'Rating',
    component: Rating,
};

export const UnratedStory = () => <Rating rating={0} onRating={action("rating")}/>
export const HalfRated = () => <Rating rating={3} onRating={action("rating")}/>
export const FiveStarRated = () => <Rating rating={5} onRating={action("rating")}/>
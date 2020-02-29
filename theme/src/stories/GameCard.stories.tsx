import React from 'react';
import GameCard from 'components/GameCard/GameCard'
import { action } from '@storybook/addon-actions'

export default {
    title: 'GameCard',
    component: GameCard,
};

const GUID = "00000000-0000-0000-0000-000000000000"
const PLATFORM_ID = "NINTENDO_NES"


export const Portrait = () => <GameCard title="Lorem Ipsum"
    guid={GUID}
    platformID={PLATFORM_ID}
    subtitle="Dolor Sit Amen" onTransition={action('game-transition')} />

export const PortraitWithImage = () => <GameCard
    guid={GUID}
    platformID={PLATFORM_ID}
    onTransition={action('game-transition')}
    image="http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"
    title="Lorem Ipsum" subtitle="Dolor Sit Amen" />


export const PortraitNoTitle = () => <GameCard
    guid={GUID}
    platformID={PLATFORM_ID}
    noTitle
    onTransition={action('game-transition')}
    image="http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"
    title="Lorem Ipsum" subtitle="Dolor Sit Amen" />

export const Landscape = () => <GameCard guid={GUID}
    platformID={PLATFORM_ID} landscape title="Lorem Ipsum" subtitle="Dolor Sit Amen" />

export const LandscapeWithImage = () => <GameCard
    guid={GUID}
    platformID={PLATFORM_ID}
    onTransition={action('game-transition')}
    image="http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"
    landscape title="Lorem Ipsum" subtitle="Dolor Sit Amen" />

export const LandscapeNoTitle = () => <GameCard
    guid={GUID}
    noTitle
    platformID={PLATFORM_ID}
    onTransition={action('game-transition')}
    image="http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"
    landscape title="Lorem Ipsum" subtitle="Dolor Sit Amen" />

export const Square = () => <GameCard guid={GUID}
    platformID={PLATFORM_ID} onTransition={action('game-transition')} square title="Lorem Ipsum" subtitle="Dolor Sit Amen" />

export const SquareWithImage = () => <GameCard square
    guid={GUID}
    platformID={PLATFORM_ID}
    onTransition={action('game-transition')}
    image="http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"
    title="Lorem Ipsum" subtitle="Dolor Sit Amen" />

export const SquareNoTitle = () => <GameCard square
    guid={GUID}
    platformID={PLATFORM_ID}
    noTitle
    onTransition={action('game-transition')}
    image="http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"
    title="Lorem Ipsum" subtitle="Dolor Sit Amen" />

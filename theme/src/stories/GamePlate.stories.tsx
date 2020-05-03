import React from 'react';
import GamePlate from 'components/GamePlate/GamePlate'
import { action } from '@storybook/addon-actions'

export default {
    title: 'GamePlate',
    component: GamePlate,
};

const SIZE = 250

const GUID = "00000000-0000-0000-0000-000000000000"
const PLATFORM_ID = "NINTENDO_NES"

export const Portrait = () => <GamePlate title="Super Mario Bros."
    size={SIZE}
    image={"http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"}
    subtitle="1983" onCardClick={action('card-click')} onCardButtonClick={action('card-button-click')} />

export const Landscape = () => <GamePlate title="Super Mario World"
    size={SIZE}
    image={"https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Super_Mario_World_Coverart.png/220px-Super_Mario_World_Coverart.png"}
    subtitle="1990" onCardClick={action('card-click')} onCardButtonClick={action('card-button-click')} />

export const Square = () => <GamePlate title="New Super Mario Bros."
    size={SIZE}
    image={"https://upload.wikimedia.org/wikipedia/en/d/db/NewSuperMarioBrothers.jpg"}
    subtitle="2006" onCardClick={action('card-click')} onCardButtonClick={action('card-button-click')} />

export const PortraitNoTitle = (key) => <GamePlate
    showTitle={false}
    size={SIZE}
    key={key}
    image={"http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"} />

export const LandscapeNoTitle = (key) => <GamePlate
    showTitle={false}
    size={SIZE}
    key={key}
    image={"https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Super_Mario_World_Coverart.png/220px-Super_Mario_World_Coverart.png"}
/>

export const SquareNoTitle = (key) => <GamePlate
    showTitle={false}
    size={SIZE}
    key={key}
    image={"https://upload.wikimedia.org/wikipedia/en/d/db/NewSuperMarioBrothers.jpg"}
/>
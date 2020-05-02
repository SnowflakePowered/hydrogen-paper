import React from 'react';
import GamePlate from 'components/GamePlate/GamePlate'
import { action } from '@storybook/addon-actions'

export default {
    title: 'GamePlate',
    component: GamePlate,
};

const GUID = "00000000-0000-0000-0000-000000000000"
const PLATFORM_ID = "NINTENDO_NES"

export const Portrait = () => <GamePlate title="Super Mario Bros."
    size={250}
    image={"http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"}
    subtitle="1983" onTransition={action('game-transition')} />

    
export const Landscape = () => <GamePlate title="Super Mario World"
    size={250}
    image={"https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Super_Mario_World_Coverart.png/220px-Super_Mario_World_Coverart.png"}
    subtitle="1990" onTransition={action('game-transition')} />

     
export const Square = () => <GamePlate title="New Super Mario Bros."
    size={250}
    image={"https://upload.wikimedia.org/wikipedia/en/d/db/NewSuperMarioBrothers.jpg"}
    subtitle="2006" onTransition={action('game-transition')} />
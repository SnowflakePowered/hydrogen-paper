import React from 'react';
import GamePlayButton from 'components/GamePlayButton/GamePlayButton'


export default {
    title: 'GamePlayButton',
    component: GamePlayButton,
};

export const Inactive = () => <GamePlayButton/>
export const Loading = () => <GamePlayButton loading={true}/>

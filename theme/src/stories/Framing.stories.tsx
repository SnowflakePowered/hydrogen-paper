
import React from 'react';
import Framing from 'containers/Framing/Framing'
import SearchBar from 'components/SearchBar/SearchBar'
import Sidebar, { SelectableCollection, SelectablePlatform } from 'containers/Sidebar/Sidebar'
import TitleHeader from 'components/TitleHeader/TitleHeader'
import GamePlateGrid from 'components/GamePlateGrid/GamePlateGrid'
import GamePlate from 'components/GamePlate/GamePlate'

import { createStyles, withStyles } from '@material-ui/core/styles'
import { action } from '@storybook/addon-actions'

export default {
    title: 'Framing',
    component: Framing,
};

const styles = createStyles({
    container: {
        height: 'calc(100vh - 32px)'
    }
})

const platforms: SelectablePlatform[] = [
    {
        platformId: 'NINTENDO_SNES',
        friendlyName: 'Super Nintendo Entertainment System'
    },
    {
        platformId: 'NINTENDO_NES',
        friendlyName: 'Nintendo Entertainment System'
    },
    {
        platformId: 'NINTENDO_GBA',
        friendlyName: 'Game Boy Advanced'
    },
    {
        platformId: 'NINTENDO_NDS',
        friendlyName: 'Nintendo DS'
    },
    {
        platformId: 'NINTENDO_N64',
        friendlyName: 'Nintendo 64'
    },
    {
        platformId: 'SONY_PSX',
        friendlyName: 'Playstation'
    },
    {
        platformId: 'SONY_PS2',
        friendlyName: 'Playstation 2'
    },
    {
        platformId: 'SONY_PS3',
        friendlyName: 'Playstation 3'
    },]


const collections: SelectableCollection[] = [
    {
        collectionId: '1',
        collectionName: 'Favourites'
    },
    {
        collectionId: '2',
        collectionName: 'Super Mario'
    },
    {
        collectionId: '3',
        collectionName: 'Early 3D'
    },
    {
        collectionId: '4',
        collectionName: 'Early 8-bit'
    },
    {
        collectionId: '5',
        collectionName: 'Super Smash Bros.'
    },
    {
        collectionId: '6',
        collectionName: 'JRPG'
    }]

const MySidebar = () => 
<Sidebar 
    platforms={platforms}
    collections={collections}
/>

const MyTitleHeader = () => 
    <TitleHeader title="Hello World" subtitle="Hello World">
        <SearchBar />
    </TitleHeader>

const SIZE = 200

const Portrait = (key) => <GamePlate title={"Super Mario Bros. " + key}
    size={SIZE}
    key={key}
    image={"http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"}
    subtitle="1983" />

const gameList = [...Array(1000)].map((x, i) => Portrait(i + 1))

const FramingStory = withStyles(styles)(({ classes }) => {

    return (
        <div className={classes.container}>
            <Framing sidebar={<MySidebar/>} titleHeader={<MyTitleHeader/>} status="Installing Game..." spinner={true}>
                <GamePlateGrid size={SIZE}>
                    {
                        gameList
                    }
                </GamePlateGrid>
            </Framing>
        </div>
    )
})
export const Default = () => <FramingStory/>

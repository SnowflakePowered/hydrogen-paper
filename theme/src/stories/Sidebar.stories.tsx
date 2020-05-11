
import React, { useState } from 'react';
import { withStyles, createStyles } from '@material-ui/core'
import Sidebar, { SelectablePlatform, SelectableCollection } from 'containers/Sidebar/Sidebar'

export default {
    title: 'Sidebar',
    component: Sidebar,
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

const SidebarStory = withStyles(styles)(({ classes }) => {
    const [selectedPlatform, setSelectedPlatform] = useState<string>();
    const [selectedCollection, setSelectedCollection] = useState<string>();

    return (
        <div className={classes.container}>
            <Sidebar platforms={platforms}
                collections={collections}
                selectedPlatform={selectedPlatform}
                selectedCollection={selectedCollection}
                onPlatformSelect={platformId => {
                    setSelectedCollection(undefined)
                    setSelectedPlatform(platformId)
                }}
                onCollectionSelect={collectionId => {
                    setSelectedPlatform(undefined)
                    setSelectedCollection(collectionId)
                }}
            />
        </div>
    )
})

const HideCollectionSidebarStory = withStyles(styles)(({ classes }) => {
    const [selectedPlatform, setSelectedPlatform] = useState<string>();
    const [selectedCollection, setSelectedCollection] = useState<string>();

    return (
        <div className={classes.container}>
            <Sidebar platforms={platforms}
                collections={collections}
                selectedPlatform={selectedPlatform}
                selectedCollection={selectedCollection}
                hideCollection={true}
                onPlatformSelect={platformId => {
                    setSelectedCollection(undefined)
                    setSelectedPlatform(platformId)
                }}
                onCollectionSelect={collectionId => {
                    setSelectedPlatform(undefined)
                    setSelectedCollection(collectionId)
                }}
            />
        </div>
    )
})

export const Default = () => <SidebarStory />
export const HideCollection = () => <HideCollectionSidebarStory />

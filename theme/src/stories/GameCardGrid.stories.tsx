import React from 'react';
import GameCard from 'components/GameCard/GameCard'
import GameCardGrid from 'components/GameCardGrid/GameCardGrid'
import { createStyles, withStyles, WithStyles } from '@material-ui/core';

export default {
    title: 'GameCardGrid',
    component: GameCardGrid,
};

const styles = createStyles({
    container: {
        height: 'calc(100vh - 20px)'
    }
})

type StyleProps = WithStyles<typeof styles>

const GUID = "00000000-0000-0000-0000-000000000000"
const PLATFORM_ID = "NINTENDO_NES"

const landscapeCard = int => (<GameCard
    key={int}
    subtitle="Nintedo"
    guid={GUID}
    platformID={PLATFORM_ID}
    title={int} landscape />)

const landscapeCardNoTitle = int => (<GameCard
        key={int}
        subtitle="Nintedo"
        guid={GUID}
        platformID={PLATFORM_ID}
        title={int} landscape noTitle />)

const landscapeGameList = [...Array(1000)].map((x, i) => landscapeCard(i + 1))
const landscapeGameListNoTitle = [...Array(1000)].map((x, i) => landscapeCardNoTitle(i + 1))

const LandscapeGameGridViewStory = withStyles(styles)(({ classes })  => {
    return (
        <div className={classes.container}>
            <GameCardGrid landscape>
                {
                    landscapeGameList
                }
            </GameCardGrid>
        </div>)
})


const LandscapeGameGridViewNoTitleStory = withStyles(styles)(({ classes })  => {
    return (
        <div className={classes.container}>
            <GameCardGrid landscape>
                {
                    landscapeGameListNoTitle
                }
            </GameCardGrid>
        </div>)
})

const portraitCard = int => (<GameCard
    key={int}
    guid={GUID}
    platformID={PLATFORM_ID}
    title={int} subtitle="Nintendo" portrait />)

const portraitCardNoTitle = int => (<GameCard
        key={int}
        guid={GUID}
        platformID={PLATFORM_ID}
        title={int} subtitle="Nintendo" portrait noTitle />)

const portraitGameList = [...Array(1000)].map((x, i) => portraitCard(i + 1))
const portraitGameListNoTitle = [...Array(1000)].map((x, i) => portraitCardNoTitle(i + 1))

const PortraitGameGridViewStory =  withStyles(styles)(({ classes }) => {
    return (
        <div className={classes.container}>
            <GameCardGrid>
                {
                    portraitGameList
                }
            </GameCardGrid>
        </div>)
})
const PortraitGameGridViewNoTitleStory =  withStyles(styles)(({ classes }) => {
    return (
        <div className={classes.container}>
            <GameCardGrid>
                {
                    portraitGameListNoTitle
                }
            </GameCardGrid>
        </div>)
})

const squareCard = int => (<GameCard
    key={int}
    guid={GUID}
    platformID={PLATFORM_ID}
    title={int} subtitle="Nintendo" square />)

const squareCardNoTitle = int => (<GameCard
        key={int}
        guid={GUID}
        platformID={PLATFORM_ID}
        title={int} subtitle="Nintendo" square noTitle />)

const squareGameList = [...Array(1000)].map((x, i) => squareCard(i + 1))
const squareGameListNoTitle = [...Array(1000)].map((x, i) => squareCardNoTitle(i + 1))

const SquareGameGridViewStory =  withStyles(styles)(({ classes }) => {

    return (
        <div className={classes.container}>
            <GameCardGrid square>
                {
                    squareGameList
                }
            </GameCardGrid>
        </div>)
})

const SquareGameGridViewNoTitleStory = withStyles(styles)(({ classes }) => {
    return (
        <div className={classes.container}>
            <GameCardGrid square>
                {
                    squareGameListNoTitle
                }
            </GameCardGrid>
        </div>)
})

export const PortraitGrid = () => <PortraitGameGridViewStory/>
export const PortraitGridNoTitle = () => <PortraitGameGridViewNoTitleStory/>

export const LandscrapeGrid = () => <LandscapeGameGridViewStory />
export const LandscrapeGridNoTitle = () => <LandscapeGameGridViewNoTitleStory />

export const SquareGrid = () => <SquareGameGridViewStory />
export const SquareGridNoTitle = () => <SquareGameGridViewNoTitleStory />

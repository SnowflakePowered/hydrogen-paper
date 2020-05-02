import React from 'react';
import GamePlate from 'components/GamePlate/GamePlate'
import GamePlateGrid from 'components/GamePlateGrid/GamePlateGrid'
import { createStyles, withStyles, WithStyles } from '@material-ui/core';

export default {
    title: 'GamePlateGrid',
    component: GamePlateGrid,
};

const styles = createStyles({
    container: {
        height: 'calc(100vh - 20px)'
    }
})

const SIZE = 200

const Portrait = (key) => <GamePlate title="Super Mario Bros."
    size={SIZE}
    key={key}
    image={"http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"}
    subtitle="1983"/>

    
const Landscape = (key) => <GamePlate title="Super Mario World"
    size={SIZE}
    key={key}
    image={"https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Super_Mario_World_Coverart.png/220px-Super_Mario_World_Coverart.png"}
    subtitle="1990"/>

     
const Square = (key) => <GamePlate title="New Super Mario Bros."
    size={SIZE}
    key={key}
    image={"https://upload.wikimedia.org/wikipedia/en/d/db/NewSuperMarioBrothers.jpg"}
    subtitle="2006"/>

type StyleProps = WithStyles<typeof styles>

const landscapeGameList = [...Array(1000)].map((x, i) => Landscape(i + 1))

const mixedGameList = [...Array(1000)].map((x, i) => {
    if ((i % 3) === 0) return Square(i + 1);
    if ((i % 2) === 0) return Landscape(i + 1);
    return Portrait(i + 1);
})

const LandscapeGameGridViewStory = withStyles(styles)(({ classes })  => {
    return (
        <div className={classes.container}>
            <GamePlateGrid size={SIZE}>
                {
                    landscapeGameList
                }
            </GamePlateGrid>
        </div>)
})


const MixedGameGridViewStory = withStyles(styles)(({ classes })  => {
    return (
        <div className={classes.container}>
            <GamePlateGrid size={SIZE}>
                {
                    mixedGameList
                }
            </GamePlateGrid>
        </div>)
})

export const Default = () => <LandscapeGameGridViewStory />
export const MixedImageSizes = () => <MixedGameGridViewStory />
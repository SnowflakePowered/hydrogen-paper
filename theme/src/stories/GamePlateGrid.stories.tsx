import React from 'react';
import GamePlate from 'components/GamePlate/GamePlate'
import GamePlateGrid from 'components/GamePlateGrid/GamePlateGrid'
import { createStyles, makeStyles } from '@material-ui/core/styles'

export default {
    title: 'GamePlateGrid',
    component: GamePlateGrid,
};

const styles = createStyles({
    container: {
        height: 'calc(100vh - 20px)'
    }
})

const useStyles = makeStyles(styles)

const SIZE = 200

const Portrait = (key) => <GamePlate title={"Super Mario Bros. " + key}
    size={SIZE}
    key={key}
    image={"http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"}
    subtitle="1983" />


const Landscape = (key) => <GamePlate title={"Super Mario World " + key}
    size={SIZE}
    key={key}
    image={"https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Super_Mario_World_Coverart.png/220px-Super_Mario_World_Coverart.png"}
    subtitle="1990" />


const Square = (key) => <GamePlate title={"New Super Mario Bros. " + key}
    size={SIZE}
    key={key}
    image={"https://upload.wikimedia.org/wikipedia/en/d/db/NewSuperMarioBrothers.jpg"}
    subtitle="2006" />


const PortraitNoTitle = (key) => <GamePlate
    showTitle={false}
    size={SIZE}
    key={key}
    image={"http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"} />


const LandscapeNoTitle = (key) => <GamePlate
    showTitle={false}
    size={SIZE}
    key={key}
    image={"https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Super_Mario_World_Coverart.png/220px-Super_Mario_World_Coverart.png"}
   />


const SquareNoTitle = (key) => <GamePlate 
    showTitle={false}
    size={SIZE}
    key={key}
    image={"https://upload.wikimedia.org/wikipedia/en/d/db/NewSuperMarioBrothers.jpg"}
/>

const landscapeGameList = [...Array(1000)].map((x, i) => Landscape(i + 1))

const mixedGameList = [...Array(1000)].map((x, i) => {
    if ((i % 3) === 0) return Square(i + 1);
    if ((i % 2) === 0) return Landscape(i + 1);
    return Portrait(i + 1);
})


const mixedGameNoTitleList = [...Array(1000)].map((x, i) => {
    if ((i % 3) === 0) return SquareNoTitle(i + 1);
    if ((i % 2) === 0) return LandscapeNoTitle(i + 1);
    return PortraitNoTitle(i + 1);
})

const LandscapeGameGridViewStory = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <GamePlateGrid size={SIZE}>
                {
                    landscapeGameList
                }
            </GamePlateGrid>
        </div>)
}


const MixedGameGridViewStory = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <GamePlateGrid size={SIZE}>
                {
                    mixedGameList
                }
            </GamePlateGrid>
        </div>)
}


const MixedGameGridViewNoTitleStory = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <GamePlateGrid size={SIZE}>
                {
                    mixedGameNoTitleList
                }
            </GamePlateGrid>
        </div>)
}

export const Default = () => <LandscapeGameGridViewStory />
export const MixedImageSizes = () => <MixedGameGridViewStory />
export const MixedImageSizesNoTitle = () => <MixedGameGridViewNoTitleStory />
import { WithStyles, createStyles, makeStyles } from '@material-ui/core/styles'
import { common } from '@material-ui/core/colors'
export type StyleProps = WithStyles<typeof styles>

export const styles = createStyles({
    topNavigationContainer: {
        paddingLeft: 16,
        paddingRight: 16,
        display: 'flex',
        gridArea: 'TopNavigation'
    },
    topNavigation: {
        alignSelf: 'flex-end',
        width: '100%'
    },
    listContainer: {
        overflow: 'hidden',
        position: 'relative',
        width: 'inherit',
        gridArea: 'ListContainer',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '3fr 2fr',
        gridTemplateAreas: `"PlatformsList" 
                            "CollectionsList"`,
        rowGap: '10px',
    },
    listContainerNoCollection: {
        gridTemplateRows: '1fr 0px',
    },
    platformsList: {
        position: 'relative',
        overflow: 'auto',
        gridArea: 'PlatformsList'
    },
    listSubheader: {
        fontWeight: 'bold',
        color: common.black,
        background: common.white,
    },
    collectionsList: {
        position: 'relative',
        overflow: 'auto',
        gridArea: 'CollectionsList'
    },
    sidebarContainer: {
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '72px 1fr',
        gridTemplateAreas: '"TopNavigation" "ListContainer"'
    },
    button: {
        textTransform: 'none'
    }
})

export const useStyles = makeStyles(styles)
export default useStyles
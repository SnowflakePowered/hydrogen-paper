import { WithStyles, createStyles } from '@material-ui/core/styles'
import { common } from '@material-ui/core/colors'
export type StyleProps = WithStyles<typeof styles>

export const styles = createStyles({
    topNavigationContainer: {
        height: 64,
        paddingLeft: 16,
        paddingRight: 16,
        display: 'flex'
    },
    topNavigation: {
        alignSelf: 'flex-end',
        width: '100%'
    },
    listContainer: {
        height: '100%',
        width: 'inherit',
    },
    platformsList: {
        maxHeight: '50%',
        position: 'relative',
        overflow: 'auto',
    },
    listSubheader: {
        fontWeight: 'bold',
        color: common.black,
        background: common.white,
    },
    collectionsList: {
        maxHeight: '33%',
        position: 'relative',
        overflow: 'auto',
    },
    sidebarContainer: {
        height: '100%'
    }
})

import { WithStyles, createStyles, makeStyles } from '@material-ui/core/styles'
import { grey, common } from '@material-ui/core/colors'
export type StyleProps = WithStyles<typeof styles>

export const styles = createStyles({
    container: {
        height: '100%',
        display: 'grid',
        gridTemplateRows: '96px 1fr 48px',
        gridTemplateAreas: `"Header"
                            "Table"
                            "Button"`
    },
    buttonContainer: {
        gridArea: "Button",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listContainer: {
        gridArea: 'Table',
    },
    subsectionHeader: {
        gridArea: 'Header',
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        userSelect: 'none'
    },
    installableTitle: {
        fontWeight: 'bold'
    },
    installableSubtitle: {
        fontSize: '11pt',
        color: grey[400]
    },
    installableFileLine: {
        fontSize: '9pt',
        color: grey[400]
    },
    installerText: {
        color: grey[600],
    }
})

export const useStyles = makeStyles(styles)
export default useStyles
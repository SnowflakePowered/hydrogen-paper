import { WithStyles, createStyles } from '@material-ui/core/styles'
import { grey, common } from '@material-ui/core/colors'
export type StyleProps = WithStyles<typeof styles>

export const styles = createStyles({
    container: {
        height: '100%',
        display: 'grid',
        gridTemplateRows: '96px 1fr',
        gridTemplateAreas: `"Header"
                            "Table"`
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

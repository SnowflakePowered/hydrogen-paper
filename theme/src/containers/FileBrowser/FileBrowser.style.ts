import { WithStyles, createStyles } from '@material-ui/core/styles'

export type StyleProps = WithStyles<typeof styles>

export const styles = createStyles({
    container: {
        height: '100%',
        display: 'grid',
        gridTemplateRows: '96px 1fr',
        gridTemplateAreas: `"Header"
                            "Table"`
    },
    tableContainer: {
        gridArea: 'Table',
    },
    subsectionHeader: {
        gridArea: 'Header',
    },
    colIcon: {
    },
    colName: {
        width: '100%',
    },
    colModified: {
        width: '240px'
    },
    colBuffer: {
        width: '10px'
    },
    tbody: {
        width: '100%'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        boxSizing: 'border-box',
        minWidth: '100%',
        width: '100%',
        userSelect: 'none'
    },
    table: {
        height: '100%',
    }
})

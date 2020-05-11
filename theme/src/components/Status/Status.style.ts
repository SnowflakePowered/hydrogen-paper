import { WithStyles, createStyles, makeStyles } from '@material-ui/core/styles'

export type StyleProps = WithStyles<typeof styles>

export const styles = createStyles({
    statusBarText: {
        userSelect: 'none',
        fontSize: 12,
    },
    container: {
        paddingTop: '2px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export const useStyles = makeStyles(styles)
export default useStyles
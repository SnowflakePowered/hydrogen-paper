import { WithStyles, createStyles } from '@material-ui/core/styles'

export type StyleProps = WithStyles<typeof styles>

export const styles = createStyles({
    buttonContainer: {
        display: 'flex',
        width: 'fit-content'
    },
    buttons: {
        padding: 5
    }
})

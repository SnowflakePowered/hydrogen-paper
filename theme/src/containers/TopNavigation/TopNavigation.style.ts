import { WithStyles, createStyles } from '@material-ui/core/styles'

export type StyleProps = WithStyles<typeof styles>

export const styles = createStyles({
  buttonContainer: {
    display: 'flex',
    width: 'inherit',
    justifyContent: 'space-between'
  },
  right: {

  },
  left: {
    display: 'flex',
    width: 'fit-content'
  },
  button: {
    padding: 5,
  }
})

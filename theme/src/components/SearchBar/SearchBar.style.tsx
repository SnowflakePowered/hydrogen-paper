import { createStyles, WithStyles, makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

export type StyleProps = WithStyles<typeof styles>

export const styles = createStyles({
  barContainer: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '48px auto 10px',
    alignItems: 'center',
    opacity: 1,
    fontFamily: 'Roboto, sans-serif',
    '&:hover, &:focus': {
      opacity: 1
    },
    background: grey[200],
    borderRadius: 3,
  },
  searchIcon: {
    justifySelf: 'center',
    color: grey[700]
  },
  inputField: {
    color: grey[500],
    '&:after': {
      background: 'none'
    }
  }
})

export const useStyles = makeStyles(styles)
export default useStyles
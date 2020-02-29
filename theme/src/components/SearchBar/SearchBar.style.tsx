import { StyleRules, createStyles, WithStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

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
    }
  },
  searchIcon: {
    justifySelf: 'center'
  },
  textFieldUnderline: {
    '&:after': {
      background: 'none'
    }
  }
})


import { createStyles, WithStyles } from '@material-ui/core/styles'

export type StyleProps = WithStyles<typeof styles>

export const styles = createStyles({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    overflowY: 'hidden',
    overflowX: 'hidden',
    // '-webkit-select': 'none',
  },
  card: {
    padding: 10,
    display: 'inline-block'
  },
  autoSizerContainer: {
    height: 'inherit',
    width: 'inherit',
  },
  cellWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    outline: 'none'
  }
})


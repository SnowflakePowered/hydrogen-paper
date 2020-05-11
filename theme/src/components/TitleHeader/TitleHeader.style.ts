import { WithStyles, createStyles, makeStyles } from '@material-ui/core/styles'
import { common, grey } from '@material-ui/core/colors'
export type StyleProps = WithStyles<typeof styles>

export const styles = createStyles({
  headerContainer: {
      height: '72px !important',
      width: '100%'
  },
  subtitleText: {
    fontFamily: '"Roboto"',
    fontSize: '12pt !important',
    letterSpacing: '-0.00833em',
    fontWeight: 500,
    color: grey[500],
    display: 'flex',
    flexDirection: 'row',
    maxHeight: '12pt !important',
    overflowY: 'hidden',
    userSelect: 'none',
  },
  titleText: {
      fontSize: '36pt',
      fontWeight: 600,
      overflowY: 'hidden',
      userSelect: 'none',
  },
  controlComponents: {
      maxHeight: '48px !important',
      height: 48,
      overflowY: 'hidden',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
  }
})

export const useStyles = makeStyles(styles)
export default useStyles
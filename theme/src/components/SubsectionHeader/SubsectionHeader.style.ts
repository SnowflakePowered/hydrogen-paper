import { WithStyles, createStyles, makeStyles } from '@material-ui/core/styles'
export type StyleProps = WithStyles<typeof styles>

export const styles = createStyles({
  headerContainer: {
      height: '48px !important',
      width: '100%'
  },
  titleText: {
      fontSize: '18pt',
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
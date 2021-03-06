import { grey, common } from '@material-ui/core/colors'
import { WithStyles, createStyles, makeStyles } from '@material-ui/core/styles'

export type StyleProps = WithStyles<typeof styles>

export const styles = createStyles({
  button: {
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    padding: 4,
    display: 'inline-flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
    overflow: 'hidden',
    backgroundColor: common.white,
  },
  arrow: {
    color: grey[800],
    height: 16,
    width: 16,
    '$button:hover &': {
      color: common.white,
    },
  },
  buttonContainer: {
    height: 24,
    width: 24,
    display: 'block',
    position: 'relative',
    zIndex: 100
  },
  pulse: {
    '$buttonContainer:hover &': {
      transform: 'scale(1.15)',
    },
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: 'rgba(0,0,0,0.34)',
    zIndex: -1,
    transform: 'scale(1.05)',
    transition: 'transform 0.2s ease'
  },
  progress: {
    color: grey[500],
    position: 'absolute',
    top: -2,
    left: -2,
    zIndex: 10
  },
})

export const useStyles = makeStyles(styles)
export default useStyles
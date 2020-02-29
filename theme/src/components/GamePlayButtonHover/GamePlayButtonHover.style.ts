import { grey, common } from '@material-ui/core/colors'
import { WithStyles, createStyles } from '@material-ui/core/styles'

export type StyleProps = WithStyles<typeof styles>;

export const styles = createStyles({
  hoverContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    background: 'rgba(255,255,255,0.34)',
    zIndex: 1,
    opacity: 0,
    transition: 'opacity 0.2s ease',
    '&:hover': {
      opacity: 1
    }
  },
  playButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 10,
    marginBottom: 10,
    opacity: 0,
    userSelect: 'none',
    transition: 'opacity 0.2s ease',
    zIndex: 100,
    '$hoverContainer:hover &': {
      opacity: 1,
      userSelect: 'auto'
    }
  },
  playLabel: {
    color: common.white
  }
})

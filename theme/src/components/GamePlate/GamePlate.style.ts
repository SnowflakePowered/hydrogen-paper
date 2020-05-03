import { grey } from '@material-ui/core/colors'
import { WithStyles, createStyles } from '@material-ui/core/styles'

export type StyleProps = WithStyles<typeof styles>

export const dimensions = {
  portrait: {
    width: 160,
    height: 200
  },
  landscape: {
    width: 185,
    height: 135
  },
  square: {
    width: 175,
    height: 165
  },
  contentHeight: 84
}

export const styles = createStyles({
  plateContainer: {
    padding: 0,
    boxSizing: 'border-box',
    display: 'inline-flex',
    justifyContent: 'center',
  },
  coverArtImageContainer: {
    position: 'relative', // Keeps the hover container within bounds.
  },
  coverArtImage: {
  },
  centeredContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 5,
    justifyContent: 'center',
    paddingBottom: 5,
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  titleText: {
  },
  titleTextContent: {
    fontSize: 14,
    lineHeight: 1.1,
    paddingTop: 4,
    userSelect: 'none',
  },
  subtitleText: {
  },
  subtitleTextContent: {
    fontSize: 12,
    lineHeight: 1.0,
    color: grey[400],
    userSelect: 'none'
  }
})

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
    transition: 'box-shadow 0.2s ease-in-out', // todo: optimize this css
    '&:hover': {
      boxShadow: `0px 5px 5px -3px rgba(0, 0, 0, 0.2),
                  0px 8px 10px 1px rgba(0, 0, 0, 0.14),
                  0px 3px 14px 2px rgba(0, 0, 0, 0.12)`
    },
  },
  centeredContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 10,
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
    userSelect: 'none',
  }
})

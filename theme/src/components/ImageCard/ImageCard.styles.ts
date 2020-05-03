import { createStyles, WithStyles } from '@material-ui/core';

export type StyleProps = WithStyles<typeof styles>;

export const styles = createStyles({
    imageContainer: {
      borderRadius: 'inherit',
      maxWidth: 'inherit',
      maxHeight: 'inherit',
      display: 'grid'
    },
    image: {
      objectFit: 'contain',
      borderRadius: 'inherit',
      userDrag: 'none',
      userSelect: 'none',
      maxHeight: 'inherit',
      maxWidth: 'inherit',
      transition: 'opacity 0.2s ease-out',
      opacity: 0,
    },
    paperContainer: {
      display: 'block',
      maxWidth: 'fit-content',
    },
    paper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 'inherit',
      maxHeight: 'inherit',
    },
    root: {
      width: 'inherit',
      height: 'inherit',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    padding: {
      width: 'inherit',
      height: 'inherit'
    },
    imageLoaded: {
      opacity: 1
    }
  })
  
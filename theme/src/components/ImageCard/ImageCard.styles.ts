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
      maxWidth: 'inherit'
    },
    paperContainer: {
      display: 'block',
      maxWidth: 'fit-content',
    },
    paper: {
      display: 'inline-block',
      maxWidth: 'inherit',
      maxHeight: 'inherit'
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
    }
  })
  
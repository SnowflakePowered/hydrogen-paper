import { createStyles, WithStyles, makeStyles } from '@material-ui/core/styles'

export type StyleProps = WithStyles<typeof styles>

export const styles = createStyles({
    container: {
      fontFamily: 'Roboto, sans-serif',
      display: 'grid',
      width: '100%',
      gridTemplateColumns: '[main] 60% [control] 40%',
      gridGap: 10,
      height: 60
    },
    description: {
  
    },
    control: {
      justifySelf: 'end',
      width: '-webkit-fill-available',
      marginRight: 20,
      justifyContent: 'flex-end'
    },
    configTitle: {
  
    },
    configDescription: {
      color: 'grey',
      fontSize: '0.75em'
    }
  })
  
export const useStyles = makeStyles(styles)
export default useStyles
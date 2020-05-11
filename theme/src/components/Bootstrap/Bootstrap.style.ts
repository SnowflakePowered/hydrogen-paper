import { WithStyles, createStyles, makeStyles } from '@material-ui/core/styles'

export type StyleProps = WithStyles<typeof styles>

export const styles = createStyles({
  
})

export const useStyles = makeStyles(styles)
export default useStyles
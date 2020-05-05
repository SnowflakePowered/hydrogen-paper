import { WithStyles, createStyles } from '@material-ui/core/styles'

export type StyleProps = WithStyles<typeof styles>

export const styles = createStyles({
  framing: {
      display: 'grid',
      gridTemplateColumns: '1fr 4fr',
      gridTemplateRows: '120px 1fr',
      gridTemplateAreas: '"Sidebar TitleHeader" "Sidebar ViewComponent"',
      height: '100%',
      gap: '0px 8px',
  }
})

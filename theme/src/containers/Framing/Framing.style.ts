import { WithStyles, createStyles } from '@material-ui/core/styles'

export type StyleProps = WithStyles<typeof styles>

export const styles = createStyles({
  framing: {
      display: 'grid',
      gridTemplateColumns: '1fr 4fr',
      gridTemplateRows: '120px 1fr 16px',
      gridTemplateAreas: `"Sidebar TitleHeader" 
                          "Sidebar ViewComponent" 
                          "StatusBar ViewComponent"`,
      height: '100%',
      gap: '0px 8px',
  },
  statusBar: {
    userSelect: 'none',
    fontSize: 12,
    lineHeight: 16
  }
})

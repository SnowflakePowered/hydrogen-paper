import React from 'react'
import { withStyles } from '@material-ui/core'
import { styles, StyleProps } from './Framing.style'
import Sidebar from 'containers/Sidebar/Sidebar'
import TitleHeader from 'components/TitleHeader/TitleHeader'

type ComponentProps = {
 sidebar: React.ReactComponentElement<typeof Sidebar>
 titleHeader: React.ReactComponentElement<typeof TitleHeader>
}

const Bootstrap: React.FunctionComponent<ComponentProps & StyleProps> = ({classes, sidebar, titleHeader, children}) => (
  <div className={classes.framing}>
    <div style={{gridArea: 'Sidebar'}}>
      {sidebar}
    </div>
    <div style={{gridArea: 'TitleHeader'}}>
      {titleHeader}
    </div>
    <div style={{gridArea: 'ViewComponent'}}>
      {children}
    </div>
  </div>
)

export default withStyles(styles)(Bootstrap)

import React from 'react'
import { withStyles, Typography } from '@material-ui/core'
import { styles, StyleProps } from './Framing.style'
import Sidebar from 'containers/Sidebar/Sidebar'
import TitleHeader from 'components/TitleHeader/TitleHeader'
import Status from 'components/Status/Status'

type ComponentProps = {
 sidebar: React.ReactComponentElement<typeof Sidebar>
 titleHeader: React.ReactComponentElement<typeof TitleHeader>
 status?: string,
 spinner?: boolean,
}

const Bootstrap: React.FunctionComponent<ComponentProps & StyleProps> = 
  ({classes, sidebar, titleHeader, children, status, spinner}) => (
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
    <div style={{gridArea: 'StatusBar'}}>
      <Status spinner={spinner} status={status}/>
    </div>
  </div>
)

export default withStyles(styles)(Bootstrap)

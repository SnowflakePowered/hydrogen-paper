import React from 'react'
import useStyles from './Framing.style'
import Sidebar from 'containers/Sidebar/Sidebar'
import TitleHeader from 'components/TitleHeader/TitleHeader'
import Status from 'components/Status/Status'

type FramingProps = {
  sidebar: React.ReactComponentElement<typeof Sidebar>
  titleHeader: React.ReactComponentElement<typeof TitleHeader>
  status?: string,
  spinner?: boolean,
}

const Framing: React.FunctionComponent<FramingProps> =
  ({ sidebar, titleHeader, children, status, spinner }) => {
    const classes = useStyles()
    return (
      <div className={classes.framing}>
        <div style={{ gridArea: 'Sidebar' }}>
          {sidebar}
        </div>
        <div style={{ gridArea: 'TitleHeader' }}>
          {titleHeader}
        </div>
        <div style={{ gridArea: 'ViewComponent' }}>
          {children}
        </div>
        <div style={{ gridArea: 'StatusBar' }}>
          <Status spinner={spinner} status={status} />
        </div>
      </div>
    )
  }

export default Framing

import React from 'react'
import { withStyles, List, ListSubheader, ListItem, ListItemText } from '@material-ui/core'
import { styles, StyleProps } from './Sidebar.style'
import TopNavigation from 'containers/TopNavigation/TopNavigation'

type ComponentProps = {

} & React.ComponentPropsWithoutRef<typeof TopNavigation>

const Sidebar: React.FunctionComponent<ComponentProps & StyleProps> = ({ classes }) => (
  <div className={classes.sidebarContainer}>
    <div className={classes.topNavigationContainer}>
      <TopNavigation className={classes.topNavigation} />
    </div>
    <div className={classes.listContainer}>
      {/* Extract into PlatformsList */}
      <List
        subheader={<ListSubheader className={classes.listSubheader}>Consoles</ListSubheader>}
        className={classes.platformsList}>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
      </List>

      <List
        subheader={<ListSubheader className={classes.listSubheader}>Collections</ListSubheader>}
        className={classes.collectionsList}>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
        <ListItem button dense>
          <ListItemText>
            Hello World
        </ListItemText>
        </ListItem>
      </List>
    </div>
  </div>
)

export default withStyles(styles)(Sidebar)

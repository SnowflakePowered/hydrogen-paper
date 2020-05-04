import React from 'react'
import { withStyles, List, ListSubheader, ListItem, ListItemText } from '@material-ui/core'
import { styles, StyleProps } from './Sidebar.style'
import TopNavigation from 'containers/TopNavigation/TopNavigation'
import AutoSizer from 'react-virtualized-auto-sizer'
type ComponentProps = {
 
} & React.ComponentPropsWithoutRef<typeof TopNavigation>

const Sidebar: React.FunctionComponent<ComponentProps & StyleProps> = ({classes}) => (
  <div className={classes.sidebarContainer}>
    <div className={classes.topNavigationContainer}>
      <TopNavigation className={classes.topNavigation}/>
    </div>
    <div className={classes.listContainer}>
    {/* Extract into PlatformsList */}
    <AutoSizer disableWidth	>
      {({height}) => (
        <div style={{height: height}}>
        <List 
      subheader={<ListSubheader className={classes.listSubheader}>Consoles</ListSubheader>}
      className={classes.platformsList} style={{maxHeight: 0.6 * height, marginBottom: 20}}>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
    </List>
    
    <List 
      subheader={<ListSubheader className={classes.listSubheader}>Collections</ListSubheader>}
      className={classes.collectionsList}  style={{maxHeight: 20 - 0.4 * height}}>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          Hello World
        </ListItemText>
      </ListItem>
    </List>
    </div>
      )}
    </AutoSizer>
    </div>
  </div>
)

export default withStyles(styles)(Sidebar)

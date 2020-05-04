import React from 'react'
import { withStyles, List, ListSubheader, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'
import { styles, StyleProps } from './Sidebar.style'
import TopNavigation from 'containers/TopNavigation/TopNavigation'

export type PlatformId = string
export type CollectionId = string

export type SelectablePlatform = {
  platformId: PlatformId,
  friendlyName: string,
}

export type SelectableCollection = {
  collectionId: CollectionId,
  collectionName: string,
}

type ComponentProps = {
  platforms?: SelectablePlatform[]
  collections?: SelectableCollection[]
  onPlatformSelect?: (platformId: PlatformId) => void
  onCollectionSelect?: (collectionId: CollectionId) => void
  selectedPlatform?: PlatformId,
  selectedCollection?: CollectionId,
} & React.ComponentPropsWithoutRef<typeof TopNavigation>


const Sidebar: React.FunctionComponent<ComponentProps & StyleProps>
  = ({ classes, platforms, collections,
    onPlatformSelect, onCollectionSelect,
    selectedPlatform, selectedCollection,
    onForward, onBackward, onSettings,
  }) => (
      <div className={classes.sidebarContainer}>
        <div className={classes.topNavigationContainer}>
          <TopNavigation className={classes.topNavigation}
            onForward={onForward} onBackward={onBackward}
            onSettings={onSettings} />
        </div>
        <div className={classes.listContainer}>
          {/* Extract into PlatformsList */}
          <List
            subheader={
              <ListSubheader className={classes.listSubheader}>
                Consoles
          {selectedPlatform !== undefined
                  ? <ListItemSecondaryAction>
                      <Button
                        className={classes.button}
                        startIcon={<AddIcon />}
                      >
                        Add Game
                      </Button>
                    </ListItemSecondaryAction>
                  : <></>
                }
              </ListSubheader>}
            className={classes.platformsList}>
            {(platforms ?? []).map(platform =>
              <ListItem button dense
                onClick={e => onPlatformSelect?.(platform.platformId)}
                selected={selectedPlatform === platform.platformId}>
                <ListItemText>
                  {platform.friendlyName}
                </ListItemText>
              </ListItem>)}
          </List>

          <List
            subheader={
              <ListSubheader className={classes.listSubheader}>
                Collections
                <ListItemSecondaryAction>
                  <Button
                        className={classes.button}
                        startIcon={<AddIcon />}
                      >
                        New Collection
                      </Button>
                </ListItemSecondaryAction>
              </ListSubheader>
            }
            className={classes.collectionsList}>
            {(collections ?? []).map(collection =>
              <ListItem button dense
                onClick={e => onCollectionSelect?.(collection.collectionId)}
                selected={selectedCollection === collection.collectionId}>
                <ListItemText>
                  {collection.collectionName}
                </ListItemText>
              </ListItem>)}
          </List>
        </div>
      </div>
    )

export default withStyles(styles)(Sidebar)

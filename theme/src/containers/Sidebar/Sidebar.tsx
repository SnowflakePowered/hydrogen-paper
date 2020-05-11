import React from 'react'
import { List, ListSubheader, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'
import useStyles from './Sidebar.style'
import TopNavigation from 'containers/TopNavigation/TopNavigation'
import clsx from 'clsx'

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
  hideCollection?: boolean,
} & React.ComponentPropsWithoutRef<typeof TopNavigation>


const Sidebar: React.FunctionComponent<ComponentProps>
  = ({ platforms, collections,
    onPlatformSelect, onCollectionSelect,
    selectedPlatform, selectedCollection,
    onForward, onBackward, onSettings,
    hideCollection,
  }) => {
    const classes = useStyles()
    return (
      <div className={classes.sidebarContainer}>
        <div className={classes.topNavigationContainer}>
          <TopNavigation className={classes.topNavigation}
            onForward={onForward} onBackward={onBackward}
            onSettings={onSettings} />
        </div>
        <div className={clsx(classes.listContainer, hideCollection && classes.listContainerNoCollection)}>
          {/* Extract into PlatformsList */}
          <List
            subheader={
              <ListSubheader className={classes.listSubheader}>
                Consoles
          {selectedPlatform !== undefined
                  ? <ListItemSecondaryAction>
                    <IconButton className={classes.button}>
                      <AddIcon />
                    </IconButton>
                    {/* <Button
                        className={classes.button}
                        startIcon={<AddIcon />}
                      >
                        Add Game
                      </Button> */}
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
                  <IconButton className={classes.button}>
                    <AddIcon />
                  </IconButton>
                  {/* <Button
                        className={classes.button}
                        startIcon={<AddIcon />}
                      >
                        New Collection
                      </Button> */}
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
  }

export default Sidebar

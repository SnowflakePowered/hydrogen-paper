import React from 'react'
import memoize from 'memoize-one'

import { withStyles, Checkbox, Typography } from '@material-ui/core'
import { styles, StyleProps } from './InstallableList.style'
import SubsectionHeader from 'components/SubsectionHeader/SubsectionHeader'
import SearchBar from 'components/SearchBar/SearchBar'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList as List } from 'react-window'
import { Folder as FolderIcon, InsertDriveFile as FileIcon } from '@material-ui/icons'
import clsx from 'clsx'
import moment from 'moment'
import VoidEvent from 'support/VoidEvent'

type InstallableListProps = {

}

type InstallableListItemProps = {
  checked: boolean,
  installer: string,
  title: string,
  artifacts: string[],
  onChange?: (checked: boolean) => void
}

const ROW_SIZE = 36;


const InstallableListItem: React.FunctionComponent<InstallableListItemProps & StyleProps> = ({ classes, checked, installer, title, artifacts, onChange }) => {
  const changeHandler = (_: any, checked: boolean) => onChange?.(checked)

  return (
    <div className={classes.item}>
      <div>
        <Typography className={classes.installableTitle}>{title}</Typography>
        <Typography className={classes.installableSubtitle}>Installable with <span className={classes.installerText}>{installer}</span></Typography>
        <Typography className={classes.installableFileLine}>{artifacts?.[0]}</Typography>
      </div>
      <div>
        <Checkbox checked={checked} onChange={changeHandler}/>
      </div>
    </div>
  )
}

const InstallableList: React.FunctionComponent<InstallableListProps & StyleProps> = ({ classes }) => {

  // const itemData = createItemData({ classes, entries, selectedPath, onSelect });

  return (
    <div className={classes.container}>
      <SubsectionHeader title="Installable Games" className={classes.subsectionHeader}>
        <SearchBar />
      </SubsectionHeader>
      <div className={classes.listContainer}>
        <InstallableListItem classes={classes} checked={true} installer="Single File Installer" title="Super Mario World" artifacts={["Super Mario World.nes", "SuperMarioWorld.bfs"]}/>
      </div>
    </div>
  )
}

export default withStyles(styles)(InstallableList)

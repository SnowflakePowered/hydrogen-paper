import React, { useState, useEffect } from 'react'
import memoize from 'memoize-one'

import { withStyles, Checkbox, Typography, Button, ListItem } from '@material-ui/core'
import { styles, StyleProps } from './InstallableList.style'
import SubsectionHeader from 'components/SubsectionHeader/SubsectionHeader'
import SearchBar from 'components/SearchBar/SearchBar'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList as List } from 'react-window'
import { GetApp as DownloadIcon } from '@material-ui/icons'
import clsx from 'clsx'
import moment from 'moment'
import VoidEvent from 'support/VoidEvent'

type InstallableListProps = {
  entries?: InstallableEntry[],
  onEntriesInstall?: VoidEvent<InstallableEntry[]>
}

type InstallableListItemProps = {
  checked: boolean,
  installer: string,
  title: string,
  artifacts: string[],
  onChange?: (checked: boolean) => void
}

const ROW_SIZE = 80;

const InstallableListItem: React.FunctionComponent<InstallableListItemProps & StyleProps> = ({ classes, checked, installer, title, artifacts, onChange }) => {
  const changeHandler = (_: any, checked: boolean) => onChange?.(checked)

  return (
    <ListItem button className={classes.item} onClick={() => changeHandler(undefined, !checked)}>
      <div>
        <Typography className={classes.installableTitle}>{title}</Typography>
        <Typography className={classes.installableSubtitle}>Installable with <span className={classes.installerText}>{installer}</span></Typography>
        <Typography className={classes.installableFileLine}>{artifacts?.[0]}</Typography>
      </div>
      <div>
        <Checkbox checked={checked} onChange={changeHandler}/>
      </div>
    </ListItem>
  )
}

export type InstallableEntry = {
  installer: string,
  title: string,
  artifacts: string[],
}

export type InstallableListItemData = {
  classes: StyleProps["classes"],
  entries: InstallableEntry[],
  checked: { [index: number]: boolean },
  onChecked: (index: number, state: boolean) => void,
}

const createItemData = memoize(({ classes, entries, checked, onChecked }: InstallableListItemData) => ({
  classes,
  entries,
  checked,
  onChecked,
}));

const Row = ({ index, style, data }: { index: number, style: React.CSSProperties, data: InstallableListItemData }) => {
  const { classes, entries, checked, onChecked } = data;
  const item = entries[index]
  return (
    <div style={style}>
      <InstallableListItem 
        classes={classes} 
        checked={!!checked[index]} 
        onChange={check => onChecked(index, check)}
        installer={item.installer}
        title={item.title}
        artifacts={item.artifacts}/>
    </div>
  )
}

const InstallableList: React.FunctionComponent<InstallableListProps & StyleProps> = ({ classes, entries, onEntriesInstall }) => {
  const [ checked, setChecked ] = useState<{[index: number]: boolean}>({})
  const checkedHandler = (index: number, check: boolean) => setChecked({...checked, [index]: check}) 
  const itemData = createItemData({ classes, entries: entries ?? [], onChecked: checkedHandler, checked});
  
  const installHandler = () => onEntriesInstall?.(Object.entries(checked).flatMap((value) => {
    if (!value[1]) return []
    const index = Number.parseInt(value[0], 10)
    return entries ? [entries[index]] : []
  }))
  
  useEffect(() => {
    setChecked({})
  }, [entries])

  return (
    <div className={classes.container}>
      <SubsectionHeader title="Installable Games" className={classes.subsectionHeader}>
        <SearchBar />
      </SubsectionHeader>
      <div className={classes.buttonContainer}>
        <Button onClick={installHandler} startIcon={<DownloadIcon/>}>Install Selected</Button>
      </div>
      <div className={classes.listContainer}>
        <AutoSizer>
              {({ height, width }) => (
                <List
                  height={height}
                  width={width}
                  itemCount={entries?.length ?? 0}
                  itemSize={ROW_SIZE}
                  itemData={itemData}
                >
                  {Row}
                </List>
              )}
            </AutoSizer>
      </div>
    </div>
  )
}

export default withStyles(styles)(InstallableList)

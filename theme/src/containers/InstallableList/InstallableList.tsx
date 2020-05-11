import React, { useState, useEffect } from 'react'
import { useDebounce } from '@react-hook/debounce'
import memoize from 'memoize-one'

import { withStyles, Checkbox, Typography, Button, ListItem } from '@material-ui/core'
import useStyles, { StyleProps } from './InstallableList.style'
import SubsectionHeader from 'components/SubsectionHeader/SubsectionHeader'
import SearchBar from 'components/SearchBar/SearchBar'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList as List } from 'react-window'
import { GetApp as DownloadIcon } from '@material-ui/icons'
import clsx from 'clsx'
import moment from 'moment'
import VoidEvent from 'support/VoidEvent'
import { SearchBarEvent } from 'support/ComponentEvents/SearchBarEvent'
import produce from 'immer'

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
  checked: Map<InstallableEntry, boolean>,
  onChecked: (index: InstallableEntry, state: boolean) => void,
  searchQuery: string,
}

const createItemData = memoize(({ classes, entries, checked, onChecked, searchQuery }: InstallableListItemData) => ({
  classes,
  entries,
  checked,
  onChecked,
  searchQuery,
}));

const showInSearch = (title: string | undefined, searchQuery: string) => !!(searchQuery === "" || title?.toUpperCase().includes(searchQuery?.toUpperCase()))

const Row = ({ index, style, data }: { index: number, style: React.CSSProperties, data: InstallableListItemData }) => {
  const { classes, entries, checked, onChecked } = data;
  const item = entries[index]
  return (
    <div style={style}>
      <InstallableListItem 
        classes={classes} 
        checked={!!checked.get(item) ?? false} 
        onChange={check => onChecked(item, check)}
        installer={item.installer}
        title={item.title}
        artifacts={item.artifacts}/>
    </div>
  )
}

const getCheckedEntries = (checked: Map<InstallableEntry, boolean>) => {
  const checkedEntries = []
  for (const [installable, check] of checked.entries()) {
    if (check) checkedEntries.push(installable)
  }
  return checkedEntries
}

const InstallableList: React.FunctionComponent<InstallableListProps> = ({ entries, onEntriesInstall }) => {
  const classes = useStyles()
  const [ checked, setChecked ] = useState<Map<InstallableEntry, boolean>>(new Map())
  const [ searchQuery, setSearchQuery ] = useDebounce<string>("", 500)
  const filteredEntries: InstallableEntry[] = entries?.filter((value) => showInSearch(value.title, searchQuery)) ?? []
  const searchHandler = (event: SearchBarEvent) => setSearchQuery(event.searchQuery)
  const checkedHandler = (item: InstallableEntry, check: boolean) => setChecked(produce(checked, next => next.set(item, check))) 
  const itemData = createItemData({ classes, entries: filteredEntries, onChecked: checkedHandler, checked, searchQuery });
  
  const installHandler = () => onEntriesInstall?.(getCheckedEntries(checked))
  
  useEffect(() => {
    setChecked(produce(checked, next => next.clear()))
  }, [entries])

  return (
    <div className={classes.container}>
      <SubsectionHeader title="Installable Games" className={classes.subsectionHeader}>
        <SearchBar onSearch={searchHandler}/>
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
                  itemCount={filteredEntries.length}
                  itemSize={ROW_SIZE}
                  itemData={itemData}
                  overscanCount={6}
                >
                  {Row}
                </List>
              )}
            </AutoSizer>
      </div>
    </div>
  )
}

export default InstallableList

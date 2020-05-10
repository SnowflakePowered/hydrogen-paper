import React from 'react'
import memoize from 'memoize-one'

import { withStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { styles, StyleProps } from './FileBrowser.style'
import SubsectionHeader from 'components/SubsectionHeader/SubsectionHeader'
import SearchBar from 'components/SearchBar/SearchBar'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList as List } from 'react-window'
import { Folder as FolderIcon, InsertDriveFile as FileIcon } from '@material-ui/icons'
import clsx from 'clsx'
import moment from 'moment'
import VoidEvent from 'support/VoidEvent'
type FileBrowserProps = {
  entries: FileBrowserEntry[],
  selectedPath?: string,
  onSelect?: VoidEvent<FileBrowserEntry>
}

export enum FileBrowserIconType {
  DIRECTORY = "directory",
  FILE = "file"
}

export type FileBrowserEntry = {
  name: string,
  icon: FileBrowserIconType,
  modified?: Date,
  fullPath: string,
}

type FileBrowserItemData = {
  classes: StyleProps["classes"],
  entries: FileBrowserProps["entries"],
  selectedPath: FileBrowserProps["selectedPath"],
  onSelect: FileBrowserProps["onSelect"]
}

const ROW_SIZE = 36;

const Row = ({ index, style, data }) => {
  const { classes, entries, selectedPath, onSelect } = (data as FileBrowserItemData)
  const item = entries[index]
  const selectHandler = (_) => onSelect?.(item)
  return (
    <TableRow hover={true} selected={selectedPath == item.fullPath}
      component="div" className={classes.row} style={style}
      onClick={selectHandler}>
      <TableCell
        align="left"
        className={classes.colIcon}
        key={`${index}_${item.name}_icon`}
        component="div"
        variant="body"
      >
        {item.icon === FileBrowserIconType.DIRECTORY ?
          <FolderIcon fontSize="inherit" style={{ transform: 'scale(1.2)' }} />
          : <FileIcon fontSize="inherit" style={{ transform: 'scale(1.2)' }} />}
      </TableCell>
      <TableCell
        align="left"
        className={classes.colName}
        key={`${index}_${item.name}_name`}
        component="div"
        variant="body"
      >
        {item.name}
      </TableCell>
      <TableCell
        align="left"
        className={classes.colModified}
        key={`${index}_${item.name}_modified`}
        component="div"
        variant="body"
      >
        {moment(item.modified).fromNow()}
      </TableCell>
    </TableRow>
  );
};

const createItemData = memoize(({ classes, entries, selectedPath, onSelect }: FileBrowserItemData) => ({
  classes,
  entries,
  selectedPath,
  onSelect
}));

const FileBrowser: React.FunctionComponent<FileBrowserProps & StyleProps> = ({ classes, entries, selectedPath, onSelect }) => {

  const itemData = createItemData({ classes, entries, selectedPath, onSelect });

  return (
    <div className={classes.container}>
      <SubsectionHeader title="File Browser" className={classes.subsectionHeader}>
        <SearchBar />
      </SubsectionHeader>
      <div className={classes.tableContainer}>
        <Table size="small" component="div" className={classes.table}>
          <TableHead component="div">
            <TableRow component="div" className={classes.row}>
              <TableCell component="div" align="left" className={classes.colIcon}>
                <FolderIcon fontSize="inherit" style={{ opacity: 0 }} /></TableCell>
              <TableCell component="div" align="left" className={classes.colName}>Name</TableCell>
              <TableCell component="div" align="left" style={{marginRight: '10px'}}className={classes.colModified}>Last Modified</TableCell>
            </TableRow>
          </TableHead>
          <TableBody component="div" className={classes.tbody}>
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
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default withStyles(styles)(FileBrowser)

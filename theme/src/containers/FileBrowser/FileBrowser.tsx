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

type FileBrowserProps = {
  entries: FileBrowserEntry[],
  selectedPath?: string
}

enum FileBrowserIconType {
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
  selectedPath: FileBrowserProps["selectedPath"] 
}

const ROW_SIZE = 36;

const Row = ({ index, style, data }) => {
  const { classes, entries, selectedPath } = (data as FileBrowserItemData)
  const item = entries[index]
  return (
    <TableRow hover={true} selected={} component="div" className={classes.row} style={style}>
      <TableCell
        align="left" 
        className={classes.colIcon}
        key={`${index}_${item.name}_icon`}
        component="div"
        variant="body"
      >
        {item.icon === FileBrowserIconType.DIRECTORY ? 
          <FolderIcon fontSize="inherit" style={{transform: 'scale(1.2)'}}/> 
          : <FileIcon fontSize="inherit" style={{transform: 'scale(1.2)'}}/>}
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
        {item.name}
      </TableCell>
    </TableRow>
  );
};

const createItemData = memoize(({ classes, entries, selectedPath }: FileBrowserItemData) => ({
  classes,
  entries,
  selectedPath
}));

const FileBrowser: React.FunctionComponent<FileBrowserProps & StyleProps> = ({ classes, entries, selectedPath }) => {

  const itemData = createItemData({classes, entries, selectedPath});

  return (
    <div className={classes.container}>
      <SubsectionHeader title="File Browser" className={classes.subsectionHeader}>
        <SearchBar />
      </SubsectionHeader>
      <div className={classes.tableContainer}>
        <Table size="small" component="div" className={classes.table}>
          <TableHead component="div">
            <TableRow component="div" className={classes.row}>
              <TableCell align="left" className={classes.colIcon}>
                <FolderIcon fontSize="inherit" style={{opacity: 0}}/></TableCell>
              <TableCell align="left" className={classes.colName}>Name</TableCell>
              <TableCell align="left" className={classes.colModified}>Last Modified</TableCell>
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

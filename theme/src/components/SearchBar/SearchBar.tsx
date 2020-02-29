import React from 'react'
import { Paper, FormControl, Input, withStyles } from '@material-ui/core'

import { Search as SearchIcon } from '@material-ui/icons'

import { styles, StyleProps } from './SearchBar.style'
import { SearchBarEvent } from 'support/ComponentEvents/SearchBarEvent'

type SearchBarProps = {
  tagline?: string,
  onSearch?: (e: SearchBarEvent) => void
}

const SearchBar: React.SFC<SearchBarProps & StyleProps> = ({ classes, tagline, onSearch }) => (
  <Paper className={classes.barContainer}>
    <SearchIcon 
      className={classes.searchIcon}
    />
    <FormControl>
      <Input
          placeholder={'Search ' + (tagline || '')}
          className={classes.textFieldUnderline}
          onChange={(e) => onSearch!({searchQuery: e.target.value})}
      />
    </FormControl>
  </Paper>
)

export default withStyles(styles)(SearchBar)

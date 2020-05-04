import React from 'react'
import { FormControl, InputBase, withStyles } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'

import { styles, StyleProps } from './SearchBar.style'
import { SearchBarEvent } from 'support/ComponentEvents/SearchBarEvent'

type SearchBarEventHandler = (e: SearchBarEvent) => void
type ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
type SearchBarProps = {
  tagline?: string,
  onSearch?: SearchBarEventHandler
}

const handleSearch: (eventHandler?: SearchBarEventHandler) => ChangeEventHandler = 
  (eventHandler) => (event) => { eventHandler && eventHandler({searchQuery: event.target.value}) }

const SearchBar: React.SFC<SearchBarProps & StyleProps> = ({ classes, tagline, onSearch }) => (
  <div className={classes.barContainer}>
    <SearchIcon 
      className={classes.searchIcon}
    />
    <FormControl>
      <InputBase
          inputProps={{ 'aria-label': 'search' }}
          placeholder={tagline ?? 'Search ...'}
          className={classes.inputField}
          onChange={handleSearch(onSearch)}
      />
    </FormControl>
  </div>
)

export default withStyles(styles)(SearchBar)

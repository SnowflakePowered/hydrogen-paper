import React from 'react'
import { FormControl, InputBase } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'

import useStyles from './SearchBar.style'
import { SearchBarEvent } from 'support/ComponentEvents/SearchBarEvent'

type SearchBarEventHandler = (e: SearchBarEvent) => void
type ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
type SearchBarProps = {
  tagline?: string,
  onSearch?: SearchBarEventHandler
}

const handleSearch: (eventHandler?: SearchBarEventHandler) => ChangeEventHandler =
  (eventHandler) => (event) => { eventHandler?.({ searchQuery: event.target.value }) }

const SearchBar: React.SFC<SearchBarProps> = ({ tagline, onSearch }) => {
  const classes = useStyles()
  return (
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
}

export default SearchBar

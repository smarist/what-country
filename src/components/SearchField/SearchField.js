import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import useStyles from './SearchField.style';

function SearchField({ value, onChange }) {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        value={value}
        onChange={onChange}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
}

export default SearchField;

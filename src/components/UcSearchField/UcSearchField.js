import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import useStyles from './UcSearchField.style';

function UcSearchField() {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
}

export default UcSearchField;

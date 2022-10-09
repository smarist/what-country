import { CircularProgress, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete } from '@material-ui/lab';
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import useStyles from './SearchField.style';

function SearchField({
  value,
  onChange,
  onClose,
  options,
  onSelectOption,
  className,
  iconComponent,
  searchIconColor,
  placeholder,
  notControlled,
  style,
  showLoading = false,
  showOptions,
  labelStyle,
  noBorder,
  createNewText,
  customRender,
}) {
  const [open, setOpen] = useState(showOptions ? undefined : false);
  const [results, setresults] = useState([]);
  const classes = useStyles({ labelStyle, noBorder });

  const loading = useMemo(
    () => showLoading && open && results.length === 0,
    [showLoading, open, results?.length],
  );

  const handleFilterOptions = useCallback((filterOptions, params) => {
    const filtered = filterOptions.filter(
      item =>
        item?.name
          ?.toLowerCase()
          ?.trim?.()
          ?.indexOf?.(params.inputValue?.trim?.()?.toLowerCase()) !== -1,
    );
    if (filtered.length === 0 && params.inputValue.length !== 0 && !customRender) {
      filtered.push({
        name: `${createNewText || 'Create'} "${params.inputValue}" `,
      });
    }
    return filtered;
  }, []);

  const handleRenderOption = option => (customRender ? (
    customRender(option)
  ) : (
    <span className={classes.autoCompleteOptionItem}>{option.name}</span>
  ));

  useEffect(() => {
    if (!open) setresults([]);
  }, [open]);

  return (
    <Autocomplete
      data-testid="search-text-field"
      open={open}
      onChange={onSelectOption}
      onClose={onClose || (() => setOpen(false))}
      getOptionSelected={(option, selectedValue) => option?.name === selectedValue?.name}
      getOptionLabel={option => option.name || ''}
      options={options || []}
      className={`${classes.autoComplete} ${className}`}
      value={value}
      popupIcon={
        iconComponent || (
          <SearchIcon
            className={classes.searchIcon}
            style={{ color: searchIconColor || undefined }}
          />
        )
      }
      filterOptions={handleFilterOptions}
      renderOption={handleRenderOption}
      renderInput={params => (
        <TextField
          {...params}
          onChange={onChange}
          label={placeholder || ''}
          variant="outlined"
          style={{ borderRadius: 3, ...style }}
          inputProps={{
            ...params.inputProps,
            value: !notControlled ? value || params.inputProps.value : undefined,
          }}
          value={!notControlled ? value || params.inputProps.value : undefined}
          // eslint-disable-next-line
          InputProps={{
            ...params.InputProps,
            className: classes.textField,
            endAdornment: (
              <>
                {loading && <CircularProgress color="inherit" size={20} />}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}

export default SearchField;

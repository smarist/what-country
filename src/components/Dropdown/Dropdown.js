import {
  ButtonBase,
  FormControl, InputLabel, MenuItem, Select,
} from '@material-ui/core';
import React from 'react';
import useStyles from './Dropdown.style';

function Dropdown({
  label,
  onSelect,
  value,
  options,
  variant,
  styles,
  defaultValue,
  className,
}) {
  const classes = useStyles();
  return (
    <FormControl
      fullWidth
      variant={variant || 'outlined'}
      className={classes.formControl}
      style={styles}
      data-testid="dropdown"
    >
      {label && (
      <InputLabel
        id="demo-customized-select-label"
        className={classes.label}
      >
        {label}
      </InputLabel>
      ) }
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={value}
        defaultValue={defaultValue}
        className={[className, classes.input].join(' ')}
        onChange={e => {
          onSelect(e.target.value);
        }}
        // input={<BootstrapInput />}
      >
        {options?.map((option, index) => (
          <MenuItem
            selected={index === 0 ? true : undefined}
            className={classes.dropDownValue}
            value={option?.value}
            key={`menu-item${index}`}
          >
            <ButtonBase
              disableRipple
              className={classes.rippleButton}
              style={{
                ...option.itemStyle,
              }}
              onClick={() => option.onClick?.(option)}
            >
              {option?.name}
            </ButtonBase>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Dropdown;

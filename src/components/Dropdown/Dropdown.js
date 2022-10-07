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
}) {
  const classes = useStyles();
  return (
    <FormControl
      fullWidth
      variant={variant || 'outlined'}
      className={classes.formControl}
      style={styles}
    >
      {label && <InputLabel id="demo-customized-select-label">{label}</InputLabel> }
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={value}
        onChange={e => {
          onSelect(e.target.value);
        }}
        // input={<BootstrapInput />}
      >
        {options.map((option, index) => (
          <MenuItem
            selected={index === 0 ? true : undefined}
            className={classes.optionsMenuItem}
            value={option.value}
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
              {option.name}
            </ButtonBase>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Dropdown;

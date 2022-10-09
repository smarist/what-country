import { Box, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './Header.style';
import useHeader from './hooks/useHeader';

export default function Header() {
  const classes = useStyles();
  const {
    onToggleTheme,
    modeIcon,
    modeText,
  } = useHeader();

  return (
    <Box
      className={classes.headerBox}
      data-testid="header"
    >
      <Typography className={classes.headerH1}>Where in the world?</Typography>
      <Box className={classes.switchBox} onClick={() => onToggleTheme()}>
        <Box className={classes.switchIcon}>
          {modeIcon}
        </Box>
        <Box>
          {modeText}
        </Box>
      </Box>
    </Box>
  );
}

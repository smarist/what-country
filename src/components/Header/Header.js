import { Box, Typography } from '@material-ui/core';
import React from 'react';
// import { useDispatch } from 'react-redux';
import useStyles from './Header.style';
// import setAppTheme from '../../redux/actions/appAction';
// import { ReactComponent as Sun } from '../../resources/light mode-icon.svg';
// import { ReactComponent as Moon } from '../../resources/dark mode-icon.svg';
import useHeader from './hooks/useHeader';

export default function Header({
  appTheme,
}) {
  // const dispatch = useDispatch();
  const classes = useStyles();
  const {
    onToggleTheme,
    modeIcon,
    modeText,
  } = useHeader();
  //   const onToggleTheme = () => {
  //     setAppTheme()(dispatch);
  //     console.log('hey you');
  //   };
  //   const modeIcon = useMemo(() => {
  //     if (appTheme === 'light') {
  //       return <Sun />;
  //     } return <Moon />;
  //   }, [appTheme]);

  //   const modeText = useMemo(() => {
  //     if (appTheme === 'light') {
  //       return 'LightMode';
  //     } return 'DarkMode';
  //   }, [appTheme]);

  console.log(appTheme);
  return (
    <Box
      className={classes.headerBox}
    >
      <Typography>Where in the world?</Typography>
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

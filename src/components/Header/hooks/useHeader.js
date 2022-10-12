import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAppTheme } from '../../../redux/actions/appAction';
import { ReactComponent as Sun } from '../../../Resources/light-mode-icon.svg';
import { ReactComponent as Moon } from '../../../Resources/dark-mode-icon.svg';
import useStyles from '../Header.style';

function useHeader() {
  const appTheme = useSelector((state) => state?.app?.appTheme);
  const classes = useStyles();
  const dispatch = useDispatch();
  const onToggleTheme = () => {
    setAppTheme()(dispatch);
  };
  const modeIcon = useMemo(() => {
    if (appTheme === 'light') {
      return <Sun />;
    } return <Moon className={classes.moonIcon} />;
  }, [appTheme]);

  const modeText = useMemo(() => {
    if (appTheme === 'light') {
      return 'LightMode';
    } return 'DarkMode';
  }, [appTheme]);
  return {
    onToggleTheme,
    modeIcon,
    modeText,
  };
}

export default useHeader;

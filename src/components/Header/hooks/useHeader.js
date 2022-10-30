import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setAppTheme } from '../../../redux/actions/appAction';

function useHeader() {
  const appTheme = useSelector((state) => state?.app?.appTheme);
  const dispatch = useDispatch();
  const onToggleTheme = () => {
    setAppTheme()(dispatch);
  };
  const modeIcon = useMemo(() => {
    if (appTheme === 'light') {
      return <FontAwesomeIcon icon={faSun} />;
    } return <FontAwesomeIcon icon={faMoon} />;
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

import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { darkTheme, theme } from './utils/theme';
import countryService from './Services/country.services';
import { setCountryList } from './redux/actions/countryAction';
import { setIsLoading } from './redux/actions/appAction';
import Routes from './Routes/PageRoutes';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    countryService.getCountryList()
      .then((res) => {
        setCountryList(res)(dispatch);
        setIsLoading(false)(dispatch);
      })
      .catch(() => {});
  }, []); // eslint-disable-line
  const appTheme = useSelector((state) => state?.app?.appTheme);
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={appTheme === 'light' ? theme : darkTheme}>
        <Routes />
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;

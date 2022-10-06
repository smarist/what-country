import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { darkTheme, theme } from './utils/theme';
import Home from './pages/Home';
import countryService from './Services/country.services';
import { setCountryList } from './redux/actions/countryAction';
import { setIsLoading } from './redux/actions/appAction';

function App() {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.country.countryList);
  const isLoading = useSelector((state) => state.app.isLoading);
  console.log(countryList);
  console.log(isLoading);
  useEffect(() => {
    countryService.getCountryList()
      .then((res) => {
        setCountryList(res)(dispatch);
        setIsLoading(false)(dispatch);
        console.log(res);
      })
      .catch(() => {});
  }, []); // eslint-disable-line
  const appTheme = useSelector((state) => state?.app?.appTheme);
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={appTheme === 'light' ? theme : darkTheme}>
        <Home />
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;

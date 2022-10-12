import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { darkTheme, theme } from './utils/theme';
import Routes from './Routes/PageRoutes';

function App() {
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

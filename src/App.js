import './App.css';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { darkTheme, theme } from './utils/theme';
import Home from './pages/Home';

function App() {
  const appTheme = useSelector((state) => state?.app?.appTheme);
  console.log(appTheme);
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={appTheme === 'light' ? theme : darkTheme}>
        <Home />
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;

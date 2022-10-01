import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { darkTheme, theme } from './utils/theme';

function App() {
  // const appTheme = useSelector((state) => state.app.appTheme);
  // console.log(useSelector((state) => state.app));
  const appTheme = 'light';

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={appTheme === 'light' ? theme : darkTheme}>
        <div>
          Hello you
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;

import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    textColor: { main: '#000' },
  },
});

const darkTheme = createTheme({
  palette: {
    textColor: { main: '#FFF' },
  },
});

export { theme, darkTheme };

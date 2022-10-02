import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  palette: {
    bgColor: { main: '#FAFAFA' },
    bgColor2: { main: '#FFFFFF' },
    textColor: { main: '#000' },
    textColor2: { main: '#303C47' },
    textColor3: { main: '#2F3C47' },
    borderColor: { main: ' #FFFFFF' },
    boxShadow: { main: '0 3px 10px rgb(0 0 0 / 0.2)' },
  },
});

export const darkTheme = createTheme({
  palette: {
    bgColor: { main: '#212E37' },
    bgColor2: { main: '#2B3743' },
    textColor: { main: '#FFF' },
    textColor2: { main: '#707070' },
    textColor3: { main: '#E8F1FF' },
    borderColor: { main: '#000' },
    boxShadow: { main: '0 3px 10px rgb(0 0 0 / 0.2)' },
  },
});

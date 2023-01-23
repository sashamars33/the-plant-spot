import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#25371f',
      light: '#a1b18e',
      dark: '#152f18',
      contrastText: '#bf9ea0',
    },
    secondary: {
      main: '#bf3721',
      light: '#e4bbb4',
      dark: '#46170f',
      contrastText: '#f1f8e9',
    },
    error: {
      main: '#d50000',
    },
    info: {
      main: '#b2ff59',
    },
    success: {
      main: '#4caf87',
    },
    background: {
      default: '#eeeeee',
      paper: '#c0c7b7',
    },
    text: {
      primary: '#1f3f12',
      secondary: 'rgba(51,105,30,0.55)',
      disabled: 'rgba(51,105,30,0.35)',
      hint: 'rgba(220,237,200,0.5)',
    },
    warning: {
      main: '#ff6d00',
    },
    divider: 'rgba(62,39,35,0.26)',
  },
});
'use client'
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f68529',
    },
    secondary: {
      main: '#383939',
    },
    error: {
      main: "#EB2345",
    },
    warning: {
      main: "#F46A01",
    },
    info: {
      main: "#013CE0",
    },
    success: {
      main: "#85D642",
    },
    background: {
      default: '#ffff',
      paper: '#F3F3F3',
    },
  },
});

export default lightTheme;

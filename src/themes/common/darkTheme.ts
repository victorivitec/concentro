'use client'
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F4BD30',
    },
    secondary: {
      main: '#000',
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
      default: '#242F2F',
      paper: '#4A5858',
    },
  },
});

export default darkTheme;

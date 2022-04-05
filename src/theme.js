import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    white: {
      main: '#fffff',
    },
    dark: {
      main: '#2c3e50',
    },
    error: {
      main: red.A400,
    },
  },
  // a: {
  //   color: '#19857b',
  //   textDecoration: 'none',
  //   '&:hover': {
  //     color: 'red'
  //   }
  // }
});

export default theme;

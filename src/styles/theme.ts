import { createTheme } from '@mui/system';

export const lightTheme = createTheme({
  palette: {
    text: {
      primary: '#565656',
    },
    background: 'white',
  },
});

export const darkTheme = createTheme({
  palette: {
    text: { primary: 'white' },
    background: '#333333',
  },
});

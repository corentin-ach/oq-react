import { createTheme } from '@mui/system';

export const lightTheme = createTheme({
  palette: {
    text: {
      primary: 'grey',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    text: { primary: 'white' },
  },
});

/* eslint-disable no-unused-vars */
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const lightTheme = createTheme({
  palette: {
    text: {
      primary: '#565656',
    },
  },
  shape: {
    borderRadius: 5,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: { primary: 'white' },
  },
  shape: {
    borderRadius: 10,
  },
});

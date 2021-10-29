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
    primary: {
      main: '#5DADEC',
    },
    background: {
      default: '#F9F9F9',
      paper: '#FFFFFF',
    },
  },
  shape: {
    borderRadius: 5,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: { primary: '#FFFFFF' },
    primary: {
      main: '#5DADEC',
    },
    background: {
      default: '#3B3B3B',
      paper: '#626262',
    },
  },
  shape: {
    borderRadius: 5,
  },
});

export const lightMap = 'ckuvkg7qn260718qpfel4clh8';
export const darkMap = 'ckv71ygqg861e14l9rkusoxlc';

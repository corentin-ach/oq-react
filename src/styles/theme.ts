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
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h6' },
          style: {
            color: '#565656',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'left',
          },
        },
      ],
    },
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
      paper: '#4A4A4A',
    },
  },
  shape: {
    borderRadius: 5,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h6' },
          style: {
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'left',
          },
        },
      ],
    },
  },
});

export const lightMap = 'mapbox://styles/corentin29/ckw9knz2x404s14pa0wiytqju';
export const darkMap = 'mapbox://styles/corentin29/cl0clojqn000r14jrnfir6eg0';

export const colors = {
  goodQuality: '#65DEAB',
  badQuality: '#F38732',
};

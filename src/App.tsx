import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/system';
import {
  AppBar, Toolbar, Box, Grid,
} from '@mui/material';
import { useSelector } from 'react-redux';
import MapView from './views/map.view';
import { lightTheme, darkTheme } from './styles/theme';
import './locales/i18n';
import { RootState } from './app/store';
import LocationButton from './components/buttons.component/locationButton.button';
import ThemeButton from './components/buttons.component/themeButton.button';
import HeaderIcon from './assets/header';
import Icon from './assets/icon';

function App() {
  const theme = useSelector((state: RootState) => state.theme.dark);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <div className="App">
        <AppBar position="fixed">
          <Box sx={{ flexGrow: 1 }}>
            <Toolbar sx={{ bgcolor: 'background.default' }}>
              <Grid container alignItems="center">
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={1}
                />
                <Grid
                  item
                  xs={2}
                  sm={6}
                  md={10}
                  sx={{
                    display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                  }}

                >
                  <Icon />
                  <HeaderIcon isDark={!!theme} />
                </Grid>
                <Grid
                  item
                  xs={2}
                  sm={2}
                  md={1}
                  sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}
                >
                  <LocationButton />
                  <ThemeButton isDark={!!theme} />
                </Grid>
              </Grid>
            </Toolbar>
          </Box>
        </AppBar>
        <MapView isDark={theme} />
      </div>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/system';
import {
  AppBar, Toolbar, Box,
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
              <Box sx={{
                display: 'flex', justifyContent: 'end', flexGrow: 1.4, alignItems: 'center',
              }}
              >
                <Icon />
                <HeaderIcon isDark={!!theme} />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'end', flexGrow: 1 }}>
                <LocationButton />
                <ThemeButton isDark={!!theme} />
              </Box>
            </Toolbar>
          </Box>
        </AppBar>
        <MapView isDark={theme} />
      </div>
    </ThemeProvider>
  );
}

export default App;

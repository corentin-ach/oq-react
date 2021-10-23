import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/system';
import MapView from './views/mapView';
import { lightTheme } from './styles/theme';
import './locales/i18n';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <MapView />
      </div>
    </ThemeProvider>
  );
}

export default App;

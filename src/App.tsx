import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/system';
import { useSelector } from 'react-redux';
import MapView from './views/map.view';
import { lightTheme, darkTheme } from './styles/theme';
import './locales/i18n';
import { RootState } from './app/store';
import Header from './components/header.component';

function App() {
  const theme = useSelector((state: RootState) => state.theme.dark);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <div className="App">
        <Header theme={theme} />
        <MapView isDark={theme} />
      </div>
    </ThemeProvider>
  );
}

export default App;

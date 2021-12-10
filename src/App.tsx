import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from '@mui/system';
import { useSelector } from 'react-redux';
import MapView from './views/map.view';
import { lightTheme, darkTheme } from './styles/theme';
import './locales/i18n';
import { RootState } from './app/store';
import Header from './components/header.component';
import ContentView from './views/content.view';

function App() {
  const theme = useSelector((state: RootState) => state.theme.dark);
  const [contentView, setContentView] = useState(false);
  const { spots, loading } = useSelector((state: RootState) => state.spots);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Header theme={theme} onMainButton={() => setContentView(true)} />
      <MapView
        isDark={theme}
        onIntroClick={() => setContentView(true)}
        spots={spots}
        loading={loading}
      />
      <ContentView isOpen={contentView} onClose={() => setContentView(false)} spots={spots} />
    </ThemeProvider>
  );
}

export default App;

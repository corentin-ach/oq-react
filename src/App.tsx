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
  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Header theme={theme} onMainButton={() => { setContentView(true); setValue('2'); }} />
      <MapView
        isDark={theme}
        onIntroClick={() => { setContentView(true); setValue('1'); }}
        spots={spots}
        loading={loading}
      />
      <ContentView
        isOpen={contentView}
        onClose={() => setContentView(false)}
        spots={spots}
        value={value}
        handleChange={handleChange}
      />
    </ThemeProvider>
  );
}

export default App;

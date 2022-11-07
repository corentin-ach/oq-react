/* eslint-disable import/no-webpack-loader-syntax */
import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import MapView from './views/map.view';
import { lightTheme, darkTheme } from './styles/theme';
import './locales/i18n';
import { RootState } from './app/store';
import Header from './components/header.component';
import ContentView from './views/content.view';
import MobileView from './views/mobile.view';
// @ts-ignore
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

function App() {
  const theme = useSelector((state: RootState) => state.theme.dark);
  const [contentView, setContentView] = useState(false);
  const { spots, loading } = useSelector((state: RootState) => state.spots);
  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleWindowResize = () => setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  const breakPoint = {
    width: 900,
    height: 700,
  };

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      { dimensions.width < breakPoint.width || dimensions.height < breakPoint.height
        ? <MobileView theme={theme} />
        : (
          <>
            <Header spots={spots} theme={theme} onMainButton={() => { setContentView(true); setValue('2'); }} />
            <MapView
              isDark={theme}
              onIntroClick={() => { setContentView(true); setValue('2'); }}
              openSidebar={() => { setContentView(true); setValue('1'); }}
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
          </>
        )}
    </ThemeProvider>
  );
}

export default App;

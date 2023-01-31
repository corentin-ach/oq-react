/* eslint-disable import/no-webpack-loader-syntax */
import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { lightTheme, darkTheme } from './styles/theme';
import './locales/i18n';
import { RootState } from './app/store';
import Header from './components/header.component';
import MobileView from './views/mobile.view';
import { useGetFirestore } from './firebase/hooks';
import MainView from './views/main.view';
// @ts-ignore
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

function App() {
  const theme = useSelector((state: RootState) => state.theme.dark);
  const { spot } = useSelector((state: RootState) => state);
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

  const allSpots = useGetFirestore('spots');
  const selectedSpot = allSpots.filter((s) => s.id === spot.spot.id)[0];

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      { dimensions.width < breakPoint.width || dimensions.height < breakPoint.height
        ? (
          <MobileView
            isDark={theme}
            spots={allSpots}
            loading={allSpots.length === 0}
            spot={selectedSpot}
          />
        )
        : (
          <MainView isDark={theme} spots={allSpots} spot={selectedSpot} />
        )}
    </ThemeProvider>
  );
}

export default App;

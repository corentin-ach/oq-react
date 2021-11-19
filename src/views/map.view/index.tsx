import React, { ReactElement, useEffect, useState } from 'react';
import {
  MapContainer, useMap,
} from 'react-leaflet';
import L from 'leaflet';
import { useDispatch, useSelector } from 'react-redux';
import ThemeButton from '../../components/buttons.component/themeButton.button';
import { darkMap, lightMap } from '../../styles/theme';
import DataCards from '../../components/dataCards.component';
import SearchBar from '../../components/searchBar.component';
import LocationButton from '../../components/buttons.component/locationButton.button';
import MarkersCluster from '../../components/markersCluster.component';
import { RootState } from '../../app/store';
import { getSpots } from '../../features/getSpotsSlice';

interface Props {
  isDark: boolean
}

const TileLayer = ({ isDark }: any) => {
  const map = useMap();
  const darkLayer = L.tileLayer(
    `https://api.mapbox.com/styles/v1/corentin29/${darkMap}/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY29yZW50aW4yOSIsImEiOiJja3V3dmgxOG0wMTdpMnZsOGs2OGU4eDQzIn0.p3UORX0_zEWs7XpxBBWMHA`,
  );

  const lightLayer = L.tileLayer(
    `https://api.mapbox.com/styles/v1/corentin29/${lightMap}/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY29yZW50aW4yOSIsImEiOiJja3V3dmgxOG0wMTdpMnZsOGs2OGU4eDQzIn0.p3UORX0_zEWs7XpxBBWMHA`,
  );
  map.addLayer(isDark ? darkLayer : lightLayer);
  return null;
};

const MapView = (props: Props): ReactElement => {
  const { isDark } = props;
  const dispatch = useDispatch();
  const { spots, loading } = useSelector((state: RootState) => state.spots);
  useEffect(() => { dispatch(getSpots()); }, []);
  const [markers, setMarkers] = useState([[0]]);

  const allCoords: Array<number[]> = [];
  useEffect(() => {
    spots?.forEach((spot) => {
      allCoords.push(spot.coords);
    });
    setMarkers(allCoords);
  }, [spots]);

  console.log(loading);

  return (
    <div>
      <MapContainer
        center={[43.446782, -1.589371]}
        zoom={13}
        zoomControl={false}
        preferCanvas
        attributionControl={false}
        style={{
          width: '100%',
          height: '100vh',
          zIndex: 2,
        }}
      >
        <TileLayer
          isDark={isDark}
        />
        <MarkersCluster markers={markers} />
      </MapContainer>
      <DataCards />
      <ThemeButton isDark={isDark} />
      <LocationButton />
      <SearchBar />
    </div>
  );
};

export default MapView;

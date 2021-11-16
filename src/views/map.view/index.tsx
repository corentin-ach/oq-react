import React, { ReactElement } from 'react';
import {
  MapContainer, useMap,
} from 'react-leaflet';
import L, { LatLngTuple } from 'leaflet';
import ThemeButton from '../../components/buttons.component/themeButton.button';
import { darkMap, lightMap } from '../../styles/theme';
import DataCards from '../../components/dataCards.component';
import SearchBar from '../../components/searchBar.component';
import LocationButton from '../../components/buttons.component/locationButton.button';
import MarkersCluster from '../../components/markersCluster.component';

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

  const markers: Array<LatLngTuple> = [
    [43.446782, -1.589371],
    [43.46510392814111, -1.574551238326115],
    [45.446782, -1.589371],
  ];

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

import React, { ReactElement } from 'react';
import {
  MapContainer, TileLayer, Marker,
} from 'react-leaflet';
import ThemeButton from '../../components/buttons.component/themeButton.button';
import { darkMap } from '../../styles/theme';
import DropMarker from '../../components/dropMarker.component';
import DataCards from '../../components/dataCards.component';
import SearchBar from '../../components/searchBar.component';
import LocationButton from '../../components/buttons.component/locationButton.button';

interface Props {
  isDark: boolean
}

const MapView = (props: Props): ReactElement => {
  const { isDark } = props;

  return (
    <div>
      <MapContainer
        center={[43.446782, -1.589371]}
        zoom={13}
        zoomControl={false}
        attributionControl={false}
        style={{
          width: '100%',
          height: '100vh',
          zIndex: 2,
        }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/corentin29/${darkMap}/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY29yZW50aW4yOSIsImEiOiJja3V3dmgxOG0wMTdpMnZsOGs2OGU4eDQzIn0.p3UORX0_zEWs7XpxBBWMHA`}
        />
        <Marker
          position={[43.446782, -1.589371]}
          icon={DropMarker}
        />
      </MapContainer>
      <DataCards />
      <ThemeButton isDark={isDark} />
      <LocationButton />
      <SearchBar />
    </div>
  );
};

export default MapView;

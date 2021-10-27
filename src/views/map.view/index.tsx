import React, { ReactElement } from 'react';
import {
  MapContainer, TileLayer, Marker, ZoomControl,
} from 'react-leaflet';
import MainCard from '../../components/mainCard.component';
import ThemeButton from '../../components/themeButton.component';
import { lightMap, darkMap } from '../../styles/theme';
import DropMarker from '../../components/dropMarker.component';

interface Props {
  isDark: boolean;
}

const MapView = (props: Props): ReactElement => {
  const { isDark } = props;
  const colorMap = () => {
    let color = lightMap;
    if (isDark) {
      color = darkMap;
      return color;
    }
    return color;
  };
  return (
    <div>
      <MapContainer
        center={[43.446782, -1.589371]}
        zoom={13}
        zoomControl={false}
        attributionControl={false}
        style={{
          width: '100%',
          height: 700,
          zIndex: 2,
        }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/corentin29/${colorMap()}/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY29yZW50aW4yOSIsImEiOiJja3V3dmgxOG0wMTdpMnZsOGs2OGU4eDQzIn0.p3UORX0_zEWs7XpxBBWMHA`}
        />
        <Marker position={[43.446782, -1.589371]} icon={DropMarker} />
        <ZoomControl position="bottomright" />
      </MapContainer>
      <MainCard />
      <ThemeButton />
    </div>
  );
};

export default MapView;

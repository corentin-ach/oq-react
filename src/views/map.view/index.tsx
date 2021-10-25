import React, { ReactElement } from 'react';
import {
  MapContainer, TileLayer, Marker, ZoomControl,
} from 'react-leaflet';
import MainCard from '../../components/mainCard.component';
import ThemeButton from '../../components/themeButton.component';

const MapView = (): ReactElement => (
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
        url="https://api.mapbox.com/styles/v1/corentin29/ckuvkg7qn260718qpfel4clh8/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY29yZW50aW4yOSIsImEiOiJja3V3dmgxOG0wMTdpMnZsOGs2OGU4eDQzIn0.p3UORX0_zEWs7XpxBBWMHA"
      />
      <Marker position={[43.446782, -1.589371]} />
      <ZoomControl position="bottomright" />
    </MapContainer>
    <MainCard />
    <ThemeButton />
  </div>
);

export default MapView;

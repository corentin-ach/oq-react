import React, { ReactElement } from 'react';
import {
  MapContainer, TileLayer,
} from 'react-leaflet';

const MapView = (): ReactElement => (
  <div>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        url="https://api.mapbox.com/styles/v1/corentin29/ckuvkg7qn260718qpfel4clh8/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY29yZW50aW4yOSIsImEiOiJja3V3dmgxOG0wMTdpMnZsOGs2OGU4eDQzIn0.p3UORX0_zEWs7XpxBBWMHA"

      />
    </MapContainer>
  </div>
);

export default MapView;

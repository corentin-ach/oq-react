import React, { ReactElement, useEffect } from 'react';
import {
  MapContainer, useMap,
} from 'react-leaflet';
import L from 'leaflet';
import { useDispatch, useSelector } from 'react-redux';
import DataCards from '../../components/dataCards.component';
import MarkersCluster from '../../components/markersCluster.component';
import { RootState } from '../../app/store';
import { getSpots } from '../../features/getSpotsSlice';
import CircularLoader from '../../components/circularLoader.component';
import LocationMarker from '../../components/locationMarker.component';
import { darkMap, lightMap } from '../../styles/theme';

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
  const { location } = useSelector((state: RootState) => state.location);
  const { spot } = useSelector((state: RootState) => state.spot);

  useEffect(() => { dispatch(getSpots()); }, []);

  return (
    <div>
      <MapContainer
        center={location}
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
        <LocationMarker />
        <MarkersCluster
          markers={spots}
        />
      </MapContainer>
      <DataCards selectedSpot={spot} />
      {loading ? <CircularLoader /> : null}
    </div>
  );
};

export default MapView;

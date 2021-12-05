import React, { ReactElement, useEffect } from 'react';
import {
  MapContainer,
} from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import DataCards from './components/dataCards.component';
import MarkersCluster from './components/markersCluster.component';
import { RootState } from '../../app/store';
import { getSpots } from '../../features/getSpotsSlice';
import CircularLoader from '../../components/circularLoader.component';
import LocationMarker from './components/locationMarker.component';
import TileLayer from './components/tileLayer.component';

interface Props {
  isDark: boolean
  onIntroClick: () => void;
}

const MapView = (props: Props): ReactElement => {
  const { isDark, onIntroClick } = props;
  const dispatch = useDispatch();
  const { spots, loading } = useSelector((state: RootState) => state.spots);
  const { location } = useSelector((state: RootState) => state.location);
  const { spot } = useSelector((state: RootState) => state.spot);

  useEffect(() => { dispatch(getSpots()); }, []);

  return (
    <div>
      <MapContainer
        center={location}
        zoom={7}
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
      <DataCards selectedSpot={spot} onClick={onIntroClick} />
      {loading ? <CircularLoader /> : null}
    </div>
  );
};

export default MapView;

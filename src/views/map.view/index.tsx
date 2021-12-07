/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement, useEffect } from 'react';
import MapGL from 'react-map-gl';

import { useDispatch, useSelector } from 'react-redux';
import DataCards from './components/dataCards.component';
import { RootState } from '../../app/store';
import { getSpots } from '../../features/getSpotsSlice';
import CircularLoader from '../../components/circularLoader.component';
import { darkMap, lightMap } from '../../styles/theme';

interface Props {
  isDark: boolean
  onIntroClick: () => void;
}

const MapView = (props: Props): ReactElement => {
  const { isDark, onIntroClick } = props;
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.spots);
  // const { location } = useSelector((state: RootState) => state.location);
  const { spot } = useSelector((state: RootState) => state.spot);

  useEffect(() => { dispatch(getSpots()); }, []);

  const [viewport, setViewport] = React.useState({
    latitude: 47.166302,
    longitude: -1.531076,
    zoom: 6,
  });

  return (
    <div>
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle={isDark ? darkMap : lightMap}
        onViewportChange={setViewport}
        mapboxApiAccessToken="pk.eyJ1IjoiY29yZW50aW4yOSIsImEiOiJja3V3dmgxOG0wMTdpMnZsOGs2OGU4eDQzIn0.p3UORX0_zEWs7XpxBBWMHA"
      />
      <DataCards selectedSpot={spot} onClick={onIntroClick} />
      {loading ? <CircularLoader /> : null}
    </div>
  );
};

export default MapView;

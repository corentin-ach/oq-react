/* eslint-disable react/jsx-props-no-spreading */
import React, {
  ReactElement, useEffect, useRef, useState,
} from 'react';
import MapGL, { Layer, Source } from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';
import { GeoJsonProperties } from 'geojson';
import DataCards from './components/dataCards.component';
import { RootState } from '../../app/store';
import { getSpots } from '../../features/getSpotsSlice';
import CircularLoader from '../../components/circularLoader.component';
import { darkMap, lightMap } from '../../styles/theme';
import { clusterLayer, clusterCountLayer, unclusteredPointLayer } from './components/layers.component';

interface Props {
  isDark: boolean
  onIntroClick: () => void;
}

const MapView = (props: Props): ReactElement => {
  const { isDark, onIntroClick } = props;
  const dispatch = useDispatch();
  const { spots, loading } = useSelector((state: RootState) => state.spots);
  const [markers, setMarkers]: any = useState({});
  const { spot } = useSelector((state: RootState) => state.spot);
  const mapRef: any = useRef(null);

  useEffect(() => { dispatch(getSpots()); }, []);

  const [viewport, setViewport] = React.useState({
    latitude: 47.166302,
    longitude: -1.531076,
    zoom: 6,
  });

  const geojson: GeoJsonProperties = {
    type: 'FeatureCollection',
    features: [],
  };

  useEffect(() => {
    spots.map((element) => geojson.features.push({
      type: 'Feature',
      properties: {
        id: element.id,
      },
      geometry: {
        type: 'Point',
        coordinates: [element.coords[1], element.coords[0]],
      },
    }));
    setMarkers(geojson);
  }, [spots]);

  return (
    <div>
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle={isDark ? darkMap : lightMap}
        onViewportChange={setViewport}
        ref={mapRef}
        mapboxApiAccessToken="pk.eyJ1IjoiY29yZW50aW4yOSIsImEiOiJja3V3dmgxOG0wMTdpMnZsOGs2OGU4eDQzIn0.p3UORX0_zEWs7XpxBBWMHA"
      >
        <Source
          id="earthquakes"
          type="geojson"
          data={markers}
          cluster
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
      </MapGL>
      <DataCards selectedSpot={spot} onClick={onIntroClick} />
      {loading ? <CircularLoader /> : null}
    </div>
  );
};

export default MapView;

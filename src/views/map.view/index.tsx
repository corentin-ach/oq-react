/* eslint-disable react/jsx-props-no-spreading */
import React, {
  ReactElement, useEffect, useRef, useState,
} from 'react';
import ReactMapGL, { Layer, Source, GeolocateControl } from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';
import { GeoJsonProperties } from 'geojson';
import DataCards from './components/dataCards.component';
import { key, RootState } from '../../app/store';
import { getSpots } from '../../features/getSpotsSlice';
import CircularLoader from '../../components/circularLoader.component';
import { darkMap, lightMap } from '../../styles/theme';
import { clusterLayer, clusterCountLayer, unclusteredPointLayer } from './components/layers.component';
import { setSpot } from '../../features/setSpotSlice';

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

  const geolocateStyle = {
    bottom: 0,
    right: 0,
    margin: 30,
  };
  const positionOptions = { enableHighAccuracy: false };

  const [viewport, setViewport]: any = useState({
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
        name: element.name,
        quality: {
          water: element.quality.water,
          plastic: element.quality.plastic,
          seal: element.quality.seal,
        },
        status: element.status,
      },
      geometry: {
        type: 'Point',
        coordinates: [element.coords[1], element.coords[0]],
      },
    }));
    setMarkers(geojson);
  }, [spots]);

  const onClick = (event: any) => {
    const feature = event.features[0];
    const clusterId = feature?.properties?.cluster_id;
    const mapboxSource = mapRef.current.getMap().getSource('spots');

    if (clusterId) {
      mapboxSource.getClusterExpansionZoom(clusterId, (err: any, zoom: any) => {
        if (err) {
          return;
        }
        setViewport({
          longitude: feature?.geometry?.coordinates[0] || 0,
          latitude: feature?.geometry?.coordinates[1] || 0,
          zoom,
          transitionDuration: 500,
        });
      });
    } else if (feature?.layer.id === 'unclustered-point') {
      const qjson = JSON.parse(feature.properties.quality);
      dispatch(setSpot({
        id: feature.properties.id,
        name: feature.properties.name,
        water: qjson.water,
        plastic: qjson.plastic,
        seal: qjson.seal,
        status: feature.properties.status,
      }));
    } else return null;
    return null;
  };

  return (
    <div>
      <ReactMapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle={isDark ? darkMap : lightMap}
        onViewportChange={setViewport}
        interactiveLayerIds={[clusterLayer.id, unclusteredPointLayer.id]}
        ref={mapRef}
        attributionControl={false}
        onClick={onClick}
        mapboxApiAccessToken={`${key}`}
      >
        <Source
          id="spots"
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
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={positionOptions}
          trackUserLocation
        />
      </ReactMapGL>
      <DataCards selectedSpot={spot} onClick={onIntroClick} />
      {loading ? <CircularLoader /> : null}
    </div>
  );
};

export default MapView;

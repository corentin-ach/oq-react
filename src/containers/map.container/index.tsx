/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useEffect, useRef, useState,
} from 'react';
import Map, {
  GeolocateControl, Popup,
} from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { key, RootState } from '../../app/store';
import { darkMap, lightMap } from '../../styles/theme';
import { clusterLayer, clusterCountLayer, unclusteredPointLayer } from './components/layers.component';
import { setSpot } from '../../features/setSpotSlice';
import { Spot } from '../../types';
import SourceMap from './components/source.component';

interface Props {
  isDark: boolean
  onIntroClick?: () => void;
  spots: Array<Spot>;
  loading: boolean;
  openSidebar?: () => void;
  showInfoSpot?: () => void;
  spot: Spot;
}

function MapContainer(props: Props) {
  const {
    isDark, onIntroClick, spots, loading, openSidebar, showInfoSpot, spot,
  } = props;
  const dispatch = useDispatch();
  const spotSet = useSelector((state: RootState) => state.spot);
  const mapRef: any = useRef(null);
  const [popupInfo, setPopupInfo] = useState<any>(null);

  const geolocateStyle = {
    bottom: 0,
    right: 0,
    margin: 20,
  };
  const positionOptions = { enableHighAccuracy: false };

  const [viewport, setViewport]: any = useState({
    latitude: 48.420341,
    longitude: -3.824453,
    zoom: 7,
  });

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
      // const qjson = JSON.parse(feature.properties.quality);
      const selectedSpot = spots.find((s) => s.id === feature.properties.id);

      dispatch(setSpot({
        id: selectedSpot?.id,
        bySearch: false,
      }));
      setViewport({
        longitude: feature?.geometry?.coordinates[0],
        latitude: feature?.geometry?.coordinates[1],
        zoom: 13,
        transitionDuration: 500,
      });
      setPopupInfo({
        lngLat: feature.geometry.coordinates,
        text: feature.properties.name,
      });
    } else {
      dispatch(setSpot({
        id: '',
        bySearch: false,
      }));
    }
    return null;
  };

  useEffect(() => {
    if (spotSet.spot?.bySearch) {
      setViewport({
        longitude: spot?.coords[1],
        latitude: spot?.coords[0],
        zoom: 13,
        transitionDuration: 500,
      });
      setPopupInfo({
        lngLat: [spot?.coords[1], spot?.coords[0]],
        text: spot?.name,
      });
    }
  }, [spot]);

  return (
    <>
      <Map
        {...viewport}
        width="100%"
        height="100vh"
        mapStyle={isDark ? darkMap : lightMap}
        onViewportChange={setViewport}
        interactiveLayerIds={[clusterLayer.id, unclusteredPointLayer.id]}
        ref={mapRef}
        attributionControl={false}
        onClick={onClick}
        mapboxApiAccessToken={`${key}`}
      >
        <SourceMap spots={spots} />
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={positionOptions}
          trackUserLocation
        />
        {popupInfo && (
        <Popup
          longitude={popupInfo.lngLat[0]}
          latitude={popupInfo.lngLat[1]}
          onClose={setPopupInfo}
          closeButton={false}
        >
          <Typography sx={{ color: 'black' }}>{popupInfo.text}</Typography>
        </Popup>
        )}
      </Map>
    </>
  );
}

export default MapContainer;

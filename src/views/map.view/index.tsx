/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useEffect, useRef, useState,
} from 'react';
import Map, {
  Layer, Source, GeolocateControl, Popup,
} from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';
import { GeoJsonProperties } from 'geojson';
import DataCards from './components/dataCards.component';
import { key, RootState } from '../../app/store';
import CircularLoader from '../../components/circularLoader.component';
import { darkMap, lightMap } from '../../styles/theme';
import { clusterLayer, clusterCountLayer, unclusteredPointLayer } from './components/layers.component';
import { setSpot } from '../../features/setSpotSlice';
import ReportButton from './components/reportButton.component';
import InfoButton from './components/infoButton.component';
import { Spot } from '../../types';

interface Props {
  isDark: boolean
  onIntroClick?: () => void;
  spots: Array<Spot>;
  loading: boolean;
  openSidebar?: () => void;
  showInfoSpot?: () => void;
  spot: Spot;
}

function MapView(props: Props) {
  const {
    isDark, onIntroClick, spots, loading, openSidebar, showInfoSpot, spot,
  } = props;
  const dispatch = useDispatch();
  const spotSet = useSelector((state: RootState) => state.spot);
  const [markers, setMarkers]: any = useState({});
  const mapRef: any = useRef(null);
  const [popupInfo, setPopupInfo] = useState<any>(null);

  const geolocateStyle = {
    bottom: 0,
    right: 0,
    margin: 20,
  };
  const positionOptions = { enableHighAccuracy: false };

  const [viewport, setViewport]: any = useState({
    latitude: 48.310341,
    longitude: -3.824453,
    zoom: 7,
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
          date: element.quality.date,
          observation: element.quality.observation,
        },
        status: element.status,
        stringStatus: element.status ? 'true' : 'false',
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
        <Source
          id="spots"
          type="geojson"
          data={markers}
          cluster
          clusterMaxZoom={14}
          clusterRadius={50}
          clusterProperties={{
            status: ['any', ['==', ['get', 'stringStatus'], 'true'], 'true'],
          }}
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
        {popupInfo && (
        <Popup
          longitude={popupInfo.lngLat[0]}
          latitude={popupInfo.lngLat[1]}
          onClose={setPopupInfo}
          closeButton={false}
        >
          {popupInfo.text}
        </Popup>
        )}
      </Map>
      {/* <DataCards
        showInfoSpot={() => showInfoSpot()}
        spots={spots}
        spot={spot}
        onClick={onIntroClick}
        isDark={isDark}
      />
      {loading ? <CircularLoader /> : null}
      <ReportButton spots={spots} spot={spot} />
      <InfoButton openSidebar={openSidebar} /> */}
    </>
  );
}

export default MapView;

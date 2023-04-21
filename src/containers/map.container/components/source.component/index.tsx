/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import { GeoJsonProperties } from 'geojson';
import React, { useEffect, useState } from 'react';
import { Layer, Source } from 'react-map-gl';
import { Spot } from '../../../../types';
import {
  areaLayer, clusterCountLayer, clusterLayer, strokeLayer, unclusteredPointLayer,
} from '../layers.component';

type Props = {
    spots?: Spot[],
}

function SourceMap(props: Props) {
  const { spots } = props;

  const markersCollection: GeoJsonProperties = {
    type: 'FeatureCollection',
    features: [],
  };
  const areasCollection: GeoJsonProperties = {
    type: 'FeatureCollection',
    features: [],
  };
  const [markers, setMarkers]: any = useState({});
  const [areas, setAreas]: any = useState({});

  useEffect(() => {
    const { markerFeatures, areaFeatures } = spots.reduce(
      (acc, element) => {
        const { coords, status, area } = element;
        const pointFeature = {
          type: 'Feature',
          properties: {
            ...element,
            stringStatus: status ? 'true' : 'false',
          },
          geometry: {
            type: 'Point',
            coordinates: [coords[1], coords[0]],
          },
        };
        acc.markerFeatures.push(pointFeature);

        const areaFeature = {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: area ? [
              area?.map((el) => ([el?._lat, el?._long])),
            ] : [[]],
          },
        };
        acc.areaFeatures.push(areaFeature);
        return acc;
      },
      { markerFeatures: [], areaFeatures: [] },
    );

    markersCollection.features = markerFeatures;
    areasCollection.features = areaFeatures;

    setMarkers(markersCollection);
    setAreas(areasCollection);
  }, [spots]);

  const markersLayers = [
    { id: 0, layer: clusterLayer },
    { id: 1, layer: clusterCountLayer },
    { id: 2, layer: unclusteredPointLayer },
  ];

  const areaLayers = [
    { id: 0, layer: areaLayer },
    { id: 1, layer: strokeLayer },
  ];

  return (
    <>
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
        {markersLayers.map((el) => <Layer key={el.id} {...el.layer} />)}
      </Source>
      <Source
        id="zones"
        type="geojson"
        data={areas}
      >
        {areaLayers.map((el) => <Layer key={el.id} {...el.layer} />)}
      </Source>
    </>
  );
}

export default SourceMap;

import { FillLayer } from 'mapbox-gl';

export const clusterLayer: any = {
  id: 'clusters',
  type: 'circle',
  source: 'spots',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': [
      'case',
      ['get', 'status'],
      '#F38732',
      '#65DEAB'],
    'circle-radius': ['step', ['get', 'point_count'], 35, 100, 30, 750, 40],
    'circle-blur': 0.6,
  },
};

export const clusterCountLayer: any = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'spots',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 15,
  },
  paint: {
    'text-color': '#ffffff',
  },
};

export const unclusteredPointLayer: any = {
  id: 'unclustered-point',
  type: 'circle',
  source: 'spots',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': ['match', ['get', 'stringStatus'], 'false', '#65DEAB', 'true', '#F38732', '#5DADEC'],
    'circle-radius': 10,
  },
};

export const areaLayer: any = {
  id: 'data',
  type: 'fill',
  source: 'zones',
  paint: {
    'fill-color': '#43abad',
    'fill-opacity': 0.8,
  },
};

export const strokeLayer: any = {
  id: 'stroke-layer',
  type: 'line',
  source: 'zones',
  paint: {
    'line-color': '#fff',
    'line-width': 3,
  },
};

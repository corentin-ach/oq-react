import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet.markercluster/dist/leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { useMap } from 'react-leaflet';
import icon from '../../assets/wi-raindrop.svg';

const mcg = (L as any).markerClusterGroup({
  iconCreateFunction(cluster: any) {
    return L.divIcon({ html: `<b>${cluster.getChildCount()}</b>` });
  },
});

const customMarker = new L.Icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconAnchor: undefined,
  popupAnchor: undefined,
  shadowUrl: undefined,
  shadowSize: undefined,
  shadowAnchor: undefined,
  iconSize: [30, 30],
  className: undefined,
});

const MarkersCluster = ({ markers }: any) => {
  const map = useMap();

  useEffect(() => {
    mcg.clearLayers();
    markers.forEach((coords: Array<number>) => L.marker(new L.LatLng(coords[0], coords[1]), {
      icon: customMarker,
    })
      .addTo(mcg));
    map.addLayer(mcg);
  }, [markers, map]);

  return null;
};

export default MarkersCluster;

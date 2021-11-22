import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet.markercluster/dist/leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { useMap } from 'react-leaflet';
import icon from '../../assets/wi-raindrop.svg';
import { Spot } from '../../features/getSpotsSlice';

const mcg = (L as any).markerClusterGroup({
  iconCreateFunction(cluster: any) {
    return L.divIcon({ html: cluster.getChildCount(), iconSize: L.point(32, 32), className: 'cluster' });
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
    markers.forEach(
      (element: Spot) => {
        L.marker(new L.LatLng(element.coords[0], element.coords[1]), {
          icon: customMarker,
          alt: element.id,
        }).on('click', () => {
          console.log(element);
        })
          .addTo(mcg);
        // eslint-disable-next-line no-underscore-dangle
      },
    );
    map.addLayer(mcg);
  }, [markers, map]);

  return null;
};

export default MarkersCluster;

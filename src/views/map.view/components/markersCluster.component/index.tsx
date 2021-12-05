import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet.markercluster/dist/leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { useMap } from 'react-leaflet';
import { useDispatch } from 'react-redux';
import blueDrop from '../../../../assets/bluedrop.svg';
import { Spot } from '../../../../features/getSpotsSlice';
import { setSpot } from '../../../../features/setSpotSlice';

const mcg = (L as any).markerClusterGroup({
  iconCreateFunction(cluster: any) {
    return L.divIcon({ html: cluster.getChildCount(), iconSize: L.point(32, 32), className: 'cluster' });
  },
});

const MarkersCluster = ({ markers }: any) => {
  const customMarker = new L.Icon({
    iconUrl: blueDrop,
    iconRetinaUrl: blueDrop,
    iconAnchor: undefined,
    popupAnchor: undefined,
    shadowUrl: undefined,
    shadowSize: undefined,
    shadowAnchor: undefined,
    iconSize: [30, 30],
    className: undefined,
  });

  const map = useMap();
  const dispatch = useDispatch();
  useEffect(() => {
    mcg.clearLayers();
    markers.forEach(
      (element: Spot) => {
        L.marker(new L.LatLng(element.coords[0], element.coords[1]), {
          icon: customMarker,
          alt: element.id,
        }).on('click', () => {
          dispatch(setSpot(element));
        })
          .addTo(mcg);
      },
    );
    map.addLayer(mcg);
  }, [markers, map]);

  return null;
};

export default MarkersCluster;

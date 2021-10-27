import L from 'leaflet';
import icon from '../../assets/wi-raindrop.svg';

const DropMarker = new L.Icon({
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

export default DropMarker;

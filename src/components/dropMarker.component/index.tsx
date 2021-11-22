import L from 'leaflet';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
// import blueDrop from '../../assets/bluedrop.svg';
import orangeDrop from '../../assets/orangedrop.svg';

const { spot } = useSelector((state: RootState) => state.spot);

const DropMarker = new L.Icon({
  iconUrl: spot.quality === 1 ? orangeDrop : orangeDrop,
  iconRetinaUrl: spot.quality === 1 ? orangeDrop : orangeDrop,
  iconAnchor: undefined,
  popupAnchor: undefined,
  shadowUrl: undefined,
  shadowSize: undefined,
  shadowAnchor: undefined,
  iconSize: [30, 30],
  className: undefined,
});

export default DropMarker;

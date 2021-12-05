import L from 'leaflet';
import { useMap } from 'react-leaflet';
import { darkMap, lightMap } from '../../../../styles/theme';

const TileLayer = ({ isDark }: any) => {
  const map = useMap();
  const darkLayer = L.tileLayer(
    `https://api.mapbox.com/styles/v1/corentin29/${darkMap}/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY29yZW50aW4yOSIsImEiOiJja3V3dmgxOG0wMTdpMnZsOGs2OGU4eDQzIn0.p3UORX0_zEWs7XpxBBWMHA`,
  );

  const lightLayer = L.tileLayer(
    `https://api.mapbox.com/styles/v1/corentin29/${lightMap}/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY29yZW50aW4yOSIsImEiOiJja3V3dmgxOG0wMTdpMnZsOGs2OGU4eDQzIn0.p3UORX0_zEWs7XpxBBWMHA`,
  );
  map.addLayer(isDark ? darkLayer : lightLayer);
  return null;
};

export default TileLayer;

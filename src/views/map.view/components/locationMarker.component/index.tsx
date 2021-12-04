import React, { useEffect, useState } from 'react';
import { useMap, Marker } from 'react-leaflet';
import { useSelector } from 'react-redux';
import L from 'leaflet';
import { RootState } from '../../../../app/store';

import icon from '../../../../assets/userLocation.svg';

const UserIcon = new L.Icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconAnchor: undefined,
  popupAnchor: undefined,
  shadowUrl: undefined,
  shadowSize: undefined,
  shadowAnchor: undefined,
  iconSize: [25, 25],
  className: undefined,
});

const LocationMarker = () => {
  const [position, setPosition]: any = useState([0, 0]);
  const map = useMap();
  const { location } = useSelector((state: RootState) => state.location);
  const equals = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b);
  useEffect(() => {
    setPosition(location);
    map.flyTo(location, map.getZoom());
  }, [map, location]);
  return (
    <div>
      {equals([47.166302, -1.531076], position) ? null : (
        <Marker
          position={position}
          icon={UserIcon}
        />
      )}
    </div>
  );
};

export default LocationMarker;

import React, { useEffect, useState } from 'react';
import { useMap, Marker } from 'react-leaflet';
import { useSelector } from 'react-redux';
import L from 'leaflet';
import { RootState } from '../../app/store';

import icon from '../../assets/userLocation.svg';

const UserIcon = new L.Icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconAnchor: undefined,
  popupAnchor: undefined,
  shadowUrl: undefined,
  shadowSize: undefined,
  shadowAnchor: undefined,
  iconSize: [15, 15],
  className: undefined,
});

const LocationMarker = () => {
  const [position, setPosition]: any = useState([0, 0]);
  const map = useMap();
  const { location } = useSelector((state: RootState) => state.location);
  useEffect(() => {
    setPosition(location);
    map.flyTo(location, map.getZoom());
  });

  return (
    <Marker position={position} icon={UserIcon} />
  );
};

export default LocationMarker;

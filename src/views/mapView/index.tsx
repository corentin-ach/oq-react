import React, { ReactElement } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = (text: string) => <div>{text}</div>;

const MapView = (): ReactElement => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <p>Marker</p>
      </GoogleMapReact>
    </div>
  );
}
  
  export default MapView;

import React from 'react';
import { withScriptjs, Marker } from "react-google-maps";

import MapA from './MapA';

import CustomMarker from './CustomMarker';




function WrappedMap() {

  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);



  
  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);


  


  const MapLoader = withScriptjs(MapA);

  return (

<div className="App">
  <header className="App-header">
    
  </header>
  <MapLoader
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9_cVatra7UkQioADxTL8DjtySurB77ik"
      loadingElement={<div style={{ height: `100%` }} />}
      onClick={onMapClick}
  > 


{markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={{
              url: `/bear.svg`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}






<CustomMarker></CustomMarker>

  </MapLoader>
</div>
  );
}

export default WrappedMap;
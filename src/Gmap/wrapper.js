import React from 'react';
import { withScriptjs, Marker } from "react-google-maps";

import MapA from './MapA';






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





  </MapLoader>
</div>
  );
}

export default WrappedMap;
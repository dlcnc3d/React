import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap  
} from "react-google-maps";

import {Container, Typography, BottomNavigationAction} from '@material-ui/core'

import useStyles from "./usestyles";


   // Center point of the map
const startPlace  = {lat: 49.2328, lng: 28.465 } ;



function MyMap() { 
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={startPlace} 
      mapTypeId ='roadmap' // need to check
    >            
    </GoogleMap>
  );
}

//style={{ width: "80vw", height: "80vh" }}


// Wrapper
const MapWrapped = withScriptjs(withGoogleMap(MyMap));

export default function GMap() {
  
  const  classes = useStyles();
  return (
//className={classes.GoogleMap}

<Container >
    <div>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC9_cVatra7UkQioADxTL8DjtySurB77ik`}
        loadingElement={<div style={{ height: `80%` }} />}
        containerElement={<div style={{ height: `80%` }} />}
        mapElement={<div style={{ height: `80%` }} />}
      />
  </div>  

  </Container>
  
  );
}

// new

import React from "react"
import { compose, withProps, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow, SearchBox } from "react-google-maps"
import { Alarm } from "@material-ui/icons";


import UpControlElement from "./Components/UpControlElement";



let point;
let markers =[]; //aray for markers


//add all position of markers to array

function addMarker(location) {
  
  markers.push(location);
}



const MyApp = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC9_cVatra7UkQioADxTL8DjtySurB77ik",    
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,

  withStateHandlers(() => ({
    isMarkerShown: false,
    markerPosition: null
  }), {
    onMapClick: ({ isMarkerShown }) => (e) => ({
        markerPosition: e.latLng,
        isMarkerShown:true,
        title:"start",
        point: e.latLng.lat(),
        addMarker(markerPosition)
        {markers.push(markerPosition);}
                
    })
  }),

)
((props) =>
  
  
  
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 49, lng: 28 }}
    onClick={props.onMapClick}
  >
    {props.isMarkerShown && <Marker position={props.markerPosition} /> 
    }
    
    form:<input id="travelfrom" type="text" name="name" value={
           
      props.markerPosition

      
     // markers.map().lng
      }/>
    to:<input id="travelTo" type="" name="name" />

    <input type="button" value="Get Route" onclick="GetRoute()" />

    
  </GoogleMap>
  
);





export default MyApp
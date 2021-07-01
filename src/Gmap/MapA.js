//global google
import React from "react";
import { compose, withProps } from "recompose";
import {  
  withGoogleMap,
  GoogleMap,
  Marker,  
  DirectionsRenderer,
  
  InfoWindow,
} from "react-google-maps";




const MyMapComponent = compose(
  withProps({

    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{height: `500px`} } />,
    mapElement: <div style={{ height: `100%` }} />,
  }),

  
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 49.23, lng: 28.47 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((p) => (
      <Marker
        key={p.lat}
        position={{ lat: p.lat, lng: p.lng }}
        label={p.type}
      >
        <InfoWindow>
          <div>
              {p.type}
          </div>
        </InfoWindow>
      </Marker>
    ))}
 
    {props.IsRouteshown &&  props.direction  && <DirectionsRenderer               
               directions={props.direction }     
               />}

  </GoogleMap>
));

export default MyMapComponent;

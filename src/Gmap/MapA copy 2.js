/*global google*/
import React, { Component } from "react";
import { compose, withProps, withState, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker,OverlayView, DirectionsRenderer } from "react-google-maps";

import UpControlElement from "../Components/UpControlElement";



const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
})


//UpControlElement.UpControlElement.UpControlElement.useInputValue ('123');


let markers =[]; //aray for markers


//add all position of markers to array

function addMarker(lat, lng) {
  
  markers.push(lat, lng);
}


class RenderRoute extends Component {
    state = {
    directions: null, 
        };

        constructor(props) {
            super(props);
            this.state = {isRoute: false};
          }



componentDidMount() {   
    const directionsService = new google.maps.DirectionsService();
    
    const origin = { lat: 49.2328, lng:  28.465 };
    const destination = { lat: 49.248, lng:  28.65};
    
    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,            
        },
        (result, status) => {
            if (status === google.maps.DirectionsStatus.OK  ) {
                console.log(result)
                this.setState({
                    directions: result
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        }
    );
}
    
render() {      

    return (
        <DirectionsRenderer               
               directions={this.state.directions}
            />
       );
    }
}








const MyMapComponent = compose(
  
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC9_cVatra7UkQioADxTL8DjtySurB77ik",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `700px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
   
    withScriptjs,
    withGoogleMap,

)



((props) =>

    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 49.23, lng: 28.43 }}
        onClick={props.onMapClick}
    > 
        {props.markers.map 
            (p =><Marker
            key={p.lat}
             position={{ lat: p.lat, lng: p.lng }}              
             >  
             {addMarker(p.lat,p.lng)}  
          
            form:<input id="travelfrom" type="text" name="name" value={           
           p.lng +', '+ p.lng
            // markers.map().lng         
           }/>
           to:<input id="travelto" type="text" name="name" value={           
              markers[0].lo         
           }/>

            </Marker>)}


            <RenderRoute
               
               // directions={this.state.directions}
 
             />


   
    </GoogleMap>


)

export default MyMapComponent;
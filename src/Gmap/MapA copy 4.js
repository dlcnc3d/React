/*global google*/
import React, { Component } from "react";
import { compose, withProps, withState, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker,OverlayView, lifecycle, DirectionsRenderer } from "react-google-maps";

import UpControlElement from "../Components/UpControlElement";

import { createStore } from 'redux'

import Button from '@material-ui/core/Button'

import Checkbox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input'
import {Container, Typography, Grid, } from '@material-ui/core'


const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
})




class RenderRoute extends Component {
    state = {
    directions: null, 
        };

        
     componentDidUpdate(nextProps, nextState) {   

        
    const directionsService = new google.maps.DirectionsService();
    
    //const origin = { lat: 49.2328, lng:  28.465 };
    //const destination = { lat: 49.248, lng:  28.65};


    const origin = nextProps.Start;
    const destination = nextProps.End;
    
    //----------------------------------------------
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


    //-----------------------------------------------------
}    
render() {   
    
    
    return (   
                <div>
         {this.state.directions && <DirectionsRenderer               
               directions={this.state.directions}     
               />              } 
               </div>               
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
            </Marker>)            
            }  
            
            {props.IsRouteshown && <RouteRender Start={props.Start} End={props.End}  />} 
            

   
    </GoogleMap>


)













export default MyMapComponent;
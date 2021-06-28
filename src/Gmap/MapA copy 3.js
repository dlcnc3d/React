/*global google*/
import React, { Component } from "react";
import { compose, withProps, withState, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker,OverlayView, DirectionsRenderer } from "react-google-maps";

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


//UpControlElement.UpControlElement.UpControlElement.useInputValue ('123');


let markers =[]; //aray for markers


//add all position of markers to array

function addMarker(lat, lng) {
  
  markers.push(lat, lng);
}


//var Start = {lat: markers[0].lat, lng:  markers[0].lng}
var Start= { lat: 49.2328, lng:  28.465 }

class RenderRoute extends Component {
    state = {
    directions: null, 
        };

        constructor(props) {
            super(props);
            this.onClick = this.onClick.bind(this);
            this.state = {
              show: false,
            };
          }

         
          onClick() {
            this.setState({ show: !this.state.show });
          }

         






componentDidMount(Start, End) {   
    const directionsService = new google.maps.DirectionsService();
    
    const origin = { lat: 49.2328, lng:  28.465 };
    const destination = { lat: 49.248, lng:  28.65};

    //const origin = {Start};
    //const destination = {End};
    
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


function IsRoute (props) {
    const isShow = props.isShow;
    if (isShow) {
      return <RenderRoute />;
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
         <Grid item>
                <Button variant="contained" color="primary"
                
                //onClick={() => SetPoints("49.23, 28.43", "49.33, 28.63")}    
                onClick={()  => {

                    <IsRoute isShow={true}></IsRoute>
                }}
                > Get Route                  
                </Button>                    
        </Grid>
        
        {props.markers.map 
            (p =><Marker
            key={p.lat}
             position={{ lat: p.lat, lng: p.lng }}              
             >  
             {addMarker(p.lat,p.lng)} 
            </Marker>)}        


           {}

            <IsRoute
            isShow={true}           
            
            ></IsRoute>

   
    </GoogleMap>


)













export default MyMapComponent;
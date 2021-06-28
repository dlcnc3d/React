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




class RouteRender extends Component {
    state = {
    directions: null, 
        };
        
     componentDidUpdate(nextProps) {  
    const directionsService = new google.maps.DirectionsService();
    

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

export default RouteRender
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


let result;

class RouteDetails extends Component {

    

    state = {
    directions: null, 
        };

        
        
     componentDidUpdate(nextProps) {      
    const    service = new google.maps.DistanceMatrixService();

    const origin = nextProps.Start;
    const destination = nextProps.End;
    const costKm = 2.0;

    


    service.getDistanceMatrix({
        origins: origin,
        destinations: destination,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
    
    
    }, function (response, status) {
    
        if (status === google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status !== "ZERO_RESULTS") {
            var distance = response.rows[0].elements[0].distance.text;
            //var duration = response.rows[0].elements[0].duration.value;
           // var dvDistance = document.getElementById("dvDistance");
            //duration = parseFloat(duration / 60).toFixed(2);
            var cost = parseFloat(response.rows[0].elements[0].distance.value / 1000 * costKm).toFixed(2);
    
            result = "Cost: " + cost + " USD" + "<br />";
           // dvDistance.innerHTML += "Distance: " + distance + "<br />";
            // dvDistance.innerHTML += "Cost: " + cost + " USD" + "<br />";
            
    
        } else {
            result = "Unable to find the distance via road.";
        }
    });

    //-----------------------------------------------------

    
}    
render() {   
    
    
    return (   
        result              
       );  
      
 }
}

export default RouteDetails
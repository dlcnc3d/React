import React from "react";
import { createStore } from 'redux'
import RouteDetails from "./Gmap/RouteDetails";
import Autocomplete from './Gmap/Autocomplete'

import {
  withGoogleMap,
   
  withScriptjs,
  GoogleMap,
  DirectionsRenderer,
  SearchBox,
  Marker,
  DistanceMatrixService
} from "react-google-maps";

import MyMapComponent from './Gmap/MapA'

//import useStyles from "./usestyles";

import FooterNew from "./Components/footer";
//import MainElement from "./MainElement";
import UpperToolMenu from "./Components/UpperToolMenu";
import UpperElement from "./Components/UpperElement";
import UpControlElement from "./Components/UpControlElement";


i



import WrappedMap from "./Gmap/wrapper";


import {Container, Typography, Grid } from '@material-ui/core'
import Input from '@material-ui/core/Input'




export default function App() {

  var distance = require('google-distance-matrix');
 

  var origins = ['San Francisco CA', '40.7421,-73.9914'];
  var destinations = ['New York NY', 'Montreal', '41.8337329,-87.7321554', 'Honolulu'];
   
  distance.key("AIzaSyC9_cVatra7UkQioADxTL8DjtySurB77ik");
  distance.units('metric');
   
  distance.matrix(origins, destinations, function (err, distances) {
      if (err) {
          return console.log(err);
      }
      if(!distances) {
          return console.log('no distances');
      }
      if (distances.status === 'OK') {
          for (var i=0; i < origins.length; i++) {
              for (var j = 0; j < destinations.length; j++) {
                  var origin = distances.origin_addresses[i];
                  var destination = distances.destination_addresses[j];
                  if (distances.rows[0].elements[j].status === 'OK') {
                      var distance = distances.rows[i].elements[j].distance.text;
                      console.log('Distance from ' + origin + ' to ' + destination + ' is ' + distance);
                  } else {
                      console.log(destination + ' is not reachable by land from ' + origin);
                  }
              }
          }
      }
  });















 
  const [distanceResult, setResultState] = React.useState('.... loading');
  
  const [onRoute, setRouteState] = React.useState(false);

  const [onRouteByAuto, setRouteStateRouteByAuto] = React.useState(false);


  const [markers, setMarkers] = React.useState([]);


  //const [selected, setSelected] = React.useState(null);


const onRouteClick = React.useCallback((e) => 
{
  setRouteState  (!onRoute)
  //setRouteState  (distance)
  
}, []);

const onRouteByAutoClick = React.useCallback((e) => 
{
  setRouteStateRouteByAuto  (!onRouteByAuto)  
  
}, []);









const onMapClick = React.useCallback((e) => {    
  setMarkers(
    (current) => [
    ...current,
    {      
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      time: new Date(), 
      label: 'Start', 
      place: e.place,
      labelVisible: true,
    },
  ]);
}, []);


const [coordinatesEnd, setCoordinates] = React.useState();

function coordinatesChangeHandlerEnd(coordinates)
{
  setCoordinates(coordinates);
}



    return (
      <>
      <UpperToolMenu/>
        <main>
          <UpperElement 

          
          result={distanceResult}  

          />           
            <Grid container spacing={3} justify="center">
          <Grid item>                        
            Travel From: <Autocomplete
            id="travelfrom" 
            type="text" 
            name="Start"
            />                          
          </Grid>

          <Grid item>               
          Travel to: <Autocomplete
            id="travelTo" 
            type="text" 
            name="End"
            //coordinatesChangeHandler={coordinatesChangeHandlerEnd(coordinates)}

            />                          
           </Grid>                         
           </Grid>

          <UpControlElement  

          GetRouteHandlerByAuto={onRouteByAutoClick}  

          GetRouteHandler={onRouteClick}  
          Start={markers[0]}
          End={markers[markers.length-1]}




          />
         
         <MyMapComponent   
         
         //{this.props.distanceResult = distanceResult }

         
         markers={markers.slice(0,1)}

         onMapClick={onMapClick}     
         
         IsRouteshownByAuto={onRouteByAuto}
         IsRouteshown={onRoute}
         
         StartByAuto={markers[0]}
         EndByAuto={markers[markers.length-1]}


         Start={markers[0]}
         End={markers[markers.length-1]}


         
        >


          
         
          
 
      <DistanceMatrixService
 options={{
           destinations: [{lat:1.296788, lng:103.778961}],
           origins: [{lng:103.780267, lat:1.291692}],
           travelMode: "DRIVING",
         }}
 callback = {(response) => {console.log(response)}}
/>


        </MyMapComponent>


        </main>        
        <footer><FooterNew/>  </footer>
        
        </>
    );
}
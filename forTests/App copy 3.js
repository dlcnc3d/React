import React from "react";


//import useStyles from "./usestyles";

import FooterNew from "./footer";
import MainElement from "./MainElement";
import UpperToolMenu from "./UpperToolMenu";
import UpperElement from "./UpperElement";
import UpControlElement from "./UpControlElement";
import GMap from "../Gmap/GMap";

import Map2 from "./Map2";
import MapR from "./MapRoute";
import MapR1 from "./MapRouteLite";

import RouteApp from "./RouteMapR";

//import { func } from "prop-types";




const googleMapsApiKey = "AIzaSyC9_cVatra7UkQioADxTL8DjtySurB77ik";

const AppRoute = props => {
  const {places} = props;

  const {
    loadingElement,
    containerElement,
    mapElement,
    defaultCenter,
    defaultZoom
  } = props;

  return (
    <MapR1
      googleMapURL={
        'https://maps.googleapis.com/maps/api/js?key=' +
        googleMapsApiKey +
        '&libraries=geometry,drawing,places'
      }
      markers={places}
      loadingElement={loadingElement || <div style={{height: `100%`}}/>}
      containerElement={containerElement || <div style={{height: "80vh"}}/>}
      mapElement={mapElement || <div style={{height: `100%`}}/>}
      defaultCenter={defaultCenter || {lat: 49.2328, lng: 28.465}}
      defaultZoom={defaultZoom || 5}
    />
  );
};


const places = [
  {latitude: 49.2328, longitude: 28.465},
  {latitude: 49.25, longitude: 28.65},

    
]


export default function App() {

  //const origin = document.getElementById("travelfrom").value;
  //const destination = document.getElementById("travelto").value;


  const origin = {latitude: 49.2328, longitude: 28.465}
  const destination = {latitude: 49.25, longitude: 28.65}

    // const  classes = useStyles();
    // const [value, setValue] = React.useState("recent")
    //const handleChange = (event, newValue) =>{
    //   setValue(newValue);}



//<AppRoute defaultZoom={7} places={places} origin={origin} destination={destination} />
  //        <div></div>         


    return (
      <>
      <UpperToolMenu/>
        <main>
          <UpperElement/> 
          
          <UpControlElement/>
         

         <RouteApp></RouteApp>
         


        </main>
        
        <footer><FooterNew/>  </footer>
        
        </>
    );
}
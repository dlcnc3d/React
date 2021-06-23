import React from "react";


//import useStyles from "./usestyles";

import FooterNew from "./footer";
//import MainElement from "./MainElement";
import UpperToolMenu from "./UpperToolMenu";
import UpperElement from "./UpperElement";
import UpControlElement from "./UpControlElement";
//import GMap from "../Gmap/GMap";

//import Map2 from "./Map2";
//import MapR from "./MapRoute";
//import MapR1 from "./MapRouteLite";

//import RouteApp from "../Gmap/RouteMapR";
//import { func } from "prop-types";

import MapA from "../Gmap/delete/MapA";
import WrappedMap from "../Gmap/wrapper";

import GoogleMapsComponent from "../Gmap/GoogleMapsComponent";


const googleMapsApiKey = "AIzaSyC9_cVatra7UkQioADxTL8DjtySurB77ik";




export default function App() {

  //const origin = document.getElementById("travelfrom").value;
  //const destination = document.getElementById("travelto").value;


 // const origin = {latitude: 49.2328, longitude: 28.465}
  //const destination = {latitude: 49.25, longitude: 28.65}

    // const  classes = useStyles();
    // const [value, setValue] = React.useState("recent")
    //const handleChange = (event, newValue) =>{
    //   setValue(newValue);}


/*
<GoogleMapsComponent
currentLatitude={49.2328} 
currentLongitude={28.465}
destinationLatitude={49.25}
destinationLongitude={28.65}
/>

*/


const [markers, setMarkers] = React.useState([]);


//<AppRoute defaultZoom={7} places={places} origin={origin} destination={destination} />
  //        <div></div>         


    return (
      <>
      <UpperToolMenu/>
        <main>
          <UpperElement/> 
          
          <UpControlElement/>
         

        
         <WrappedMap
         onClick={(event) =>{
           setMarkers((current) =>[
             ...current,
             {
               lat: event.latlng.lat();
               lat: event.latlng.lnj();
             },
           }
           ]);
          }        
         />


        </main>
        
        <footer><FooterNew/>  </footer>
        
        </>
    );
}
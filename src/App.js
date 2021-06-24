import React from "react";

import {
  withGoogleMap,
   
  withScriptjs,
  GoogleMap,
  DirectionsRenderer,
  SearchBox,
  Marker
} from "react-google-maps";
import MyMapComponent from './Gmap/MapA'

//import useStyles from "./usestyles";

import FooterNew from "./Components/footer";
//import MainElement from "./MainElement";
import UpperToolMenu from "./Components/UpperToolMenu";
import UpperElement from "./Components/UpperElement";
import UpControlElement from "./Components/UpControlElement";

import WrappedMap from "./Gmap/wrapper";



export default function App() {

  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);


const onMapClick = React.useCallback((e) => {
  setMarkers((current) => [
    ...current,
    {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      time: new Date(),
    },
  ]);
}, []);


    return (
      <>
      <UpperToolMenu/>
        <main>
          <UpperElement/>           
          <UpControlElement/>
         
         <MyMapComponent         
         
        markers={markers}

         onMapClick={onMapClick}
         
        >
         

        </MyMapComponent>


        </main>        
        <footer><FooterNew/>  </footer>
        
        </>
    );
}
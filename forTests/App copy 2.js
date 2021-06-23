import React from "react";


//import useStyles from "./usestyles";

import FooterNew from "./footer";
import MainElement from "./MainElement";
import UpperToolMenu from "./UpperToolMenu";
import UpperElement from "./UpperElement";
import UpControlElement from "./UpControlElement";
import GMap from "./GMap";

import Map2 from "./Map2";
import MapR from "./MapRoute";

//import { func } from "prop-types";



export default function App() {

    // const  classes = useStyles();
    // const [value, setValue] = React.useState("recent")
    //const handleChange = (event, newValue) =>{
    //   setValue(newValue);}

    return (
      <>
      <UpperToolMenu/>
        <main>
          <UpperElement/> 
          
          <UpControlElement/>
          <MapR/>
          <div></div>
          


        </main>
        
        <footer><FooterNew/>  </footer>
        
        </>
    );
}
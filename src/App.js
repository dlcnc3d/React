/*global google*/
import React, { useEffect } from "react";
import Autocomplete from "./Gmap/Autocomplete";
import MyMapComponent from "./Gmap/MapA";
import FooterNew from "./components/footer";
import UpperToolMenu from "./components/UpperToolMenu";
import UpperElement from "./components/UpperElement";
import UpControlElement from "./components/UpControlElement";
import {  Grid } from "@material-ui/core";


export default function App() {
  
//----------------------------------------------------  

  const [authCheck, setAuthCheck] = React.useState(false);
  const [direction, setDirection] = React.useState(null);
  const [onRoute, setRouteState] = React.useState(false);
  const [markers, setMarkers] = React.useState([]);
  const [coordinates, setCoordinates] = React.useState();
  

  const [dataRoute, setdataRoute] = React.useState({
    fareValue: 0,
    fare: "...",
    distance: "...",
    duration: "...",
  });


  const onRouteClick = React.useCallback(() => {    
      setRouteState(!onRoute);        
  }, []);

  

  function GetPositionClick ()
  {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position !== null) {
          getMarker(
            "Start",
            "Start",
            position.coords.latitude,
            position.coords.longitude
          );
        }
      });
    }
  };




//-------------------------------------------------------------------

  useEffect(() => {
    const start = markers[markers.findIndex((x) => x.type === "Start")];
    const end = markers[markers.findIndex((x) => x.type === "Finish")];

    if (start != null && end != null) calculateRoute(start, end);
  });
  
//-------------------------------------------------------------------

  function GetOncheckedHandler ()
  {
     setAuthCheck(!authCheck);
     authCheck === false ? alert(" Congratulations!!!. You have successfully registered") 
    : alert("Sorry!!!. You unregistered now")    
  }

  //-------------------------------------------------------------------

  function calculateRoute(Start, End) {
    const directionsService = new google.maps.DirectionsService();

    const origin = Start;
    const destination = End;

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.TRANSIT,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          console.log(result);
          setDirection(result);

          if (
            result.routes[0].fare !== undefined &&
            typeof result.routes[0].fare !== "undefined"
          ) {
            console.log(result.routes[0].fare.text);
            const dataRoute = {
              fareValue: result.routes[0].fare.value,
              fare: result.routes[0].fare.text,
              distance: result.routes[0].legs[0].distance.text,
              duration: result.routes[0].legs[0].duration.text,
            };
            
            getDataRoute(dataRoute);
            console.log(result.routes[0].legs[0].distance.text);
            console.log(result.routes[0].legs[0].duration.text);
          }
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }


//-------------------------------------------------------------------

  function onMapClick(e) {

    if(authCheck)
    {getMarker("Start", "Finish", e.latLng.lat(), e.latLng.lng());}
    else  alert("you need to register. Use checkbox")
  }

  //-------------------------------------------------------------------

  function getMarker(typeLabel, type, lat, lng) {
    if (markers.findIndex((x) => x.type === type) !== -1) {
      setMarkers(
        markers.map((item) =>
          item.type === type ? { ...item, lat: lat, lng: lng } : item
        )
      );
    } else {
      setMarkers((current) => [
        ...current,
        {
          lat: lat,
          lng: lng,
          time: new Date(),
          type:
            current.findIndex((x) => x.type === typeLabel) === -1
              ? typeLabel
              : type,
        },
      ]);
    }
    console.log(markers);
  }

  //-------------------------------------------------------------------

  function getDataRoute(dataRoute) {
    if (dataRoute != null)
     setdataRoute(dataRoute);
  }

  //-------------------------------------------------------------------

  function DelAllpointsHandler() {
    setMarkers([]);
    setRouteState(false);
    setDirection (null);
  }

//-------------------------------------------------------------------

function coordinatesChangeHandlerStart(coordinates)
{
 if(authCheck)
 {
   setCoordinates(coordinates);
   getMarker("Start", "Start", coordinates.lat, coordinates.lng);
 }
 else alert("You can not use autocomplite for start point. You have to register. Use checkbox")  
}

//-------------------------------------------------------------------

  function coordinatesChangeHandlerEnd(coordinates) {
    setCoordinates(coordinates);
    getMarker("Finish", "Finish", coordinates.lat, coordinates.lng);
  }

//-------------------------------------------------------------------

  return (
    <>
      <UpperToolMenu/>
     
      <main>
        <UpperElement 
        dataRoute={dataRoute} 
        IsRouteshown={onRoute}
         />
         
        <Grid container spacing={3} justify="center">
          <Grid item>
            Travel From:{" "}
            <Autocomplete
              id="travelfrom"
              type="text"
              name="Start"
              coordinatesChangeHandler={coordinatesChangeHandlerStart}
            />
          </Grid>

          <Grid item>
            Travel to:{" "}
            <Autocomplete
              id="travelTo"
              type="text"
              name="End"
              coordinatesChangeHandler={coordinatesChangeHandlerEnd}
            />
          </Grid>
        </Grid>
        <UpControlElement
          GetPositionHandler={GetPositionClick} 
          GetRouteHandler={onRouteClick}
          DelAllpointsHandler={DelAllpointsHandler}
          GetOncheckedHandler={GetOncheckedHandler}        
        />

        <MyMapComponent
                
          direction={direction}
          markers={markers}
          onMapClick={onMapClick}     
          IsRouteshown={onRoute}
        ></MyMapComponent>
      </main>

      <footer GetPositionHandler={GetPositionClick}>
        <FooterNew />{" "}
      </footer>
    </>
  );
}
/*global google*/
import React, { Component } from "react";



import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    DirectionsRenderer,
    SearchBox,
    Marker,
    InfoWindow
} from "react-google-maps";


import FooterNew from "./Components/footer";
//import MainElement from "./MainElement";
import UpperToolMenu from "./Components/UpperToolMenu";
import UpperElement from "./Components/UpperElement";
import UpControlElement from "./Components/UpControlElement";



class MapA extends Component {
    state = {
        directions: null,

};




componentDidMount() {
   
    const costKm = 2.0;

    let map;
    let listenerStart;
    let listenerEnd;
    let markerStart;
    let markerEnd; 

    var source, destination;
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    


    // Center point of the map
    var startPlace = new google.maps.LatLng(49.2328, 28.465);


    // Options for Center point of the map
    var StartOptions = {
        center: startPlace,
        zoom: 15,
        mapTypeId: 'roadmap'
    }


    // - wrapping the map
    map = new google.maps.Map(document.getElementById('dvMap'), StartOptions);


    // - addDomListener

    google.maps.event.addDomListener(window, 'load', function () {
        new google.maps.places.SearchBox(document.getElementById('travelfrom'));
        new google.maps.places.SearchBox(document.getElementById('travelto'));
        directionsDisplay = new google.maps.DirectionsRenderer({ 'draggable': true });
    });



    // get Start position by Click on map

    function GetStartPositionByClick() {

        google.maps.event.removeListener(listenerEnd);

        listenerStart = map.addListener("click", (e) => {
            if (markerStart && markerStart.setMap) {
                markerStart.setMap(null);
            }
            placeMarkerStart(e.latLng, map);
            document.getElementById("travelfrom").value = e.latLng.lat() + ", " + e.latLng.lng();
        });
    }

    //-------------------

    const checkbox = document.getElementById('checkbox');
    const StartBtn = document.getElementById('StartPoinButton');
    const EndBtn = document.getElementById('EndPoinButton');

           

    // - disable or enable buttons  (simulation of registaration)

    checkbox.addEventListener('change', () =>
    {
        if (StartBtn.disabled && EndBtn.disabled) {
            alert("You are registered user")
            StartBtn.disabled = false;
            EndBtn.disabled = false;
        }
        else {
            alert("You are not registered user")
            StartBtn.disabled = true;
            EndBtn.disabled = true;
        }        
    })



    // get end position by Click on map

    function GetEndPositionByClick() {

        google.maps.event.removeListener(listenerStart);
        listenerEnd = map.addListener("click", (e) => {
            if (markerEnd && markerEnd.setMap) {
                markerEnd.setMap(null);
            }
            placeMarkerEnd(e.latLng, map);
            document.getElementById("travelto").value = e.latLng.lat() + ", " + e.latLng.lng();
        });
    }


    // add markers
    function placeMarkerStart(latLng, map) {
        markerStart = new google.maps.Marker({
            position: latLng,
            map: map,
            label: "start",
        });
        map.panTo(latLng);
    }


    function placeMarkerEnd(latLng, map) {
        markerEnd = new google.maps.Marker({
            position: latLng,
            map: map,
            label: "end",
        });
        map.panTo(latLng);
    }


    // Get Route

    function GetRoute() {

        directionsDisplay.setMap(map);
        source = document.getElementById("travelfrom").value;
        destination = document.getElementById("travelto").value;


        // request for route

        var request = {
            origin: source,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true,  //  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!alternatives: true  must work
        };


        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });

        //Calculation DISTANCE AND DURATION

        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
            origins: [source],
            destinations: [destination],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false


        }, function (response, status) {

            if (status === google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status !== "ZERO_RESULTS") {
                var distance = response.rows[0].elements[0].distance.text;
                var duration = response.rows[0].elements[0].duration.value;
                var dvDistance = document.getElementById("dvDistance");
                duration = parseFloat(duration / 60).toFixed(2);
                var cost = parseFloat(response.rows[0].elements[0].distance.value / 1000 * costKm).toFixed(2);

                dvDistance.innerHTML = "";
                dvDistance.innerHTML += "Distance: " + distance + "<br />";
                dvDistance.innerHTML += "Cost: " + cost + " USD" + "<br />";
                dvDistance.innerHTML += "Time:" + duration + " min";

            } else {
                alert("Unable to find the distance via road.");
            }
        });
    }


    // Get position by GPS

    function GetPosition() {

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };


                    myinfoWindow = new google.maps.InfoWindow();
                    myinfoWindow.setPosition(pos);
                    myinfoWindow.setContent("Location found.");
                    myinfoWindow.open(map);
                    map.setCenter(pos);

                    if (confirm("use your geolocation as a Start Point?")) {
                        document.getElementById("travelfrom").value = position.coords.latitude + ", " + position.coords.longitude;
                    }

                },
                () => {
                    handleLocationError(true, myinfoWindow, map.getCenter());
                }
            );
        } else {
            // If browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }

    }


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
            browserHasGeolocation
                ? "Error: The Geolocation service failed."
                : "Error: Your browser doesn't support geolocation."
        );
        infoWindow.open(map);
    }

}




render() {
    return (
        <>
        <UpperToolMenu/>
          <main>
            <UpperElement/>           
            <UpControlElement/>
           
           <WrappedMap         
           
           //onCreate={addTodo}
  
           onClick={onMapClick}
           
          >
           
  
          </WrappedMap>
  
  
          </main>        
          <footer><FooterNew/>  </footer>
          
          </>
      );
    }
}


export default MapA;
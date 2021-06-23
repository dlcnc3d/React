/*global google*/
import React, { Component } from "react";

//import SearchBox from "react-google-maps/lib/components/places/SearchBox";

import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    DirectionsRenderer,
    SearchBox,
    Marker
} from "react-google-maps";

import UpControlElement from "../Components/UpControlElement";


function getPoint (inputStart, inputEnd) {

    inputStart = UpControlElement (inputStart);
    inputEnd = UpControlElement (inputEnd);

};




class MapA  extends Component {
    state = {
        directions: null,

};



componentDidMount() {

    const refs = {};

    this.setState({
        places: [],
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();

          this.setState({
            places
          });
        }
      });



    
    const directionsService = new google.maps.DirectionsService();

    var startPlace = new google.maps.LatLng(49.2328, 28.465);


    const origin = { lat: 49.2328, lng:  28.465 };
    const destination = { lat: 49.248, lng:  28.65};

    
    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
            
        },
        (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
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
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
            defaultCenter={{ lat: 6.5244, lng:  3.3792 }}
            defaultZoom={13}
          //  apiKey = {'AIzaSyC9_cVatra7UkQioADxTL8DjtySurB77ik'}
           // googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC9_cVatra7UkQioADxTL8DjtySurB77ik`}
        >
            

            <DirectionsRenderer
               
               directions={this.state.directions}



            />
        </GoogleMap>
    ));

    

    return (
        <div>
            <GoogleMapExample
                containerElement={<div style={{ height: `500px`, width: "800px", alignItems:"center" }}  />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>


       );
    }
}

export default MapA;
/*global google*/
import React, { Component } from "react";



import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    DirectionsRenderer,
    SearchBox,
    Marker
} from "react-google-maps";



class MapA extends Component {
        directions: null,

};


componentDidMount() {
    const directionsService = new google.maps.DirectionsService();

    const origin = { lat: 6.5244, lng:  3.3792 };
    const destination = { lat: 6.4667, lng:  3.4500};

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


functiom GetRouteTo (Start, End) {
return(
<DirectionsRenderer
               
               directions={this.state.directions}

)   


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
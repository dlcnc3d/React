import React from 'react';

import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
//import GoogleApiWrapper from 'google-maps-react';




export class Maps extends React.Component {
    render() {
        const mapStyles = {
            width: "80%",
            height: "80%",
            position: "center"
          };
          return (
            <Map
              google={this.props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={{lat: 49.2328, lng: 28.465 } }
            >
              <Marker position={{lat: 49.2328, lng: 28.465 } } />
            </Map>
          );
        }
      }

      




      



  export default GoogleApiWrapper({
    apiKey: 'AIzaSyC9_cVatra7UkQioADxTL8DjtySurB77ik'
  })(Maps);
import { compose, withProps, withState,withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker,OverlayView,DirectionsRenderer } from "react-google-maps";

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
})

const MyMapComponent = compose(
  
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC9_cVatra7UkQioADxTL8DjtySurB77ik",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `700px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
   
    withScriptjs,
    withGoogleMap,

)((props) =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 49.23, lng: 28.43 }}
        onClick={props.onMapClick}
    > 
        {props.markers.map(p =><Marker
        key={p.lat}
      position={{ lat: p.lat, lng: p.lng }}
     
    >
      
    </Marker>)}
   
    </GoogleMap>


)

export default MyMapComponent;
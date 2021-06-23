import React, { useState } from "react";
import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker,
    InfoWindow 
} from "react-google-maps";
import properties from "../Gmap/properties.json";




function MapComponent() {
    const [selectedProperty, setSelectedProperty] = useState(null);

    return (
        <GoogleMap 
            defaultZoom={12}
            defaultCenter={{ lat: 51.23651480350905, lng: -0.5703780104611352 }}
        >
            {properties.map(property => (
                <Marker 
                    key={property.id} 
                        lat: property.lat, 
                    }}
                    
                    onClick ={() => {
                        setSelectedProperty(property);
                    }}
                />
            ))}

            {selectedProperty && (
                <InfoWindow
                    position={{
                        lat: selectedProperty.lat, 
                        lng: selectedProperty.lng
                    }}
                    onCloseClick={() => {
                        setSelectedProperty(null);
                    }}
                >
                    <div>
                        <h4>{selectedProperty.name}</h4>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(MapComponent));

function MapNew() {
    return (
        <WrappedMap 
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9_cVatra7UkQioADxTL8DjtySurB77ik" 
            loadingElement={<div style={{ height:"100%"}} />}
            containerElement={<div style={{ height:"100%"}} />}
            mapElement={<div style={{ height:"100%"}} />}
        />
    )
}

export default MapNew;
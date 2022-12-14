import React from 'react';
import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";

const MyGoogleMap = (props) => {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map longitude={props.longitude} latitude={props.latitude}/>;

};


function Map(props) {
    const center = {lat: props.latitude, lng: props.longitude};

    return (
        <div className="newsInline1" style={{width: 500}}>
            <div style={{display: "flex"}}>
                <div style={{width: 500}}>
                    <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
                        <div style={{height: "500px"}}>
                            <Marker
                                title={'The city center'}
                                key={1}
                                position={center}
                            />
                        </div>
                    </GoogleMap>
                </div>
            </div>
        </div>
    );
}

export default MyGoogleMap;
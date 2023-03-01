import React, { Component } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const GoogleMapComp = (props) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDT7MbkFlqBBvX05rTt5V1gN2JcGksRNoc"
    })

    const [map, setMap] = React.useState(null);

    // const onLoad = React.useCallback(function callback(map) {
    //     // This is just an example of getting and using the map instance!!! don't just blindly copy!
    //     const bounds = new window.google.maps.LatLngBounds(center);
    //     map.fitBounds(bounds);
    //     console.log(map);
    //     setMap(map)
    // }, [])

    // const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null)
    // }, [])

    console.log('geocorrdinates:', props.geoCoordinates);
    return isLoaded ? (
        <GoogleMap
            mapContainerClassName='styleMapContainer'
            center={props.geoCoordinates}
            zoom={1}
            // onLoad={onLoad}
            // onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(GoogleMapComp);
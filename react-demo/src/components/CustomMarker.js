import React from 'react'
import { Marker, Popup } from "react-leaflet";
import { markerInfoList } from "./MarkerUtility";

// Custom marker with icons and text from utility class
const CustomMarker = (element, index, markerType) => {
    return (
        <Marker position={element.latlng}
            key={index}
            icon={markerInfoList()[markerType].markerIcon}>
            <Popup>
                <b>
                    {markerInfoList()[markerType].text} No: {index+1}<br/>
                    {element.latlng.lat}, {element.latlng.lng}
                </b>
            </Popup>
        </Marker>
    )
}
export default CustomMarker

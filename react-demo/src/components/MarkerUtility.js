import { Home, LinearScale, Restaurant, Shop, WhereToVote } from '@material-ui/icons';
import { Icon } from 'leaflet';
import React from 'react'
import { Circle, useMapEvents } from "react-leaflet";

let markerType = 0

export const setMarkerType = (mType) => {
    markerType = mType
}

export const getMarkerType = () => {
    return markerType
}

export const markerInfoList = () => {
    return [
        {
            text: 'Shop',
            markerIcon: new Icon({
                key: 0,
                iconUrl: 'icons/shop.png',
                iconSize: [40, 40],
                iconAnchor: [20, 40],
                popupAnchor: [0, -40]
            }),
            menuIcon: <Shop />
        },
        {
            text: 'Home',
            markerIcon: new Icon({
                key: 1,
                iconUrl: 'icons/home.png',
                iconSize: [40, 40],
                iconAnchor: [20, 40],
                popupAnchor: [0, -40]
            }),
            menuIcon: <Home />
        },
        {
            text: 'Restaurant',
            markerIcon: new Icon({
                key: 2,
                iconUrl: 'icons/restaurant.png',
                iconSize: [40, 40],
                iconAnchor: [20, 40],
                popupAnchor: [0, -40]
            }),
            menuIcon: <Restaurant />
        },
        {
            text: 'Path',
            markerIcon: new Icon({
                key: 3,
                iconUrl: 'icons/path.png',
                iconSize: [10, 10],
                iconAnchor: [2, 10],
                popupAnchor: [0, -10]
            }),
            menuIcon: <LinearScale />
        },
        {
            text: 'Default',
            markerIcon: new Icon({
                key: 4,
                iconUrl: 'icons/default.png',
                iconSize: [40, 40],
                iconAnchor: [20, 40],
                popupAnchor: [0, -40]
            }),
            menuIcon: <WhereToVote />
        }
    ]
}

export const getMarkerInfo = (index) => {
    return markerInfoList()[index]
}

const MarkerUtility = ({ addMarker }) => {
    useMapEvents({
        click(e) {
            addMarker(e)
        },
    })

    return (
        <>
        </>
    )
}

export default MarkerUtility

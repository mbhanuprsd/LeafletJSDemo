import { MapContainer, TileLayer, LayersControl, LayerGroup, Polyline } from "react-leaflet";
import { CRS, LatLngBounds } from 'leaflet';
import { useState } from 'react';
import MarkerUtility, { getMarkerInfo, getMarkerType, markerInfoList } from "./MarkerUtility";
import CustomMarker from './CustomMarker'

const mapSW = [4096, 0],
    mapNE = [0, 4096];

const onMapCreation = (map) => {
    map.setMaxBounds(
        new LatLngBounds(
            map.unproject(mapSW, map.getMaxZoom()),
            map.unproject(mapNE, map.getMaxZoom())
        )
    )
}

function MapView() {
    const [mapData, setmapData] = useState({
        center: [0, 0],
        zoom: 1,
        markerData: [],
    })

    const addMarker = (e) => {
        console.log(getMarkerType())
        const data = { latlng: e.latlng, type: getMarkerType() }
        setmapData({
            markerData: [...mapData.markerData, data]
        })
    }

    return (
        <div className="App">
            <MapContainer
                center={mapData.center}
                zoom={mapData.zoom}
                scrollWheelZoom={true}
                crs={CRS.Simple}
                whenCreated={onMapCreation}>
                <MarkerUtility addMarker={addMarker} />
                <TileLayer
                    url='maps/citypark/{z}/{x}/{y}.png'
                    minZoom={0}
                    maxZoom={4}
                    noWrap={true}>
                </TileLayer>
                <LayersControl>
                    {markerInfoList().map((info, ind) => (
                        <LayersControl.Overlay key={ind} name={info.text} checked={true}>
                            <LayerGroup>
                                {ind === 3 && <Polyline positions={mapData.markerData.filter((mark) => mark.type === ind)
                                    .map((ele, i) => ele.latlng)} />}
                                {mapData.markerData.filter(mark => mark.type === ind)
                                    .map((element, index) => (
                                        CustomMarker(element, index, ind)
                                    ))}
                            </LayerGroup>
                        </LayersControl.Overlay>
                    ))}
                </LayersControl>
            </MapContainer>
        </div>
    );
}

export default MapView;

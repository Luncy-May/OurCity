import React from 'react'
import {MapContainer, TileLayer, Popup, Marker} from "react-leaflet"
const LeafletMap = ({latitude, longitude}) => {
    return (
        <div className='w-[400px] h-[300px]'>
            <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[latitude, longitude]}>
                    <Popup>
                        Your location here
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default LeafletMap

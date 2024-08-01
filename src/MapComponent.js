// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issue with Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const cities = [
  { name: 'Seoul', position: [37.5665, 126.9780] },
  { name: 'Beijing', position: [39.9042, 116.4074] },
  { name: 'Abu Dhabi', position: [24.4539, 54.3773] },
  { name: 'Singapore', position: [1.3521, 103.8198] },
];

const MapComponent = () => {
  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '400px', width: '100%' }} worldCopyJump={true} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {cities.map((city, index) => (
        <Marker key={index} position={city.position}>
          <Popup>{city.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;



import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customMarker = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const MapComponent = ({ lat, lng }) => {
  return (
    <div className="map-container" style={{ height: "300px", width: "100%" }}>
      <MapContainer center={[lat, lng]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lng]} icon={customMarker}>
          <Popup>Selected Profile Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;













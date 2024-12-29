import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const LocationMap = ({ position, popUp }) => {
  return (
    <div className="w-full">
      <MapContainer
        center={position}
        zoom={8}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>{popUp}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

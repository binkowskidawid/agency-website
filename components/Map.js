import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
	return (
		<MapContainer
			center={[50.79646, 19.12409]}
			zoom={11}
			scrollWheelZoom={false}
            style={{height: "100%", width: "100%"}}
		>
			<Marker
				position={[50.79646, 19.12409]}
				draggable={true}
				animate={true}
			>
				<Popup>Hey ! you found me</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;

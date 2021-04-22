import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import iconLocation from "../images/icon-location.svg";

export const Map = (props) => {
  let customIcon = L.icon({
    iconUrl: iconLocation,
    iconSize: [48, 56],
    iconAnchor: [48, 28],
  });

  return (
    <MapContainer {...props} style={{ width: "100%", height: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.markerPosition} icon={customIcon} />
    </MapContainer>
  );
};

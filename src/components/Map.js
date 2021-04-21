import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export const Map = (props) => {
  return (
    <MapContainer {...props}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.markerPosition} />
    </MapContainer>
  );
};
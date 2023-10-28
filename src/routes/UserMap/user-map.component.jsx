import React, { useEffect, useRef } from "react";
import MarkerSvg from "../../assets/location-dot-solid.svg";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./user-map.styles.css";

const UserMap = () => {
  const zoom_lvl = 13;
  const mapRef = useRef(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const coords = [latitude, longitude];

          if (mapRef.current) {
            mapRef.current.remove();
          }

          const map = L.map("map").setView(coords, zoom_lvl);
          mapRef.current = map;

          L.tileLayer(
            "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
            {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
              subdomains: "abcd",
              maxZoom: 20,
            }
          ).addTo(map);

          const customIcon = L.icon({
            iconUrl: MarkerSvg,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
          });

          L.marker(coords, { icon: customIcon })
            .addTo(map)
            .bindPopup("Locatia ta")
            .openPopup();

          L.circle(coords, {
            color: "red",
            fillColor: "#f03",
            fillOpacity: 0.3,
            radius: 2000,
            stroke: false,
          }).addTo(map);

          map.on("click", (mapEvent) => console.log(mapEvent.latlng));
        },
        () => {
          alert("Nu am putut să te localizez!");
        }
      );
    }
  }, []);

  return (
    <div>
      <h1 className="harta-title">
        Aici poti vedea toate ONG-urile din apropierea ta!{" "}
      </h1>
      <div
        id="map"
        style={{ height: "500px", width: "90%", margin: "2rem auto" }}
      ></div>
    </div>
  );
};

export default UserMap;

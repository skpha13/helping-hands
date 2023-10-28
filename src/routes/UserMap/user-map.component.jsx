import React, { useEffect, useRef, useState } from "react";
import MarkerSvg from "../../assets/location-dot-solid.svg";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./user-map.styles.css";
import Spinner from "../../components/Spinner/spinner.component";

const UserMap = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
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

          L.marker([44.40545780750206, 26.09920935195409], { icon: customIcon })
            .addTo(map)
            .bindPopup("ONG 1")
            .openPopup();

          L.marker([44.39331559125859, 26.043945138016127], {
            icon: customIcon,
          })
            .addTo(map)
            .bindPopup("Strop De Fericire")
            .openPopup();

          L.circle(coords, {
            color: "red",
            fillColor: "#f03",
            fillOpacity: 0.3,
            radius: 2000,
            stroke: false,
          }).addTo(map);

          // map.on("click", (mapEvent) => console.log(mapEvent.latlng));
          map.on("load", () => {
            setIsMapLoaded(true);
          });
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
      >
        {!isMapLoaded ? <Spinner /> : ""}
      </div>
      {/* {isMapLoaded ? (
        <div
          id="map"
          style={{ height: "500px", width: "90%", margin: "2rem auto" }}
        ></div>
      ) : (
        <Spinner />
      )} */}
    </div>
  );
};

export default UserMap;

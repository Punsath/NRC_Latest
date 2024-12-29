import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function FindusHere() {
  const position = [7.2135438, 79.9216123];
  return (
    <div>
      <h1 className="text-[#004066] md:mb-10 mb-6 font-Montserrat md:text-[30px] text-[16px] font-[700]  md:leading-[40px] leading-[21px] text-center font-nunito">
        Find Us Here
      </h1>
      <p className="text-center mx-auto md:mb-10 mb-6 md:w-[936px] md:text-[18px] text-[12px] font-nunito text-[#464343] font-[500]">
        Our offices are conveniently located, and you can use the map below to
        get directions. Whether you're visiting for inquiries or meetings, our
        team is ready to assist you.
      </p>
      <div className="md:pl-20 md:pr-20 pl-5 pr-5">
        <MapContainer
          center={position}
          zoom={13}
          style={{ width: "100%", height: "400px"  }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>
              Our office location. <br /> Easily accessible.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default FindusHere;

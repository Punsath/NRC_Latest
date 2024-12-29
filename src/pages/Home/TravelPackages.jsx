import React from "react";
import { motion } from "framer-motion";
import MapImage2 from "./../../assets/images/3dmap.png";
import { MappinIcon } from "../../utils/icons";

export const TravelPackages = () => {
  const newLocations = [
    "Bingiriya",
    "Mannar",
    "Jaffna",
    "Mullativu",
    "Trincomalee",
    "Thissamaharama",
    "Kilinochchi",
    "Batticaloa",
    "Balapitiya",
  ];

  const existingLocations = [
    "Anuradhapura",
    "Wadduwa",
    "Rathnapura",
    "Negombo",
    "Colombo",
    "Matara",
  ];

  return (
    <section className="w-full h-auto md:h-[120vh] pb-16 bg-[#BDD5DF] px-5 md:px-[7%] py-8 mt-36 flex flex-col justify-center items-center font-montserrat">
      <div className="flex flex-col items-center w-full gap-8 mt-8 md:flex-row">
        {/* Left side with locations */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-[50%] p-4 md:p-8 bg-[#004066] shadow-md rounded-[10px]"
        >
          <h2 className="mb-4 md:mb-8 text-left text-white text-[14px] leading-[17px]">OUR WASTE COLLECTION ZONES</h2>
          <h3 className="mb-4 md:mb-8 text-left text-white text-[24px] md:text-[32px] leading-[30px] md:leading-[39px] font-semibold">
            MRF & Buy-back center locations
          </h3>
          <div className="grid grid-cols-2 gap-8 text-white">
            <div>
              <h4 className="mb-4 text-[20px] font-semibold">New Locations</h4>
              <div className="space-y-2">
                {newLocations.map((location, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span role="img" aria-label="location">
                      <MappinIcon />
                    </span>
                    <span>{location}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-[20px] font-semibold">Existing Locations</h4>
              <div className="space-y-2">
                {existingLocations.map((location, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span role="img" aria-label="location">
                      <MappinIcon />
                    </span>
                    <span>{location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side with map image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-center w-full md:w-1/2"
        >
          <img src={MapImage2} className="object-cover w-full h-auto md:h-full" alt="Map" />
        </motion.div>
      </div>
    </section>
  );
};

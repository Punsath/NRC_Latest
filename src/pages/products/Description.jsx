import React from "react";
import picture1 from "./../../assets/images/products/picture1.png";
import picture2 from "./../../assets/images/products/picture3.png";

export const Description = () => {
  return (
    <div className="md:px-[6%] px-[4%] mt-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 md:text-[14px] text-[10px] text-black font-nunito font-semibold leading-[80px] md:mb-8 mb-2">
        <a href="/" className="hover:underline">
          HOME
        </a>
        <span>▸</span>
        <span>RESOURCES AND PRODUCTS</span>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Heading */}
        <div className="md:w-[40%]">
          <h1 className="text-[#004066] font-Montserrat md:text-[60px] text-[24px] font-[400] md:leading-[70px]">
          Made from Trash! <br className="hidden md:block" />
          </h1>
        </div>

        {/* Description */}
        <div className="md:w-[60%]">
          <p className="text-gray-700 font-nunito text-[16px] md:text-[18px] font-[400] leading-[30px]">
          At NRC, we revolutionize waste management by transforming post-consumer and post-industrial waste into innovative materials that contribute to a sustainable future. Through advanced recycling technologies and practices, we process significant volumes of plastic waste and other recyclables each month, effectively diverting them from landfills and oceans. Our commitment to environmental stewardship drives our mission to create value from waste while reducing ecological footprints.
          </p>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 grid-cols-1 gap-8">
        {/* Image 1 */}
        <div className="flex flex-col items-center">
          <img
            src={picture1}
            alt="Image Description 1"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <p className="mt-4 text-center text-gray-700 font-nunito text-[16px] leading-[26px]">
          NRC buys various types of post-consumer and post-industrial waste  
          </p>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center">
          <img
            src={picture2}
            alt="Image Description 2"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <p className="mt-4 text-center text-gray-700 font-nunito text-[16px] leading-[26px]">
          NRC recycled various types of post-consumer and post-industrial plastic waste 
          </p>
        </div>
      </div>

   
      <div className="space-y-8 mt-16">
  {/* Storied Materials Section */}
  <div className="bg-white shadow-md rounded-lg border-l-4 border-[#004066] p-6">
    <h2 className="font-Montserrat text-[22px] font-semibold text-[#004066] mb-3">
      Storied Materials
    </h2>
    <p className="text-gray-700 font-nunito text-[16px] md:text-[18px] leading-[26px]">
      We develop and manage custom supply chains for unique post-consumer
      materials. NRC can supply authentic and traceable PET, HDPE, LDPE, PP,
      PVC, ABS, and Aluminum raw materials collected from the most polluted
      locations across the NEGAMBO region, from oceans to the landside.
    </p>
  </div>

  {/* High-Quality Recycled Materials Section */}
  <div className="bg-white shadow-md rounded-lg border-l-4 border-[#004066] p-6">
    <h2 className="font-Montserrat text-[22px] font-semibold text-[#004066] mb-3">
      High-quality Recycled Materials
    </h2>
    <p className="text-gray-700 font-nunito text-[16px] md:text-[18px] leading-[26px]">
      We deliver high-quality post-industrial and post-consumer materials
      for high-end product manufacturing with a TDS guarantee.
    </p>
  </div>

  {/* Circular Polymers Section */}
  <div className="bg-white shadow-md rounded-lg border-l-4 border-[#004066] p-6">
    <h2 className="font-Montserrat text-[22px] font-semibold text-[#004066] mb-3">
      Circular Polymers
    </h2>
    <p className="text-gray-700 font-nunito text-[16px] md:text-[18px] leading-[26px]">
      NRC circular polymers are recycled polymers that are produced from
      either post-consumer plastic wastes or industrial plastic wastes,
      which come to the global market in bales, flakes, and pallets.
    </p>
  </div>
</div><br /><br />



    </div>
  );
};

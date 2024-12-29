import React from "react";
import brand from "./../../assets/images/products/brand.jpeg";

export const Cwaste = () => {
  return (
    <div className="px-4 md:px-[6%]">

      {/* CWASTE Section */}
      <div className="text-center md:text-left mt-8 px-6 py-8">
  <h2 className="text-[#004066] font-Montserrat md:text-[33px] text-[32px] font-[700] leading-[48px]">
    CWASTE: Transforming Ocean Waste into Valuable Products
  </h2>
  <p className="text-[#494949] font-nunito text-[18px] md:text-[18px] font-[400] leading-[28px] mt-6 max-w-[900px] mx-auto">
    CWASTE, the flagship brand of NRC, embodies our commitment to sustainability and environmental conservation. The name "CWASTE" signifies our dedication to collecting and repurposing waste materials recovered from coastlines, trash barriers, waterways, and the ocean.
    <br />
    <br />
    Under the CWASTE brand, we transform these discarded materials into innovative, high-quality products that contribute to a circular economy and promote responsible consumption and waste management. CWASTE represents a cleaner, brighter future for our planet.
  </p>
  
</div>



      {/* NRC Products Section */}
      <div className="bg-gradient-to-r from-[#004066] to-[#072938] py-12 mt-16 rounded-xl">
        <div className="text-center">
          <h2 className="text-white font-Montserrat text-[28px] font-[700] mb-8">
            NRC Products: Sustainable Solutions Made from Recycled Materials
          </h2>
          <p className="text-white font-nunito text-[18px] md:text-[20px] font-[400] leading-[30px] max-w-[900px] mx-auto mb-8">
          At NRC, we are committed to creating products that not only meet everyday needs but also contribute to a more sustainable future. Our products are crafted from raw materials collected from authentic sources, with full material traceability to ensure transparency and accountability.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 max-w-[1000px] mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
            <h3 className="text-[#004066] font-Montserrat text-[24px] font-[600] mb-4">Household Plastic Products</h3>
            <p className="text-gray-700 font-nunito text-[16px] md:text-[18px] font-[400] leading-[26px]">
              Recycled plastic items made for everyday household use, combining sustainability with practicality.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
            <h3 className="text-[#004066] font-Montserrat text-[24px] font-[600] mb-4">Industrial Accessories</h3>
            <p className="text-gray-700 font-nunito text-[16px] md:text-[18px] font-[400] leading-[26px]">
              Durable, recycled materials engineered for industrial use, helping reduce waste in the manufacturing sector.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
            <h3 className="text-[#004066] font-Montserrat text-[24px] font-[600] mb-4">Gardening Pots</h3>
            <p className="text-gray-700 font-nunito text-[16px] md:text-[18px] font-[400] leading-[26px]">
              Eco-friendly gardening pots made from recycled materials, perfect for sustainable urban gardening.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
            <h3 className="text-[#004066] font-Montserrat text-[24px] font-[600] mb-4">WPC Products (Wood-Plastic Composites)</h3>
            <p className="text-gray-700 font-nunito text-[16px] md:text-[18px] font-[400] leading-[26px]">
              Sustainable wood-plastic composite products ideal for construction and outdoor use, combining strength and eco-friendliness.
            </p>
          </div>
        </div>

      
      </div>

    {/* Product Logo Section */}
<div className="mt-16 text-center">
  {/* Container for the section */}
  <div className="bg-[#EDF5F7] p-12 rounded-xl shadow-2xl hover:scale-105 transform transition-all duration-300 max-w-[700px] mx-auto">
    {/* Logo Image with enhanced styling */}
    <img
      src={brand}
      alt="Product Logo"
      className="w-[250px] h-[auto] mx-auto mb-6 border-4 border-[#004066] rounded-full shadow-md transform transition-all duration-300 hover:scale-110"
    />

    {/* Description Text */}
    <p className="text-gray-700 font-nunito text-[16px] md:text-[18px] font-[400] leading-[26px] mx-auto max-w-[800px] mt-6">
      Our WPC products are designed to minimize plastic footprints, offering you a more eco-friendly alternative for everyday use. In addition, we offer raw materials such as Bales, Flakes, and Compounds—all derived from post-consumer waste collected from coastal and riverbank areas. These materials are ideal for further recycling or manufacturing purposes and are available for purchase today. By choosing NRC, you're supporting a cleaner, greener planet, one product at a time.
    </p>
    
    {/* Call to Action */}
    <div className="mt-8">
    <a
  href="#"
  className="text-white font-Montserrat text-[18px] font-[700] bg-[#004066] py-3 px-6 rounded-lg hover:bg-[#00324f] transition duration-300 pointer-events-none"
>
  Explore Our Products
</a>

    </div>
  </div>
</div>



    </div>
  );
};

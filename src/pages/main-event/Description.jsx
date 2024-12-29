import React from "react";
import { Link } from 'react-router-dom';



export const Description = () => {
  return (
    <div className="md:px-[6%] px-[4%] mt-8">
   


      {/* Project Activities */}
      <div className="mt-12 bg-gradient-to-r from-[#E3F2FD] to-[#F0F4FA] p-6 rounded-lg shadow-md">
        <h2 className="text-[#004066] font-Montserrat md:text-[36px] text-[20px] font-[600] mb-6">
          Explore Our Key Activities
        </h2>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-[#004066] text-white flex items-center justify-center rounded-full">
              1
            </div>
            <div>
              <h3 className="text-black font-Montserrat text-[18px] font-[500] mb-2">
                Education and Awareness
              </h3>
              <ul className="list-disc list-inside text-black font-nunito text-[14px] md:text-[16px] font-[400]">
                <li>School Education and Awareness</li>
                <li>Community Education and Awareness</li>
                <li>Women Groups for Community Development</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-[#004066] text-white flex items-center justify-center rounded-full">
              2
            </div>
            <div>
              <h3 className="text-black font-Montserrat text-[18px] font-[500] mb-2">
                Intercepting Plastic Waste
              </h3>
              <ul className="list-disc list-inside text-black font-nunito text-[14px] md:text-[16px] font-[400]">
                <li>Drop-off Recycling</li>
                <li>River Interception</li>
                <li>Mobile Collections</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-[#004066] text-white flex items-center justify-center rounded-full">
              3
            </div>
            <div>
              <h3 className="text-black font-Montserrat text-[18px] font-[500] mb-2">
                Recycling and Upcycling
              </h3>
              <ul className="list-disc list-inside text-black font-nunito text-[14px] md:text-[16px] font-[400]">
                <li>Material Recovery Facility (MRF) Developments</li>
                <li>Recycling Plant Operations</li>
                <li>Operational Zones</li>
                <li>Collection Centers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Get Involved */}
      <div className="mt-12  text-[#004066] p-8  max-w-3xl mx-auto">
  <h2 className="font-Montserrat text-[30px] md:text-[38px] font-semibold text-center mb-6">
    Get Involved
  </h2>
  <p className="font-nunito text-[16px] md:text-[18px] font-light leading-[28px] text-center mb-8 text-black">
  Join us in making a positive impact! We invite individuals, volunteers, and organizations to support
  the BLUECAP project. Together, we can create sustainable change for our coastal communities and marine ecosystems.
</p>

  <div className="flex justify-center">
    <Link 
      to="/contact-us"
      className="px-8 py-3 bg-[#004066] text-white rounded-lg shadow-lg text-lg font-medium transition duration-300 ease-in-out transform hover:bg-[#005A87] hover:scale-105 focus:ring-2 focus:ring-[#004066]"
    >
      Join with us
    </Link>
  </div>
</div>

    </div>
  );
};
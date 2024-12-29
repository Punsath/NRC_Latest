import React from "react";

export const Description = () => {
  return (
    <div className="p-8 md:p-16">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 md:text-[14px] text-[10px] text-black font-nunito font-semibold leading-[80px] md:mb-8 mb-2">
        <a href="/" className="hover:underline">
          HOME
        </a>
        <span>▸</span>
        <span>CONTACT US</span>
      </div>

      <div className=" md:flex-row items-center ">
        <div className="text-center">
          <h1 className="text-[#004066] font-Montserrat md:text-[30px] text-[18px] font-[600]  md:leading-[70px] leading-[18px] mb-8 md:mb-0">
            Have a Question?We're Here to Help!
          </h1>
          <p className="max-w-[910px] md:mx-auto mx-1 md:text-[18px] text-[12px] font-Montserrat font-[400] leading-[24px]  text-[#464343]">
            Please fill out the form below with your query, and our team will
            get back to you as soon as possible. Whether you need more
            information about our services, have a specific request, or just
            want to learn more about your travel options, we’re ready to assist.
          </p>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import img1 from '../../assets/images/products/pro1.jpg';
import img2 from '../../assets/images/products/pro2.jpg';
import img3 from '../../assets/images/products/pro3.jpg';

export const TipsAndTricks = () => {
  return (
    <div className="mt-16">
      {/* First Tip Section */}
      <div className="flex md:flex-row flex-col justify-between md:items-center mb-16 md:gap-20 gap-10">
        {/* Left side: Image */}
        <div className="md:ml-24 ml-8 flex">
          <img
            src={img3}
            alt="PackSmart"
            className="md:w-[450px] md:h-[350px] w-[170px] h-[120px] object-cover"
          />
          <div className="flex md:hidden items-center ml-8">
            <div className="h-[25px] w-[3px] bg-[#004066] mr-2"></div>
            <div className="text-black">
              <span className="font-nunito font-semibold text-[20px] leading-[30px]">Pack Smart</span>
            </div>
          </div>
        </div>

        {/* Right side: Text Content */}
        <div className="md:mr-24 mx-6 md:mx-0">
          <div className="hidden md:flex items-center mb-4 -ml-8">
            <div className="h-[25px] w-[3px] bg-[#004066] mr-2"></div>
            <div className="text-black">
              <span className="font-nunito font-semibold text-[20px] leading-[30px]">Target Plastic wastes</span>
            </div>
          </div>

          <div className="bg-[#D3E1F4] rounded-[5px] md:w-[730px] w-full p-4">
            <h3 className="font-semibold text-[16px] font-nunito leading-[30px]">Post consumer soild plastic</h3>
            
          </div>
          <div className="bg-[#EFF1F3] rounded-[5px] md:w-[730px] w-full p-4 mt-4">
            <h3 className="font-semibold text-[16px] font-nunito leading-[30px]">Post industrial solid plastic</h3>
           
          </div>
          <div className="bg-[#D3E1F4] rounded-[5px] md:w-[730px] mt-4 w-full p-4">
            <h3 className="font-semibold text-[16px] font-nunito leading-[30px]">Post industrial soft plastic</h3>
            
          </div>
          <div className="bg-[#EFF1F3] rounded-[5px] md:w-[730px] w-full p-4 mt-4">
            <h3 className="font-semibold text-[16px] font-nunito leading-[30px]">Fishing gears</h3>
           
          </div>
        </div>
      </div>

      {/* Second Tip Section */}
<div className="flex md:flex-row flex-col justify-between md:items-center mb-16 md:gap-20 gap-10">
  {/* Right side: Image */}
  <div className="md:mr-24 flex md:order-2 order-first justify-center">
    <div className="flex md:hidden items-center mb-4">
      <div className="h-[25px] w-[3px] bg-[#004066] mr-2"></div>
      <div className="text-black">
        <span className="font-nunito font-semibold text-[20px] leading-[30px]">recycled polymer</span>
      </div>
    </div>
    <img
      src={img1}
      alt="Stay Hydrated"
      className="md:w-[450px] md:h-[350px] w-[170px] h-[120px] object-cover"
    />
  </div>

  {/* Left side: Text Content */}
  <div className="md:ml-32 mx-6 md:mx-0">
    <div className="hidden md:flex items-center mb-4 -ml-8">
      <div className="h-[25px] w-[3px] bg-[#004066] mr-2"></div>
      <div className="text-black">
        <span className="font-nunito font-semibold text-[20px] leading-[30px]">Recycled polymer</span>
      </div>
    </div>

    <div className="bg-[#D3E1F4] rounded-[5px] md:w-[730px] w-full p-4">
      <h3 className="font-semibold text-[16px] font-nunito leading-[30px]">Pet bales</h3>
    </div>
    <div className="bg-[#EFF1F3] rounded-[5px] md:w-[730px] w-full p-4 mt-4">
      <h3 className="font-semibold text-[16px] font-nunito leading-[30px]">PP/PE/HIPS/ABS Flakes</h3>
    </div>
    <div className="bg-[#D3E1F4] rounded-[5px] md:w-[730px] mt-4 w-full p-4">
      <h3 className="font-semibold text-[16px] font-nunito leading-[30px]">PP/PE pellets</h3>
    </div>
    <div className="bg-[#EFF1F3] rounded-[5px] md:w-[730px] w-full p-4 mt-4">
      <h3 className="font-semibold text-[16px] font-nunito leading-[30px]">Fishnet Crush</h3>
    </div>
    <div className="bg-[#D3E1F4] rounded-[5px] md:w-[730px] mt-4 w-full p-4">
      <h3 className="font-semibold text-[16px] font-nunito leading-[30px]">WPC compunds</h3>
    </div>
  </div>
</div>

<div className="flex md:flex-row flex-col justify-between md:items-center mb-16 md:gap-20 gap-10">
        {/* Left side: Image */}
        <div className="md:ml-24 ml-8 flex">
          <img
            src={img2}
            alt="PackSmart"
            className="md:w-[450px] md:h-[350px] w-[170px] h-[120px] object-cover"
          />
          <div className="flex md:hidden items-center ml-8">
            <div className="h-[25px] w-[3px] bg-[#004066] mr-2"></div>
            <div className="text-black">
              <span className="font-nunito font-semibold text-[20px] leading-[30px]">Pack Smart</span>
            </div>
          </div>
        </div>

        {/* Right side: Text Content */}
        <div className="md:mr-24 mx-6 md:mx-0">
          <div className="hidden md:flex items-center mb-4 -ml-8">
            <div className="h-[25px] w-[3px] bg-[#004066] mr-2"></div>
            <div className="text-black">
              <span className="font-nunito font-semibold text-[20px] leading-[30px]">Products</span>
            </div>
          </div>

          <div className="bg-[#D3E1F4] rounded-[5px] md:w-[730px] w-full p-4">
            <h3 className="font-semibold text-[16px] font-nunito leading-[30px]">Household plastic products</h3>
            
          </div>
          <div className="bg-[#EFF1F3] rounded-[5px] md:w-[730px] w-full p-4 mt-4">
            <h3 className="font-semibold text-[16px] font-nunito leading-[30px]">Industrial Accessories</h3>
           
          </div>
          <div className="bg-[#D3E1F4] rounded-[5px] md:w-[730px] mt-4 w-full p-4">
            <h3 className="font-semibold text-[16px] font-nunito leading-[30px]">WPC products</h3>
            
          </div>
          
        </div>
      </div>

    </div>
  );
};

export default TipsAndTricks;

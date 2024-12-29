import React from 'react';
import PackSmart from '../../assets/images/general-tips-and-tricks/PackSmart.png';
import StayHydrated from '../../assets/images/general-tips-and-tricks/StayHydrated.png';

export const TipsAndTricks = () => {
  return (
    <div className="mt-16">
      {/* First Tip Section */}
      <div className="flex md:flex-row flex-col justify-between md:items-center mb-16 md:gap-20 gap-10">
        {/* Left side: Image */}
        <div className="md:ml-24 ml-8 flex">
          <img
            src={PackSmart}
            alt="PackSmart"
            className="md:w-[450px] md:h-[350px] w-[170px] h-[120px] object-cover"
          />
          <div className="flex md:hidden items-center ml-8">
            <div className="h-[25px] w-[3px] bg-[#FF914C] mr-2"></div>
            <div className="text-black">
              <span className="font-nunito font-semibold text-[20px] leading-[30px]">Pack Smart</span>
            </div>
          </div>
        </div>

        {/* Right side: Text Content */}
        <div className="md:mr-24 mx-6 md:mx-0">
          <div className="hidden md:flex items-center mb-4 -ml-8">
            <div className="h-[25px] w-[3px] bg-[#FF914C] mr-2"></div>
            <div className="text-black">
              <span className="font-nunito font-semibold text-[20px] leading-[30px]">Pack Smart</span>
            </div>
          </div>

          <div className="bg-[#D3E1F4] rounded-[5px] md:w-[730px] w-full p-4">
            <h3 className="font-semibold text-[16px] font-nunito leading-[30px]">Lightweight Clothing</h3>
            <p className="font-[400] text-[14px] font-jakarta leading-[20px]">
              Sri Lanka’s tropical climate calls for breathable clothing, but don’t forget a light jacket for the cooler
              hill country.
            </p>
          </div>
          <div className="bg-[#EFF1F3] rounded-[5px] md:w-[730px] w-full p-4 mt-4">
            <h3 className="font-semibold text-[16px] font-nunito leading-[30px]">Footwear</h3>
            <p className="font-[400] text-[14px] font-jakarta leading-[20px]">
              Comfortable shoes are essential for exploring ancient ruins, temples, and trekking trails.
            </p>
          </div>
        </div>
      </div>

      {/* Second Tip Section */}
<div className="flex md:flex-row flex-col justify-between md:items-center mb-16 md:gap-20 gap-10">
  {/* Right side: Image */}
  <div className="md:mr-24 flex md:order-2 order-first justify-center">
    <div className="flex md:hidden items-center mb-4">
      <div className="h-[25px] w-[3px] bg-[#FF914C] mr-2"></div>
      <div className="text-black">
        <span className="font-nunito font-semibold text-[20px] leading-[30px]">Stay Hydrated</span>
      </div>
    </div>
    <img
      src={StayHydrated}
      alt="Stay Hydrated"
      className="md:w-[450px] md:h-[350px] w-[170px] h-[120px] object-cover"
    />
  </div>

  {/* Left side: Text Content */}
  <div className="md:ml-32 mx-6 md:mx-0">
    <div className="hidden md:flex items-center mb-4 -ml-8">
      <div className="h-[25px] w-[3px] bg-[#FF914C] mr-2"></div>
      <div className="text-black">
        <span className="font-nunito font-semibold text-[20px] leading-[30px]">Stay Hydrated</span>
      </div>
    </div>

    <div className="bg-[#D3E1F4] rounded-[5px] md:w-[730px] w-full p-4">
      <h3 className="font-semibold text-[16px] font-nunito leading-[30px]">Keep Water Handy</h3>
      <p className="font-[400] text-[14px] font-jakarta leading-[20px]">
        Sri Lanka can be hot and humid, so always have bottled water to stay hydrated.
      </p>
    </div>
    <div className="bg-[#EFF1F3] rounded-[5px] md:w-[730px] w-full p-4 mt-4">
      <h3 className="font-semibold text-[16px] font-nunito leading-[30px]">Coconut Water</h3>
      <p className="font-[400] text-[14px] font-jakarta leading-[20px]">
        Fresh coconut water is widely available and a great way to replenish electrolytes naturally.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default TipsAndTricks;

import news11 from "../../assets/images/news/worrior1.jpeg";
import news12 from "../../assets/images/news/worrior2.jpeg";
import news13 from "../../assets/images/news/worrior3.jpeg";

export const NewsContent3 = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full mt-20 mb-16 px-6 md:px-16">
        <div className="w-full max-w-4xl flex flex-col items-center text-center">
          <h1 className="font-nunito font-bold text-[36px] text-[#004AAD] leading-[50px] mb-4">
          BLUECAP WARRIORS
          </h1>
          
          <div className="font-nunito font-normal text-[14px] text-[#FF914C] mb-6">
            <span>( Posted on August 08, 2024 )</span>
          </div>

          <div className="font-nunito font-normal text-[16px] leading-[28px] text-[#333333] gap-6 flex flex-col mb-12">
            <p>
            A young man’s Mission to Clean the coastline in Kalutara District
            </p>
            <p>
            In an age where environmental issues are at the forefront of global
concerns, inspiring stories of individuals taking action can rekindle
hope and drive collective ef orts. One such story is that of a young,
passionate individual who has taken the initiative to clean waste
plastic from the coastline using e-bikes
            </p>
            <p>Meet Chalana, a dedicated environmentalist with a unique
approach to combating plastic pollution. Armed with e-bikes,
Chalana spends his days traversing the coastline, collecting waste
plastic, and ensuring that it does not end up harming marine life or
polluting the beautiful beaches. With growing support from the
community and increased awareness of the plastic pollution crisis,
he plan to expand his ef orts</p>
<p>I aims to collaborate with
local organizations and
schools to educate others
about the importance of
environmental conservation
and the practical steps they
can take to contribute,“ Says
Chalana “
</p>
          </div>

          {/* Image Gallery */}
          <div className="flex gap-8 flex-wrap w-full mt-12 justify-center">
            <div className="relative w-[300px] h-[200px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={news11} className="object-cover w-full h-full rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-40 hover:opacity-0 transition-opacity duration-300 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
                  Discover More
                </span>
              </div>
            </div>
            <div className="relative w-[300px] h-[200px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={news12} className="object-cover w-full h-full rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-40 hover:opacity-0 transition-opacity duration-300 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
                  Discover More
                </span>
              </div>
            </div>
            <div className="relative w-[300px] h-[200px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={news13} className="object-cover w-full h-full rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-40 hover:opacity-0 transition-opacity duration-300 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
                  Discover More
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

import news11 from "../../assets/images/news/con2.png";
import news12 from "../../assets/images/news/con3.png";
import news13 from "../../assets/images/news/con4.png";



export const NewsContent2 = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full mt-20 mb-16 px-6 md:px-16">
        <div className="w-full max-w-4xl flex flex-col items-center text-center">
          <h1 className="font-nunito font-bold text-[36px] text-[#004AAD] leading-[50px] mb-4">
          WOMEN-OWNED MRF
          </h1>
          
          <div className="font-nunito font-normal text-[14px] text-[#FF914C] mb-6">
            <span>( Posted on July 07, 2024 )</span>
          </div>

          <div className="font-nunito font-normal text-[16px] leading-[28px] text-[#333333] gap-6 flex flex-col mb-12">
            <p>
            Under the project BLUECAP, a
state-of-the-art Material
Recovery Facility (MRF) has
been constructed in Balapitiya,
boasting a monthly plastic
waste recovery capacity of 30
MT. This cutting-edge facility
features a sorting and baling
area, a baling machine, electric
collection vehicles, trash
barriers, and numerous dropoff bins and bags.

            </p>
            <p>
            Ms. Yasomanike aims to tackle
the region's plastic waste by
collecting untapped plastic
materials within a 10 km radius
of the city. A significant part of
this initiative focuses on
community engagement and
education, helping local
communities and students
recover their post-consumer
plastic waste for recycling.
To ensure active collections
from households and polluted
hotspots, an attractive
incentive has been planned
for all designated suppliers.
As this project continues to
grow, it holds the promise of a
cleaner, healthier environment
for the residents of Balapitiya
and sets a powerful example
for other regions to follow.
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

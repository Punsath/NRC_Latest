import { useEffect } from "react";
import "../../assets/css/ImageSlider.css";
import { InitializeCarousel } from "../../assets/js/InitializeCarousel";
import { HeroSliderItems } from "../../utils/dataArrays";
import { HeroSliderItems2 } from "../../utils/dataArrays";


export const HeroOld = () => {
  useEffect(() => {
    InitializeCarousel();
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="body">
      <div className="carousel">
        <div className="list">
          {HeroSliderItems.map((item, index) => (
            <div className="item relative" key={index}>
              <img src={item.image} alt={`Slide ${index + 1}`} />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50"></div>
              <div className="content relative z-10">
                <div className="text-3xl md:text-6xl leading-[40px] md:leading-[90px] md:text-left text-center font-bold font-montserrat">
                  Welcome to
                  <span className="text-[#FFFFF] font-bold"> NRC</span>
                </div>

                <div
                  className="mt-6 mb-10 text-lg md:mt-8 md:mb-20 md:text-3xl font-montserrat md:w-[90%] md:text-left text-center"
                  variants={itemVariants}
                >
                  #1 MTF in Negombo by Recover4Recycling
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail">
  {HeroSliderItems2.map((item, index) => (
    <div className="item relative" key={index}>
      <img src={item.image} alt={`Thumbnail ${index + 1}`} />
      {/* Lighter gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50"></div>
    </div>
          ))}
        </div>

        <div className="flex space-x-4 arrows">
          <button id="prev"></button>
          <button id="next"></button>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import women1 from "../../assets/images/news/women1.jpeg";
import bluecap1 from "../../assets/images/news/bluecap1.jpeg";
import Owned from "../../assets/images/news/con2.png";
import worrior from "../../assets/images/news/worrior1.jpeg";
import tourism from "../../assets/images/news/news11.jpeg";

// Sample cities array with city names, images, news content, and dates
export const Nav = () => {
  const [activeSlide, setActiveSlide] = useState(0); // State to track the active slide
  const desktopSliderRef = useRef(null); // Reference to the desktop Slider component
  const mobileSliderRef = useRef(null); // Reference to the mobile Slider component

  const cities = [
    { 
      title: "BLUECAPEDUCATION", 
      image: "new-york-image.jpg", 
      news: {
        image: bluecap1,
        date: "December 29, 2024",
        description: "The BLUECAP team has successfully conducted 693 community 'Education and Awareness' programs, training participants in effectively managing post-consumer plastics. These include: 409 school programs, 14 fishery community programs, 53 women's organization programs, 217 other community programs. Through these initiatives, 50,324 individuals were educated on the importance of responsible post-consumer plastic management and made aware of the negative impacts of plastic mismanagement on the environment. Additionally, the programs fostered the development of numerous entrepreneurs, empowering them to recover waste plastics and meet their daily needs sustainably. Over 100 new collection points were established across 15 designated districts, creating income opportunities for onboarded collection employees to support their daily needs through BLUECAP's plastic collection initiatives. As a result of these efforts, the initiatives collectively facilitated the recovery of 50,000 kilograms of plastic waste for recycling in Sri Lanka, preventing this waste from being burned or improperly dumped."
      }
    },
    { 
      title: "WOMEN EMPOWERMENT", 
      image: "los-angeles-image.jpg", 
      news: {
        image: women1,
        date: "December 20, 2024",
        description: (
            <>
              <p>
                A BLUECAP WARRIOR has emerged in the bustling coastal town of Beruwala, where the fishery communities are actively operating. Meet Anulawathi, known to many as Rani, a woman who cares for the boats day and night. Rani's connection to the beach began when the team NRC met her at the Beach Cleanup in early June.
              </p>
              <p>
                "Now, my efforts in maintaining the beach are being recognized and valued by the community," says Rani.
              </p>
              <p>
                Initially, Team NRC empowered Rani with a fair collection incentive for the recyclable waste she collected. Recognizing her dedication and the need for sustained motivation, they later transitioned her package to a monthly salary with additional incentives and an insurance plan. This change not only increased her motivation but also uplifted her quality of life by providing greater financial stability and security.
              </p>
              <p>
                Every morning, before the sun rises, Rani can be seen walking along the shoreline, equipped with trash bags. Her routine is diligent and strategic: she starts at one end of the beach and works her way to the other, collecting the litter she encounters. From plastic bottles and fishing nets to discarded flip-flops, Rani's efforts lead to the removal of substantial amounts of waste each day, significantly impacting the coastal environment.
              </p>
              <p>
                After onboarding with the BLUECAP project, Rani collected 2,564 kg of waste plastics and almost 100,000 pieces of plastic packaging within the last 45 days, sending them for recycling. Despite this progress, Rani encounters numerous challenges, primarily due to the lack of awareness and support within fishery communities. The increasing number of community awareness programs around the harbor by the BLUECAP project facilitate Rani’s effort as significant and continuous.
              </p>
            </>
          )
      }
    },
    { 
      title: "WOMEN-OWNED MRF", 
      image: "chicago-image.jpg", 
      news: {
        image: Owned,
        date: "December 15, 2024",
        description: (
            <>
              <p>
                Under the project BLUECAP, a state-of-the-art Material Recovery Facility (MRF) has been constructed in Balapitiya, boasting a monthly plastic waste recovery capacity of 30 MT. This cutting-edge facility features a sorting and baling area, a baling machine, electric collection vehicles, trash barriers, and numerous drop-off bins and bags.
              </p>
              <p>
                Ms. Yasomanike aims to tackle the region's plastic waste by collecting untapped plastic materials within a 10 km radius of the city. A significant part of this initiative focuses on community engagement and education, helping local communities and students recover their post-consumer plastic waste for recycling. To ensure active collections from households and polluted hotspots, an attractive incentive has been planned for all designated suppliers.
              </p>
              <p>
                As this project continues to grow, it holds the promise of a cleaner, healthier environment for the residents of Balapitiya and sets a powerful example for other regions to follow.
              </p>
            </>
          )
      }
    },
    { 
      title: "BLUECAP WARRIORS", 
      image: "miami-image.jpg", 
      news: {
        image: worrior,
        date: "December 10, 2024",
        description: (
            <>
              <p>
                A young man’s Mission to Clean the coastline in Kalutara District
              </p>
              <p>
                In an age where environmental issues are at the forefront of global concerns, inspiring stories of individuals taking action can rekindle hope and drive collective efforts. One such story is that of a young, passionate individual who has taken the initiative to clean waste plastic from the coastline using e-bikes.
              </p>
              <p>
                Meet Chalana, a dedicated environmentalist with a unique approach to combating plastic pollution. Armed with e-bikes, Chalana spends his days traversing the coastline, collecting waste plastic, and ensuring that it does not end up harming marine life or polluting the beautiful beaches. With growing support from the community and increased awareness of the plastic pollution crisis, he plans to expand his efforts.
              </p>
              <p>
                "I aim to collaborate with local organizations and schools to educate others about the importance of environmental conservation and the practical steps they can take to contribute," says Chalana.
              </p>
            </>
          )
      }
    },
    { 
      title: "MRF updates", 
      image: "san-francisco-image.jpg", 
      news: {
        image: tourism,
        date: "December 5, 2024",
        description: (
            <>
              <p>
                Sri Lanka Tourism Promotion Bureau (SLTPB), under The Ministry of Tourism and Lands, welcomed World's Top Travel Influencer Nusier Yassin, also known as "Nas Daily," to promote Sri Lanka as One of the Best Travel Destinations in The World. As part of this exclusive social media-based campaign with Sri Lanka Tourism Promotion Bureau, Nas Daily's social platforms, which have over 67 million followers worldwide, will be posting various destination promotional posts, videos, and stories to inspire social media-savvy global travelers to visit Sri Lanka in the upcoming seasons.
              </p>
              <p>
                Making a statement on Sri Lanka Tourism’s collaboration with Nas Daily, Minister for Tourism and Lands Mr. Harin Fernando stated that the key focus of this campaign is to promote destination Sri Lanka via mainstream social media platforms, reaching out to millions of international social media users and creating excitement and influence to visit the island within the upcoming seasons. The campaign also expects to create multiple unique reasons to visit Sri Lanka and encourage travelers to return for more.
              </p>
            </>
          )
      }
    }
  ];

  // Desktop settings for the slider
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20%", // Ensures the slide is in the center
    slidesToShow: 1,
    speed: 500,
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 3000, // Set the auto-slide speed (3 seconds)
    beforeChange: (current, next) => setActiveSlide(next), // Updates active slide
  };

  // Mobile settings for the slider
  const mobileSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10%", // No padding for mobile
    slidesToShow: 1,
    speed: 500,
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 3000, // Set the auto-slide speed (3 seconds)
    beforeChange: (current, next) => setActiveSlide(next),
  };

  // Function to handle button click and move the slider
  const handleButtonClick = (index) => {
    if (desktopSliderRef.current) {
      desktopSliderRef.current.slickGoTo(index); // Move desktop slider to selected slide
    }
    if (mobileSliderRef.current) {
      mobileSliderRef.current.slickGoTo(index); // Move mobile slider to selected slide
    }
    setActiveSlide(index); // Ensure the state updates when clicking buttons
  };

  return (
    <section className="w-full flex justify-center mb-16 -mt-16 flex-col items-center overflow-hidden">

      {/* Bottom Navigation Buttons (Responsive for mobile and desktop) */}
      <div className="justify-center mt-8 flex flex-wrap md:flex-nowrap mb-4 gap-4">
        {cities.map((city, index) => (
          <button
            key={index}
            className={`px-6 py-2 mx-2 rounded-full font-semibold cursor-pointer transition-all duration-300 w-full md:w-auto ${
              activeSlide === index ? "bg-[#004066] text-white" : "text-[#494949] bg-white border border-[#004066]"
            }`}
            onClick={() => handleButtonClick(index)}
          >
            {city.title}
          </button>
        ))}
      </div>

      {/* Slider for Desktop */}
      <div className="hidden md:block w-full">
        <Slider ref={desktopSliderRef} {...settings}>
          {cities.map((city, index) => (
            <div key={index} className="w-full px-4">
              <div className="w-full h-[435px] relative">
                <img
                  src={city.news.image}
                  alt="news"
                  className="w-full h-full object-contain" // Ensures full display without cropping
                />
                
              </div>
              <div className="p-5 bg-[#EDF5F7]">
                <h2 className="text-2xl font-semibold">{city.title}</h2>
                <div className="text-sm mb-4 text-[#6C737F]">{city.news.date}</div> {/* Date under the title */}
                <p>{city.news.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Slider for Mobile */}
      <div className="md:hidden w-full">
        <Slider ref={mobileSliderRef} {...mobileSettings}>
          {cities.map((city, index) => (
            <div key={index} className="w-full px-4">
              <div className="w-full h-[335px] relative">
                <img
                  src={city.news.image}
                  alt="news"
                  className="w-full h-full object-contain" // Ensures full display without cropping
                />
               
              </div>
              <div className="p-5 bg-[#EDF5F7]">
                <h2 className="text-2xl font-semibold">{city.title}</h2>
                <div className="text-sm mb-4 text-[#6C737F]">{city.news.date}</div> {/* Date under the title */}
                <p>{city.news.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </section>
  );
};

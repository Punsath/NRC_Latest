import React from "react";
import img1 from "../../assets/images/main-events/img1.jpg";
import img2 from "../../assets/images/main-events/img2.jpg";
import img3 from "../../assets/images/main-events/img3.jpg";
import img4 from "../../assets/images/main-events/img4.jpg";
import img5 from "../../assets/images/main-events/img5.jpg";
import img6 from "../../assets/images/main-events/img6.jpg";
import img7 from "../../assets/images/main-events/img7.jpg";
import img8 from "../../assets/images/main-events/img8.jpg";

const contentData = [
  {
    title: "BlueCap Drop-Off Recycling Initiatives",
    description:
      "Project Blue Cap is expanding its efforts to promote responsible plastic waste disposal by installing 44 drop-off bins across seven districts in Sri Lanka. This initiative offers convenient solutions for managing post-consumer solid plastics, reducing pollution, and safeguarding ecosystems. Implemented by the South Asia Co-operative Environment Programme (SACEP) with support from the World Bank, UNOPS Sri Lanka, and Janathakshan GTE Ltd, the project is part of the larger PLEASE (Plastic Free Rivers and Seas for South Asia) initiative.",
    image: img1,
  },
  {
    title: "Variety of Species",
    description:
      "Project Blue Cap continues its mission to protect Sri Lanka’s natural beauty with another successful beach cleanup, this time at Payagala beach. In collaboration with Dharmaraja College, Hittetiya, and with the support of 23 dedicated participants, the team collected 35kgs of recyclable plastics on 12.11.2024. This initiative is implemented by the South Asia Co-operative Environment Programme (SACEP) as part of the PLEASE (Plastic Free Rivers and Seas for South Asia) project, supported by the World Bank, UNOPS Sri Lanka, and Janathakshan GTE Ltd. Together, we’re fostering a cleaner, more sustainable future for our beaches and beyond.",
    image: img2,
  },
  {
    title: "Empowering Women through Recycling",
    description:
      "A momentous occasion! The Manike Recycling Center, Sri Lanka’s first women-owned Material Recovery Facility (MRF), was recently inaugurated by UNOPS's Deputy Executive Director Sonja Leighton-Kone, Senior Advisor Simonetta Siligato, South Asia Multi-Country Office Director Charles Callanan, and South Asia Co-operative Environment Programme's Director General Norbu Wangchuk.This inspiring journey, led by Yaso Manike and supported by the Negombo Recycling Club’s BLUECAP Project, has turned a dream into reality. The initiative is a shining example of community-driven sustainability and the empowerment of women.",
    image: img6,
  },
  {
    title: "BLUECAP Project Training & Review",
    description:
      "From September 24th to 27th, 2024, Janathakshan GTE Ltd. and Negombo Recycling Club (NRC) held a Progress Review Meeting and Refresher Training for the BLUECAP Project at the Radisson Hotel.Over four days, 21 Field Officers from 15 districts improved their skills in project administration, finance, M&E, gender, and communications. The program featured practical sessions, a visit to Negombo MRF operations, and participation in a school waste fair at Pamunugama Maha Vidyalaya.This event reinforced Janathakshan's commitment to sustainable waste management and community empowerment.",
    image: img4,
  },
  {
    title: "Project Blue Cap on FM Ruhuna",
    description:
      "Project Blue Cap is addressing plastic pollution in Sri Lanka through innovative solutions like river booms, drop-off points, and a dedicated waste collector network. With a goal to intercept 2,500 metric tons of waste annually, we're creating a cleaner, more sustainable future. Our recycling hubs process post-consumer plastics, micro-plastics, and degraded plastics, reducing carbon footprints and promoting a circular economy.In collaboration with coastal communities, youth, women, and waste collectors, we're creating over 1,000 job opportunities and empowering individuals to protect the environment.",
    image: img3,
  },
  {
    title: "Galle District School-Fest Update",
    description:
      "Following the success of the Green Guardians Education and Awareness program at Prajapathi Girls' College in Ambalangoda, the Galle BLUECAP team held another impactful School Fest. Together, they recovered 105 kg of post-consumer plastic waste, including approximately 4,000 plastic packages from students' and teachers' households, as well as nearby polluted coastal hotspots. The recovered waste was collected by the Balapitiya BLUECAP Material Recovery Facility (MRF), and a quantity-based collection incentive was credited to the school's welfare account.",
    image: img8,
  },
  {
    title: "Trincomalee District Cleanup",
    description:
      "The BLUECAP Trinco team, along with 60 volunteers from All Hamra Maha Vidyalaya, successfully recovered 50 kg of plastic waste and 60 kg of non-recyclable waste from Irakakandy Beach, Trincomalee. Let’s continue our efforts to keep our beaches clean and protect our oceans. Join the #ProjectBLUECAP cleanup platform and be part of the change. More cleanups are on the way—let’s make every effort count!",
    image: img7,
  },
  {
    title: "Galle District Cleanup",
    description:
      "The BLUECAP Balapitiya team, alongside 31 volunteers from Eco Spindles, Ambalangoda Harbor Community, and Janathakshan, successfully recovered 150 kg of plastic waste from Ambalangoda Harbor. Let's continue working together to keep our beaches clean and protect our oceans.",
    image: img5,
  },
];

export const Content = () => {
  // Group content data into pairs
  const groupedContent = contentData.reduce((acc, curr, index) => {
    if (index % 2 === 0) acc.push([curr]);
    else acc[acc.length - 1].push(curr);
    return acc;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-6 md:p-16 mt-10 w-full max-w-6xl">
        {groupedContent.map((pair, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[180px] ${
              rowIndex > 0 ? "mt-16" : ""
            }`}
          >
            {pair.map((item, index) => (
              <div key={index} className="flex-1">
                <h1 className="font-nunito font-bold text-[20px] text-center md:text-left">
                  {item.title}
                </h1>
                <p className="text-[16px] font-plusJakarta mt-2 w-full md:w-[515px] text-center md:text-left">
                  {item.description}
                </p>
                <img
                  src={item.image}
                  className={`mt-4 ${index === 1 ? "md:mt-16" : ""} w-full md:w-[515px] h-auto`}
                  alt={item.title}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

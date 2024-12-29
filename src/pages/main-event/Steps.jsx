import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hotspot from "./../../assets/images/steps/Hotspot.jpeg";
import Education from "./../../assets/images/steps/Education.jpeg";
import Cleanups from "./../../assets/images/steps/Cleanups.jpeg";
import Dropoff from "./../../assets/images/steps/Drop-off.jpeg";
import River from "./../../assets/images/steps/River.jpeg";
import CO2 from "./../../assets/images/steps/CO2.jpeg";
import MRF from "./../../assets/images/steps/MRF.jpeg";
import Target from "./../../assets/images/steps/Target.jpeg";
import Scale from "./../../assets/images/steps/Scale.jpeg";
import BLUECAP from "./../../assets/images/steps/BLUECAP.jpeg";

export const Steps = () => {
  const steps = [
    {
      title: "Hotspot mapping",
      description: "The hotspot scouting and mapping program has been designed to identify polluted locations in Sri Lanka, including polluted beaches, public places, river mouths, illegal dumpsites, and legal dumpsites. The BLUECAP project aims to map a minimum of 1500 polluted hotspots and deploy material interception tools such as river booms, bins, and bags at all these locations. These tools will intercept waste plastic materials in a sustainable manner, preventing them from entering the environment or water sources.",
      image: Hotspot
    },
    {
      title: "Education and Awareness",
      description: "The BLUECAP education and awareness campaign targets key audiences through a comprehensive module, including talks, activities, murals, digital screens, videos, and signboards. It focuses on students, with plans to reach 285 schools in the first year, leveraging Sri Lanka's 10,160 schools and 1.1 million students. Additionally, the program will conduct 250 awareness sessions for fishery and coastal communities to address plastic waste mismanagement and its impact on marine ecosystems. The goal is to promote environmental responsibility and empower communities to reduce plastic pollution.",
      image: Education
    },
    {
      title: "Cleanups",
      description: "A cleanup typically refers to an organized effort to remove litter, debris, or other pollutants from a specific area, such as a beach, park, riverbank, or roadside. The project intends to conduct beach cleanups, riverbank cleanups, and mainland cleanups to prevent plastic debris from adding to the ocean or waterbeds.Mainly, the BLUECAP cleanups will involve school students, providing them with practical insights into the negative impacts of mismanaging plastics. The project aims to complete 230 cleanups and engage 10000 participants for cleanup activities within the project timeline.These cleanups play a crucial role in protecting the environment, preventing pollution, and raising awareness about the importance of proper waste management. They also provide an opportunity for community engagement and education, empowering individuals to take action to preserve natural ecosystems for future generations.",
      image: Cleanups
    },
    {
      title: "Drop-off recycling",
      description: "In BLUECAP drop-off recycling programs, designated bins and bags will be positioned in public and private locations to facilitate the drop-off of consumers' solid plastic waste. The project plans to deploy 100 drop-off bins and 1300 drop-off bags in identified polluted hot spots.The drop-off bins will primarily be placed in public areas and have a loading capacity of 50 kgs of solid plastic containers. These bins will serve as convenient collection points for individuals to deposit their recyclable plastics.On the other hand, the drop-off bags are intended for use in schools, educational institutes, and universities. They will have a loading capacity of 30 kgs of solid plastic containers. These bags will provide an accessible recycling option for students, and staff to dispose of their post-consumer plastic waste responsibly.By strategically placing drop-off bins and bags in various locations, the BLUECAP project aims to encourage community participation in recycling efforts and divert plastic waste from open burning, landfills and adding to waterways.",
      image: Dropoff
    },
    {
      title: "River Interception",
      description: "River booms are used to trap floating debris like plastic, logs, and trash, preventing them from flowing downstream and causing environmental harm. They also contain pollutants like oil spills and chemicals, reducing their spread and impact on water quality and ecosystems. BLUECAP plans to deploy at least 20 river booms, each collecting 500 kg of plastic waste monthly, totaling 120 MT annually. By using MAS Foundations' river boom technology, the project aims to intercept plastic waste before it reaches water bodies, protecting marine life and promoting environmental sustainability.",
      image: River
    },
    {
      title: "CO2 free waste collections",
      description: "The BLUECAP project will allocate 45 electric bicycles for waste plastic collections from identified public and private collection points such as schools, restaurants, hotels, drop-off bins, bags, households, and more. These bicycles will provide accessibility to small collection points and facilitate the timely collection of plastic waste from areas where 5 to 50 kgs can be collected.The collection mode via electric bicycles has been identified as one of the most economical and sustainable waste collection methods. By utilizing electric bicycles, BLUECAP aims to minimize unnecessary transportation costs in the waste plastic collection value chain. This approach not only reduces the project's carbon footprint but also ensures efficient and timely waste collection, contributing to the overall success of the recycling initiative.",
      image: CO2
    },
    {
      title: "MRF developments",
      description: "The BLUECAP funds have been allocated to establish 10 new Material Recovery Facilities (MRFs) in 10 selected districts. These MRFs will play a crucial role in handling regional waste plastic collections, separating them, and baling them for recycling or upcycling operations. Additionally, the MRFs will serve as Buy Back Centers, providing accessibility for regional collectors to receive the best collection incentives for their waste plastic after delivering it to the MRF.Each MRF is designed with a sorting and baling capacity of 30 MT per month, ensuring efficient processing of the collected plastic waste. By establishing these MRFs, BLUECAP aims to streamline the waste management process, incentivize waste collection efforts, and contribute to the sustainable management of plastic waste in the region.In addition to establishing new Material Recovery Facilities (MRFs), BLUECAP has allocated funds to expand the building capacities of 5 existing MRFs. This expansion aims to accommodate a collection growth of 10 MT of other plastic waste, such as HDPE and PP, monthly.",
      image: MRF
    },
    {
      title: "Target wastes ",
      description: "In BLUECAP operations, the focus will be on managing a wide range of post-consumer and post-industrial solid plastic waste streams, encompassing various types of plastics. These include PET (Polyethylene terephthalate), HDPE (High-Density Polyethylene), PP (Polypropylene), PS (Polystyrene), PC (Polycarbonate), ABS (Acrylonitrile Butadiene Styrene), and PVC (Polyvinyl Chloride). Additionally, flexible plastics such as LDPE (Low-Density Polyethylene), LLDPE (Linear Low-Density Polyethylene), and discarded fishnet waste will also be targeted for effective waste management within the BLUECAP framework.",
      image: Target
    },
    {
      title: "Scale up the collection capacities",
      description: "During the first year of implementation, the project aims to collect 980 metric tons (MT) of waste plastics. As the project progresses, the annual collection target will gradually increase, reaching up to 2,500 MT by the fourth year.This phased approach to waste plastic collection reflects BLUECAP's commitment to scaling up its operations over time, in line with the project's objectives and available resources. By steadily increasing the collection targets, BLUECAP aims to achieve significant impacts in reducing plastic pollution and promoting sustainable waste management practices across the targeted regions.Moreover, this incremental growth in collection volumes allows for the proper infrastructure development, capacity building, and community engagement initiatives to be implemented effectively, ensuring the project's long-term success and sustainability.",
      image: Scale
    },
    {
      title: "Processing plant development",
      description: "The BLUECAP project, located in Millaniya, Kalutara, covers 8,000 square feet and features a state-of-the-art processing plant with offices, lunchrooms, warehouses, and a water treatment facility. Its operations focus on recycling waste plastics into valuable products, adhering to environmental standards. The process begins with washing segregated HDPE and PP plastics to remove contaminants, followed by pelletizing the cleaned materials into pellets for further use. The facility also composes Wood Plastic Composite (WPC) by blending recycled plastics with natural fibers such as wood or bamboo, which is then molded into various products like flowerpots, dustbins, and hangers. Additionally, wastewater generated during operations is treated to ensure compliance with environmental regulations. BLUECAP aims to maximize the value of waste plastics while minimizing environmental impact, contributing to a sustainable future.",
      image: BLUECAP
    },
  ];

  const [selectedStep, setSelectedStep] = useState(null);

  const toggleDescription = (index) => {
    setSelectedStep(selectedStep === index ? null : index);
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-[#004066] mb-6">Project Steps</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4">
        {steps.map((step, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.5, // Trigger animation when 50% of the component is visible
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
              transition={{ duration: 0.6 }}
              className={`overflow-hidden transition-all rounded-lg shadow-lg ${selectedStep === index ? "bg-white" : "bg-gray-50 hover:bg-white"}`}
            >
              <div
                onClick={() => toggleDescription(index)}
                className="flex items-center justify-between p-4 cursor-pointer border-b border-gray-200"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#004066] text-white rounded-full font-bold mr-4">
                    {index + 1}
                  </div>
                  <p className="text-lg font-semibold text-gray-700">{step.title}</p>
                </div>
                <svg
                  className={`w-6 h-6 text-gray-500 transform transition-transform ${selectedStep === index ? "rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className={`transition-all duration-300 ease-in-out ${selectedStep === index ? "max-h-96 p-4" : "max-h-0"}`}>
                <div className="flex items-center">
                  <img src={step.image} alt={step.title} className="w-48 h-48 object-cover rounded-lg mr-4" />
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

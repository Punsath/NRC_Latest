import { LocationCard } from "../../components/global/LocationCard";
import { planHoliday } from "../../utils/dataArrays";

export const PlanHoliday = () => {
  return (
    <section className="md:px-[12%] px-[5%] bg-[#FDFDFD] flex flex-col items-center mt-[150px]">
      <h3 className="font-nunito font-bold md:text-[50px] text-[24px] leading-[30px] text-[#1E1E1E]">
        Plan Your <span className="text-[#004AAD]">Perfect Holiday</span>
      </h3>
      <p className="font-nunito font-normal md:text-[16px] text-[12px] leading-[30px] text-black md:w-[80%] w-full text-center md:mt-16 mt-10">
        Every day on this magical island brings new adventures, discoveries, and
        unforgettable memories. With so many options to explore, we've crafted
        personalized itineraries to help you experience the best of Sri Lanka.
      </p>
      <div className="flex md:gap-8 w-full mt-14 flex-wrap justify-between">
        {planHoliday.map((item) => {
          return <LocationCard location={item} />;
        })}
      </div>
    </section>
  );
};

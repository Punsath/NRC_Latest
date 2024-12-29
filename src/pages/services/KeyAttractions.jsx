import { LocationCard } from "../../components/global/LocationCard";
import { colomboKeyAttractions } from "../../utils/dataArrays";

export const KeyAttractions = () => {
  return (
    <section className="px-[5%] flex flex-col mt-[150px]">
      <h3 className="font-nunito font-bold text-[30px] leading-[30px]">
        Key Attractions in colombo
      </h3>
      <div className="flex flex-wrap gap-10 items-stretch justify-between mt-12">
        {colomboKeyAttractions.map((location) => {
          return <LocationCard location={location} key={location.id} />;
        })}
      </div>
    </section>
  );
};

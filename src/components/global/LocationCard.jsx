export const LocationCard = ({ location }) => {
  return (
    <div className="bg-white rounded-[20px] shadow-sm overflow-hidden md:w-[400px] w-full">
      <img
        src={location.image}
        alt={location.title}
        className="w-full object-cover h-[125px] md:h-[250px]"
      />
      <div className="p-4">
        <h3 className="text-[12px] md:text-[22px] font-bold">
          {location.title}
        </h3>
        <p className="text-[#727272] mt-3 text-[10px] md:text-[16px]">
          {location.description}
        </p>
      </div>
    </div>
  );
};

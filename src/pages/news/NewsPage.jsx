
import { NewsContent } from "./NewsContent";
import { PopularNews } from "./PopularNews";

export const NewsPage = () => {
  return (
    <section className="px-[5%] bg-[#FEFEFE]">
      <div className="flex items-center space-x-2 text-[14px] text-black font-nunito font-semibold leading-[80px] mb-8">
        <a href="/" className="hover:underline">
          HOME
        </a>
        <span>▸</span>
        <span> NEWS</span>
      </div>
      <div className="flex items-start gap-10 justify-between">
        <div className="w-[30%] flex flex-col gap-8">
          <PopularNews />
          
        </div>
        <NewsContent />
        
      </div>
    </section>
  );
};

import news11 from "../../assets/images/news/bluecap1.jpeg";
import news12 from "../../assets/images/news/bluecap2.jpeg";
import news13 from "../../assets/images/news/bluecap3.jpeg";

export const NewsContent = () => {
  return (
    <div className="flex w-[65%] flex-col mb-16">
      <div className="font-nunito font-bold text-[24px] leading-[60px] text-[#004AAD] overflow-wrap">
      BLUECAPEDUCATION
      </div>
      <div className="font-nunito font-bold text-[14px] leading-[60px] text-[#FF914C]">
        ( Posted on DNovember 01, 2024 )
      </div>
      <div className="font-nunito font-normal text-[14px] leading-[30px] gap-5 flex flex-col">
        <p>Green Guardians</p>
        <p>
        The BLUECAP team has successfully
conducted 693 community “Education and
Awareness” programs,training participants in
effectively managing post-consumer
plastics. These include: 409 school programs, 14 fishery community programs, 53 women's organization programs, 217 other community programs
        </p>
        <p>Through these initiatives, 50,324 individuals
were educated on the importance of
responsible post-consumer plastic
management and made aware of the
negative impacts of plastic mismanagement
on the environment.
Additionally, the programs fostered the
development of numerous entrepreneurs,
empowering them to recover waste plastics
and meettheir daily needs sustainably.
</p>
<p>
Over 100 new collection points were
established across 15 designated districts,
creating income opportunities for
onboarded collection employees to support
their daily needs through BLUECAP's
plastic collection initiatives.
As a result of these efforts, the initiatives
collectively facilitated the recovery of
50,000 kilograms of plastic waste for
recycling in Sri Lanka, preventing this waste
from being burned orimproperly dumped.
</p>
      </div>
      <div className="flex items-center gap-5 flex-wrap w-full mt-16">
        <img src={news11} className="object-cover w-[300px] h-[200px] rounded-lg shadow-lg"/>
        <img src={news12} className="object-cover w-[300px] h-[200px] rounded-lg shadow-lg"/>
        <img src={news13} className="object-cover w-[300px] h-[200px] rounded-lg shadow-lg"/>
      </div>
    </div>
  );
};

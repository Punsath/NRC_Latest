import news11 from "../../assets/images/news/women1.jpeg";


export const NewsContent1 = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full mt-20 mb-16 px-6 md:px-16">
        <div className="w-full max-w-4xl flex flex-col items-center text-center">
          <h1 className="font-nunito font-bold text-[36px] text-[#004AAD] leading-[50px] mb-4">
          WOMEN EMPOWERMENT
          </h1>
          
          <div className="font-nunito font-normal text-[14px] text-[#FF914C] mb-6">
            <span>( Posted on November 24, 2024 )</span>
          </div>

          <div className="font-nunito font-normal text-[16px] leading-[28px] text-[#333333] gap-6 flex flex-col mb-12">
            <p>
            A BLUECAP WARRIOR has emerged in the bustling coastal town of Beruwala, where the fishery communities are actively operating.Meet Anulawathi, known to many as Rani, awoman who cares the boats day and night.Rani's connection to the beach began when the team NRC met her at the Beach Cleanup in early June.

            </p>
            <p>
            "Now, my efforts in maintaining the
beach are being recognized and valued
by the community," says Rani.
            </p>
            <p>
            Initially, Team NRC empowered Rani with a
fair collection incentive for the recyclable
waste she collected. Recognizing her
dedication and the need for sustained
motivation, they later transitioned her
package to a monthly salary with additional
incentives and an insurance plan. This
change not only increased her motivation but
also uplifted her quality of life by providing
greater financial stability and security.
            </p>
            <p>
            Every morning, before the sun rises, Rani can be seen walking along the shoreline, equipped
with trash bags. Her routine is diligent and strategic: she starts at one end of the beach and
works her way to the other, collecting the litter she encounters. From plastic bottles and fishing
nets to discarded flip-flops, Rani's efforts lead to the removal of substantial amounts of waste
each day, significantly impacting the coastal environment.
After onboarding with the BLUECAP project, Rani collected 2,564 kg of waste plastics and
almost 100,000 pieces of plastic packaging within the last 45 days, sending them for
recycling. Despite this progress, Rani encounters numerous challenges, primarily due to the
lack of awareness and support within fishery communities. The increasing number of
community awareness programs around the harbor by the BLUECAP project, facilitate the
Rani’s effort as significant and continuous
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
           
          
          </div>
        </div>

      </div>
    </>
  );
};

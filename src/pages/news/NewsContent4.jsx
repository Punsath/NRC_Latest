import news11 from "../../assets/images/news/news11.jpeg";
import news12 from "../../assets/images/news/news12.jpeg";
import news13 from "../../assets/images/news/news13.jpeg";

export const NewsContent4 = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full mt-20 mb-16 px-6 md:px-16">
        <div className="w-full max-w-4xl flex flex-col items-center text-center">
          <h1 className="font-nunito font-bold text-[36px] text-[#004AAD] leading-[50px] mb-4">
          ⁠MRF updates
          </h1>
          
          <div className="font-nunito font-normal text-[14px] text-[#FF914C] mb-6">
            <span>( Posted on November 24, 2023 )</span>
          </div>

          <div className="font-nunito font-normal text-[16px] leading-[28px] text-[#333333] gap-6 flex flex-col mb-12">
            <p>
              Sri Lanka Tourism Promotion Bureau (SLTPB), under The Ministry of
              Tourism and Lands welcomed World's Top Travel Influencer Nusier Yassin
              also known as ''Nas Daily'’ to promote Sri Lanka as One of Best Travel
              Destinations in The World to Travel. As part of this exclusive social
              media-based campaign with Sri Lanka Tourism Promotion Bureau, Nas
              Daily social platforms where they have over 67 million followers base
              worldwide, will be posting various destination promotional posts,
              videos and stories to inspire social media savvy global travelers
              visit Sri Lanka within upcoming seasons.
            </p>
            <p>
              Making a statement on Sri Lanka Tourism’s collaboration with Nas
              Daily, Minister for Tourism and Lands Mr. Harin Fernado stated, key
              focus of this campaign is to promote destination Sri Lanka via
              mainstream social media platforms by reaching out to millions of
              international social media users and creating an excitement and
              influencing to visit the island within upcoming seasons. Also, this
              campaign expects to create multiple unique reasons to visit
              destination Sri Lanka and encourage travelers to come back for more.
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
            <div className="relative w-[300px] h-[200px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={news12} className="object-cover w-full h-full rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-40 hover:opacity-0 transition-opacity duration-300 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
                  Discover More
                </span>
              </div>
            </div>
            <div className="relative w-[300px] h-[200px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={news13} className="object-cover w-full h-full rounded-lg" />
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

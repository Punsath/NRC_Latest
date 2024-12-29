import { CalendarIcon } from "../../utils/icons";
import { popularPosts } from "../../utils/dataArrays";
import { useNavigate } from "react-router-dom";

export const PopularNews = () => {
  return (
    <div className="bg-white shadow-sm rounded-[12px] p-5 flex flex-col w-full">
      <div className="font-nunito font-bold text-[#1E1E1E] text-[22px] leading-[30px] border-b border-[#E3DBD8] pb-3">
        Popular Posts
      </div>
      <div className="flex flex-col items-stretch mt-5 gap-5">
        {popularPosts.map((post) => {
          return <PopularPost post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};

const PopularPost = ({ post }) => {
  const navigate = useNavigate();

  const handlePostClick = () => {
    if (post.id === 1) {
      navigate("/news-contentone");
    } else if (post.id === 2) {
      navigate("/news-contenttwo");
    } else if (post.id === 3) {
      navigate("/news-contentthree");
    } else if (post.id === 4) {
      navigate("/news-contentfour");
    }
  };

  return (
    <div
      className="w-full flex items-center gap-4 cursor-pointer"
      onClick={handlePostClick}
    >
      {/* Image section */}
      <div className="w-[80px] h-[80px] rounded-[10px] overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-3">
          <CalendarIcon />
          <div className="font-nunito text-[14px] font-normal text-[#727272]">
            {post.date}
          </div>
        </div>
        <div className="font-nunito font-semibold text-[16px] leading-[28px] text-[#1E1E1E] overflow-wrap">
          {post.title}
        </div>
      </div>
    </div>
  );
};


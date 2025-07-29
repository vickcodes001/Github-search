import { BsBuildings } from "react-icons/bs";
import { FaLink, FaLocationDot, FaTwitter } from "react-icons/fa6";
import type { GitHubUser } from "../type";

const Info = ({ data }: { data: GitHubUser }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 lg:ml-45 mt-5 pb-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 text-[14px]">
            <FaLocationDot />
            <p>{data.location ? data.location : "Location not available"}</p>
          </div>
          <div className="flex items-center gap-2 text-[14px]">
            <FaLink />
            <a href={data.html_url} target="_blank" className="text-blue-500">
              {data.html_url ? data.html_url : "Url not available"}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 text-[14px]">
            <FaTwitter />
            <p>
              @
              {data.twitter_username
                ? data.twitter_username
                : "Twitter handle not available"}
            </p>
          </div>
          <div className="flex items-center gap-2 text-[14px]">
            <BsBuildings />
            <p>{data.company ? data.company : "Company not available"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;

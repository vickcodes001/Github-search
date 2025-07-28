interface GitHubUser {
  avatar_url: string;
  login: string;
  created_at: string;
  bio: string;
  name: string;
}

const Hero = ({ data }:{data: GitHubUser}) => {
  return (
    <>
      <div className="flex flex-col gap-10 lg:gap-0 w-[100%]">

            <div className="flex items-center lg:items-start gap-3">
                {/* image container */}
                <div className="w-60">
                <img
                    src={data.avatar_url}
                    alt="user profile"
                    loading="lazy"
                    className="rounded-full w-30 lg:w-40 h-30 lg:h-40 object-cover"
                />
                </div>
                {/* second sub container */}
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 lg:justify-between w-full">
                    {/* user details */}
                    <div>
                          <h2 className="text-2xl mb-3 h-10" >
                            {data.name}
                            </h2>
                        
                        <p className="text-blue-700">@{data.login}</p>
                    </div>
                    {/* date container */}
                    <div>
                        <p className="text-gray-400 font-semibold text-xl">Joined {data.created_at}</p>
                    </div>
                </div>
            </div>
            {/* description */}
            <div className="w-full lg:bottom-5 lg:left-50 lg:w-full lg:pl-45">
                <p className="text-gray-500 font-semibold text-[13px]">{data.bio}</p>
            </div>
      </div>
    </>
  );
};

export default Hero;

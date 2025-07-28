interface GitHubUser {
  public_repos: string;
  followers: string;
  following: string;
}

const Stats = ({ isDark, data }:{ isDark: boolean; data: GitHubUser}) => {
  return (
    <>
        <div className={`flex ${isDark ? "bg-slate-900" : "bg-gray-300" } h-25 lg:ml-45 lg:w-[72%] px-10 rounded-xl`}>
            <div className="flex flex-col justify-center w-1/3">
                <p>Repos</p>
                <p className="text-3xl font-semibold">{data.public_repos}</p>
            </div>
            <div className="flex flex-col justify-center w-1/3">
                <p>Followers</p>
                <p className="text-3xl font-semibold">{data.followers}</p>
            </div>
            <div className="flex flex-col justify-center w-1/3">
                <p>Following</p>
                <p className="text-3xl font-semibold">{data.following}</p>
            </div>
        </div>
    </>
  )
}

export default Stats
import { FiSearch } from "react-icons/fi"

interface GitHubUser {
  avatar_url: string;
  login: string;
  created_at: string;
  bio: string;
  location: string;
  name: string;
  public_repos: string;
  followers: string;
  following: string;
  html_url: string,
  twitter_username: string,
  company: string,
}


const Search = ({ 
  isDark, 
  search, 
  setSearch, 
  onSearch }
    :{ 
      isDark: boolean; 
      data: GitHubUser | null; 
      search: string; 
      setSearch: React.Dispatch<React.SetStateAction<string>>, 
      onSearch: () => void 
    } ) => {


    return (
        <>
          <div className={`lg:w-[60%] text-xl relative h-15 rounded-xl ${ isDark ? "bg-slate-800" : "bg-white text-black shadow-xl"}`}>
            <FiSearch className="absolute top-4 left-7 text-3xl text-blue-500" />
            <input 
               type="text" 
               className={`outline-none px-20 h-15 ${isDark ? "" : "text-black" } rounded-xl w-[85%] lg:w-[90%]`} 
               placeholder="Search GitHub username..." 
               value={search} 
               onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={onSearch} className={` px-5 py-3 rounded-md ${isDark ? "bg-blue-700" : "text-white bg-blue-700" } absolute right-3 top-2 text-[15px] cursor-pointer hover:bg-blue-800`}>Search</button>
            
          </div>
        </>
    )
}

export default Search
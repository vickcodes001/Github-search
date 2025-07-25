import Search from "./components/Search";
import { useState } from "react";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Info from "./components/Info";
import Header from "./components/Header";

const url = "https://api.github.com/users/"

function App() {
  const [isDark, setIsDark] = useState(true);
  const [search, setSearch] = useState("")
  const [data, setData] = useState({})
  
  
  const handleSearch = async () => {
    try {
      const res = await fetch(`${url}${search}`)
      const users = await res.json()
      setData(users)
      console.log(users.items)
    } catch (err) {
      console.error("Error fetching GitHub users:", err)
    }
  }

  return (
    <>
      <div className={`w-[100%] px-5 lg:px-0 h-[100vh] flex flex-col justify-center gap-5 lg:py-90 items-center transition-all ${ isDark ? "bg-slate-900 text-white" : "bg-gray-200"
        }`}>
        <Header 
           isDark={isDark} 
           setIsDark={setIsDark} 
        />
        <Search 
           isDark={isDark} 
           data={data} 
           search={search} 
           setSearch={setSearch} 
           onSearch={handleSearch} 
        />
        <div
          className={`flex flex-col gap-5 w-[100%] lg:w-[60%] bg-slate-800 p-5 lg:p-10 rounded-xl transition-all ${
            isDark
              ? "bg-slate-800 text-white"
              : "bg-white text-slate-900 shadow-2xl"
          }`}
        >
          <Hero
             data={data} 
          />
          <Stats 
             isDark={isDark} 
             data={data}
          />
          <Info
             data={data}
          />
        </div>
      </div>
    </>
  );
}

export default App;

import Search from "./components/Search";
import { useState } from "react";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Info from "./components/Info";
import Header from "./components/Header";
import type { GitHubUser } from "./type";
import { SpinnerCircular } from "spinners-react";

const url = "https://api.github.com/users/";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [search, setSearch] = useState("");
  const [data, setData] = useState<GitHubUser | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {

    const trimmed = search.trim();

    if (!trimmed) {
      setError("Please enter a username");
      setTimeout(() => setError(""), 3000);
      setData(null);
      return;
    }

    try {
      setLoading(true)
      const res = await fetch(`${url}${trimmed}`);
      const users = await res.json();

      if (users.status === "404") {
        setError("User not found");
        setTimeout(() => setError(""), 3000);
        setData(null);
        return;
      }

      setError("");
      setData(users);
    } catch (err) {
      console.error("Error fetching GitHub users:", err);
      setError("Something went wrong");
    }
    finally{setLoading(false)}
  };

  return (
    <>
      <div
        className={`w-[100%] h-[110vh] px-5 pt-10 lg:pt-10 lg:px-0 flex flex-col justify-start gap-5 items-center transition-all ${
          isDark ? "bg-slate-900 text-white" : "bg-gray-200"
        }`}
      >
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Search
          isDark={isDark}
          search={search}
          setSearch={setSearch}
          onSearch={handleSearch}
        />
        <div
          className={`flex flex-col gap-5 px-5 w-[100%] lg:w-[60%] bg-slate-800 rounded-xl transition-all ${
            isDark
              ? "bg-slate-800 text-white" 
              : "bg-white text-slate-900 shadow-2xl"
          }`}
        >
          {loading && <div className="flex justify-center p-5"><SpinnerCircular size={50} color="#00BFFF" /></div>}
          {error && <p className="text-red-600 text-center text-xl font-bold p-5">{error}</p>}
          {data && (
            <>
              <Hero data={data} />
              <Stats isDark={isDark} data={data} />
              <Info data={data} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

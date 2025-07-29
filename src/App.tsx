import Search from "./components/Search";
import { useState } from "react";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Info from "./components/Info";
import Header from "./components/Header";
import type { GitHubUser } from "./type";

const url = "https://api.github.com/users/";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [search, setSearch] = useState("");
  const [data, setData] = useState<GitHubUser | null>(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    const trimmed = search.trim();
    console.log(trimmed);

    if (!trimmed) {
      setError("Please enter a username");
      setTimeout(() => setError(""), 3000);
      setData(null); // Optional: clear previously shown data
      return;
    }

    try {
      const res = await fetch(`${url}${trimmed}`);
      const users = await res.json();

      console.log("API Response:", users);

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
          error={error}
        />
        <div
          className={`flex flex-col gap-5 w-[100%] lg:w-[60%] bg-slate-800 p-5 lg:p-10 rounded-xl transition-all ${
            isDark
              ? "bg-slate-800 text-white"
              : "bg-white text-slate-900 shadow-2xl"
          }`}
        >
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

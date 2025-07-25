import { MdDarkMode, MdLightMode } from "react-icons/md";

type Theme = {
    isDark: boolean,
    setIsDark: (val: boolean) => void,
}

const Header = ({ isDark, setIsDark }: Theme) => {
  return (
   <>
    
      <div className="flex flex-col justify-center items-center gap-5 w-full lg:w-[60%] text-white">
        {isDark ? (
          <div className="flex justify-between w-[100%] items-center gap-2 text-xl">
            <h2 className="text-2xl font-semibold">devFinder</h2>
            <div
              className="flex items-center gap-2 text-xl lg:text-xl cursor-pointer"
              onClick={() => setIsDark(false)}
            >
              <p>Light</p>
              <MdLightMode />
            </div>
          </div>
        ) : (
          <div className="flex justify-between w-[100%] items-center gap-2 text-xl">
            <h2 className="text-2xl font-bold text-black">devFinder</h2>
            <div
              className="flex items-center gap-2 cursor-pointer text-black text-xl lg:text-xl"
              onClick={() => setIsDark(true)}
            >
              <p>Dark</p>
              <MdDarkMode />
            </div>
          </div>
        )}
      </div>
   </>
  );
};

export default Header;

import { GiBatMask } from "react-icons/gi";
import { GiDiploma } from "react-icons/gi";
import { HiNewspaper } from "react-icons/hi2";
import { GiLaptop } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router";
import resume from "../assets/PaulVera_Resume.pdf";
import { useEffect, useState } from "react";

export default function Nav() {
  const [hovered, setHovered] = useState(null); // 'experience', 'portfolio', etc.
  // const [pageURL, setPageURL] = useState();
  const [popUpToggle, setPopUpToggle] = useState("hidden");
  const location = useLocation();

  useEffect(() => {
    // setPageURL(window.location.href);
  }, []);

  setInterval(() => {
    setPopUpToggle("load-ani-pop");
  }, 7000);

  return (
    <div className="text-6xl md:text-8xl ml-7 md:ml-20 lg:ml-50 lg:mr-20 flex md:flex-row flex-nowrap gap-4">
      {/* HomeIcon */}
      {location.pathname === "/home" ? null : (
        <Link
          to="/home"
          className="relative"
          onMouseEnter={() => setHovered("home")}
          onMouseLeave={() => setHovered(null)}>
          <FaHome
            className={`text-purple-300 hover:text-amber-400 hover:cursor-pointer md:hover:scale-110 duration-200 ease-in-out ${popUpToggle}`}
          />
          {hovered === "/home" && (
            <div className="bubble absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-sm px-2 py-1 rounded-md shadow-md">
              home
            </div>
          )}
        </Link>
      )}

      {/* Experience Icon */}
      <Link
        to="/experience"
        className="relative"
        onMouseEnter={() => setHovered("experience")}
        onMouseLeave={() => setHovered(null)}>
        <GiDiploma
          className={`text-purple-300 hover:text-amber-400 hover:cursor-pointer md:hover:scale-110 duration-200 ease-in-out ${popUpToggle}`}
        />
        {hovered === "experience" && (
          <div className="bubble absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-sm px-2 py-1 rounded-md shadow-md">
            experience
          </div>
        )}
      </Link>

      {/* Portfolio Icon */}
      <Link
        to="/projects"
        className="relative"
        onMouseEnter={() => setHovered("portfolio")}
        onMouseLeave={() => setHovered(null)}>
        <GiLaptop
          className={`text-purple-300 hover:text-amber-400 hover:cursor-pointer md:hover:scale-110 duration-200 ease-in-out ${popUpToggle}`}
        />
        {hovered === "portfolio" && (
          <div className="bubble absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-sm px-2 py-1 rounded-md shadow-md">
            portfolio
          </div>
        )}
      </Link>

      {/* About Me Icon */}
      <Link
        to="/about"
        className="relative"
        onMouseEnter={() => setHovered("about")}
        onMouseLeave={() => setHovered(null)}>
        <GiBatMask
          className={`text-purple-300 hover:text-amber-400 hover:cursor-pointer md:hover:scale-110 duration-200 ease-in-out ${popUpToggle}`}
        />
        {hovered === "about" && (
          <div className="bubble absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-sm px-2 py-1 rounded-md shadow-md">
            about
          </div>
        )}
      </Link>

      {/* Resume Icon */}
      <a
        href={resume}
        download
        className="relative"
        onMouseEnter={() => setHovered("resume")}
        onMouseLeave={() => setHovered(null)}>
        <HiNewspaper
          className={`text-purple-300 hover:text-amber-400 hover:cursor-pointer md:hover:scale-110 duration-200 ease-in-out ${popUpToggle}`}
        />
        {hovered === "resume" && (
          <div className="bubble absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-sm px-2 py-1 rounded-md shadow-md">
            resume
          </div>
        )}
      </a>
    </div>
  );
}

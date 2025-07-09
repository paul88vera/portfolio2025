import vid from "../assets/bg_pressmaster.webm";
import { GiBatMask } from "react-icons/gi";
import { GiDiploma } from "react-icons/gi";
import { HiNewspaper } from "react-icons/hi2";
import { GiLaptop } from "react-icons/gi";
import { Link } from "react-router";
import resume from "../assets/PaulVera_Resume.pdf";
import { useState } from "react";

export default function Home() {
  const [hovered, setHovered] = useState(null); // 'experience', 'portfolio', etc.

  return (
    <div className="relative overflow-hidden">
      {/* video background */}
      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        <video
          src={vid}
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none saturate-0 contrast-100 brightness-75"
          autoPlay
          loop
          muted
        />
      </div>

      <div className="z-10 text-white text-7xl border-4 border-white absolute h-dvh w-dvw top-0 left-0 scale-95 flex flex-col justify-center align-middle ">
        <div className="text-white clear z-40">
          <div className="relative flex flex-col gap-0">
            <span className="text-5xl md:text-8xl flex flex-row flex-nowrap m-auto">
              <p className="load-ani">I'm a</p>

              <div className="text-6xl md:text-8xl ml-10 md:ml-20 lg:ml-50 lg:mr-20 flex md:flex-row flex-nowrap gap-4">
                {/* Experience Icon */}
                <Link
                  to="/experience"
                  className="relative"
                  onMouseEnter={() => setHovered("experience")}
                  onMouseLeave={() => setHovered(null)}>
                  <GiDiploma className="text-purple-300 hover:text-amber-400 hover:cursor-pointer md:hover:scale-110 duration-200 ease-in-out load-ani-pop" />
                  {hovered === "experience" && (
                    <div className="bubble absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-sm px-2 py-1 rounded-md shadow-md">
                      experience
                    </div>
                  )}
                </Link>

                {/* Portfolio Icon */}
                <Link
                  to="/portfolio"
                  className="relative"
                  onMouseEnter={() => setHovered("portfolio")}
                  onMouseLeave={() => setHovered(null)}>
                  <GiLaptop className="text-purple-300 hover:text-amber-400 hover:cursor-pointer md:hover:scale-110 duration-200 ease-in-out load-ani-pop" />
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
                  <GiBatMask className="text-purple-300 hover:text-amber-400 hover:cursor-pointer md:hover:scale-110 duration-200 ease-in-out load-ani-pop" />
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
                  <HiNewspaper className="text-purple-300 hover:text-amber-400 hover:cursor-pointer md:hover:scale-110 duration-200 ease-in-out load-ani-pop" />
                  {hovered === "resume" && (
                    <div className="bubble absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-sm px-2 py-1 rounded-md shadow-md">
                      resume
                    </div>
                  )}
                </a>
              </div>
            </span>

            <span className="aboslute text-7xl md:text-9xl font-black text-center text-emerald-400 load-ani-zoomIn z-40">
              FRONT-END
            </span>

            <span className="text-5xl md:text-8xl line-clamp-2 text-center load-ani">
              WEB DEVELOPER
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

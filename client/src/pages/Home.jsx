import vid from "../assets/bg_pressmaster.webm";
import { GiBatMask } from "react-icons/gi";
import { GiDiploma } from "react-icons/gi";
import { HiNewspaper } from "react-icons/hi2";
import { GiLaptop } from "react-icons/gi";
import { Link } from "react-router";
import resume from "../assets/PaulVera_Resume.pdf";
import { useState } from "react";

export default function Home() {
  const [social, setSocial] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <div
        className="relative flex items-center 
        justify-center h-screen overflow-hidden">
        <video
          src={vid}
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none saturate-0 contrast-100 brightness-75"
          autoPlay
          loop
          muted></video>
      </div>
      <div className="z-10 text-white text-7xl border-4 border-white absolute h-dvh w-dvw top-0 left-0 scale-95 flex flex-col justify-center align-middle ">
        <div className="text-white clear z-40">
          <div className="relative flex flex-col gap-0">
            <span className="text-5xl md:text-8xl flex flex-row flex-nowrap m-auto">
              <p className="load-ani">I'm a</p>
              <div className="text-6xl md:text-8xl ml-10 md:ml-20 lg:ml-50 lg:mr-20 flex md:flex-row flex-nowrap gap-4">
                {/* TODO: make the link bubbles appear on mouseover or hover */}
                <Link to="/experience" className="relative">
                  <GiDiploma
                    className="text-purple-300 hover:text-amber-400 hover:cursor-pointer md:hover:scale-110 duration-200 ease-in-out load-ani-pop"
                    title="Experience"
                  />
                  <div className="bubble-cont hidden">experience</div>
                </Link>
                <Link to="/portfolio" className="relative">
                  <GiLaptop
                    className="text-purple-300 hover:text-amber-400 hover:cursor-pointer md:hover:scale-110 duration-200 ease-in-out load-ani-pop"
                    title="Portfolio"
                  />
                  <div className="bubble-cont hidden">portfolio</div>
                </Link>
                <Link to="/about" className="relative">
                  <GiBatMask
                    className="text-purple-300 hover:text-amber-400 hover:cursor-pointer md:hover:scale-110 duration-200 ease-in-out load-ani-pop"
                    title="About Me"
                  />
                  <div className="bubble-cont hidden">about</div>
                </Link>
                <a href={`${resume}`} download className="relative">
                  <HiNewspaper
                    className="text-purple-300 hover:text-amber-400 hover:cursor-pointer md:hover:scale-110 duration-200 ease-in-out load-ani-pop"
                    title="Resume"
                  />
                  <div className="bubble-cont hidden">resume</div>
                </a>
              </div>
            </span>
            <span className="aboslute text-7xl md:text-9xl font-black text-center text-emerald-400 load-ani-zoomIn z-40">
              FRONT-END
            </span>

            <span className="text-5xl md:text-8xl line-clamp-2 text-center load-ani ">
              WEB DEVELOPER
            </span>
          </div>
        </div>
      </div>
      <div
        onMouseEnter={() => {
          setSocial(true);
        }}
        onMouseLeave={() => {
          setSocial(false);
        }}
        className="absolute bg-slate-950 p-2 z-20 bottom-0 right-10 md:right-20 text-white border-2 border-white flex flex-row gap-6 ease-in-out delay-300">
        <div>© 2025 by Paul Vera</div>
        {social & (window.innerWidth > 768) ? (
          <div>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/paul88vera/"
              className="hover:text-amber-400">
              LinkedIn{" "}
            </Link>
            |
            <Link
              target="_blank"
              to="https://github.com/paul88vera/"
              className="hover:text-amber-400">
              {" "}
              GitHub{" "}
            </Link>
            |
            <Link
              target="_blank"
              to="https://www.instagram.com/myfarewell88/"
              className="hover:text-amber-400">
              {" "}
              Instagram
            </Link>
          </div>
        ) : null}
        {window.innerWidth < 768 ? (
          <div className="block md:hidden">
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/paul88vera/"
              className="hover:text-amber-400">
              LinkedIn{" "}
            </Link>
            |
            <Link
              target="_blank"
              to="https://github.com/paul88vera/"
              className="hover:text-amber-400">
              {" "}
              GitHub{" "}
            </Link>
            |
            <Link
              target="_blank"
              to="https://www.instagram.com/myfarewell88/"
              className="hover:text-amber-400">
              {" "}
              Instagram
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

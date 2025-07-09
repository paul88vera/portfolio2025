import { useState } from "react";
import { Outlet, ScrollRestoration, Link } from "react-router";

export default function RootLayout() {
  const [social, setSocial] = useState(false);
  return (
    <div className="flex row flex-nowrap w-full">
      <ScrollRestoration />

      <div className={`main-content w-full`}>
        <div className="main-content-bg"></div>
        <Outlet />
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

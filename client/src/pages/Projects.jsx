import { Link, useLoaderData } from "react-router";
import { getProjects } from "../api/projects";
import Nav from "../components/Nav";
import { FaRegComment } from "react-icons/fa";

export default function Projects() {
  const projects = useLoaderData();

  return (
    <div className="px-2 md:w-dvw h-auto md:h-dvh pb-20 pt-20 bg-img-container">
      <Nav />
      <div className="p-2 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-4 justify-center">
          {projects.map((item) => (
            <div
              key={item.ProjectID}
              className="flex flex-col gap-2 p-4 rounded-lg bg-slate-100 md:w-[100%] w-full justify-between">
              <div>
                <img src={item.ProjectIMG} alt={item.ProjectDesc} />
              </div>
              <div className="font-bold text-[1.3rem]">{item.ProjectName}</div>
              <div className="py-1 px-2 rounded-full bg-emerald-600 text-white w-[70px] w-max-[100px] text-center text-[12px]">
                {item.ProjectType}
              </div>
              <div>{item.ProjectDesc}</div>

              <div className="flex flex-col gap-2">
                <Link
                  to={`/project/${item.ProjectName}`}
                  className="bg-slate-600 hover:bg-emerald-700  py-2 px-2 text-center rounded-sm text-white hover:scale-105 transition-all ease-in-out">
                  Case Study
                </Link>
                <Link
                  to={item.ProjectGit}
                  className="bg-slate-900 hover:bg-emerald-700  py-2 px-2 text-center rounded-sm text-white hover:scale-105 transition-all ease-in-out">
                  View Code
                </Link>
              </div>
              <div className="flex flex-row">
                <div onClick={() => {}}>
                  <FaRegComment className="hover:text-emerald-600 cursor-pointer hover:scale-110 transition-all ease-in-out" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function loader({ request: { signal } }) {
  return getProjects({ signal });
}

// eslint-disable-next-line react-refresh/only-export-components
export const projectData = {
  loader,
  element: <Projects />,
};

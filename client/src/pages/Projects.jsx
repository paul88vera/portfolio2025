import { Link, useLoaderData } from "react-router";
import { getProjects } from "../api/projects";
import Nav from "../components/Nav";
// import Card from "../components/Card";

export default function Projects() {
  const projects = useLoaderData();

  return (
    <div className="p-8 bg-slate-950 h-[100%] pb-20">
      <Nav />
      <div className="p-2 md:p-8">
        <h1 className="text-white">Projects</h1>
        <div className="flex flex-row flex-wrap gap-4 w-full mt-4 justify-center">
          {projects.map((item) => (
            <div
              key={item.ProjectID}
              className="flex flex-col gap-2 p-2 rounded-lg bg-slate-100 md:w-[30%] w-[100%] justify-between">
              <div>
                <img src={item.ProjectIMG} alt={item.ProjectDesc} />
              </div>
              <div className="font-bold uppercase">{item.ProjectName}</div>
              <div className="py-1 px-2 rounded-full bg-purple-600 text-white w-[70px] w-max-[100px] text-center text-[12px]">
                {item.ProjectType}
              </div>
              <div>{item.ProjectDesc}</div>

              <div className="flex flex-col gap-1">
                <Link
                  to={item.ProjectLink}
                  className="bg-emerald-500 hover:bg-emerald-600 py-1 px-2 text-center rounded-sm">
                  Case Study
                </Link>
                <Link
                  to={item.ProjectGit}
                  className="bg-emerald-500 hover:bg-emerald-600 py-1 px-2 text-center rounded-sm">
                  View Code
                </Link>
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

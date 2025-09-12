import { useLoaderData } from "react-router";
import { getOneProject } from "../api/projects";
import Nav from "../components/Nav";

// eslint-disable-next-line react-refresh/only-export-components
const ProjectInner = () => {
  const { project } = useLoaderData();

  return (
    <div className="px-2 pb-20 pt-20 bg-img-container text-white h-screen">
      <Nav />

      <div className="w-100 p-2 md:p-8">ProjectInner {project.ProjectID}</div>
    </div>
  );
};

async function loader({ request: { signal }, params: { id } }) {
  const project = await getOneProject(id, { signal });
  return { project: project };
}

export const ProjectInnerRoute = {
  loader,
  element: <ProjectInner />,
};

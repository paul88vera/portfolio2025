import { baseApi } from "./base";

// @route   GET /projects
// @desc    Fetch All Projects
// @access  Public
export function getProjects(options) {
  return baseApi
    .get("/projects", options)
    .then((res) => (Array.isArray(res.data) ? res.data : [res.data]));
}

// @route   GET /projects/:id
// @desc    Fetch One Project
// @access  Public
export function getOneProject(id) {
  return baseApi.get(`/projects/${id}`).then((res) => res.data);
}

// @route   POST /projects/:id
// @desc    Add One Project
// @access  Private
export function addProject(data, options) {
  return baseApi.post("/projects", data, options).then((res) => res.data);
}

// @route   PUT /projects/:id
// @desc    Update A Project
// @access  Private
export function editProject(id, data, options) {
  return baseApi.put(`/projects/${id}`, data, options).then((res) => res.data);
}

// @route   DELETE /projects/:id
// @desc    Delete A Project
// @access  Private
export function deleteProject(id) {
  return baseApi.delete(`/projects/${id}`, { method: "DELETE" }).then(() => {
    window.location.replace("/projects");
  });
}

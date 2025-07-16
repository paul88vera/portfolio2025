import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const baseApi = axios.create({
  baseURL: `${URL}`,
});

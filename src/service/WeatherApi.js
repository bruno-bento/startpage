import axios from "axios";

const api = axios.create({
  baseURL: "https://wttr.in/",
});

export default api;
import axios from "axios";

const api = axios.create({
  baseURL: "http://wttr.in/",
});

export default api;
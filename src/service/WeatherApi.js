import axios from "axios";

const api = axios.create({
  baseURL: "http://wttr.in/Cotia?format=j1",
});

export default api;
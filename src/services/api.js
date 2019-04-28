import axios from "axios";

const api = axios.create({
  baseURL: "https://box-files.herokuapp.com"
});

export default api;

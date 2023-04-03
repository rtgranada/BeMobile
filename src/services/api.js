import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:3000",
});

api.interceptors.request.use(async (config) => {
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9";

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;

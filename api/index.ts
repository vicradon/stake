import axios from "axios";
import Cookies from "js-cookie";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 90000,
});

http.defaults.headers.common["Authorization"] = Cookies.get("userToken")
  ? `Bearer ${Cookies.get("userToken")}`
  : "";

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/";
    } else {
      return Promise.reject(error);
    }
  }
);

export default http;

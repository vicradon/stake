import http from ".";
import Cookies from "js-cookie";

export const register = async (params) => {
  const { name, email, password } = params;

  const { data } = await http.post("/register", {
    name,
    email,
    password,
  });

  Cookies.set("userToken", data.token);
  return data;
};

export const login = async ({ email, password }) => {
  const { data } = await http.post("/login", { email, password });

  Cookies.set("userToken", data.token);
  return data;
};

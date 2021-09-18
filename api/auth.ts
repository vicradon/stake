import http from ".";

export const register = async (params) => {
  const { name, email, password } = params;

  const { data } = await http.post("/register", {
    name,
    email,
    password,
  });

  return data;
};

export const login = async ({ email, password }) => {
  const { data } = await http.post("/login", { email, password });

  return data;
};

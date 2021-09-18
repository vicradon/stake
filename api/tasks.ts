import http from ".";

export const createTask = async ({ title, deadline }) => {
  const { data } = await http.post("/login", { title, deadline });

  return data;
};

import axios from "axios";

export const fetchTodos = () => {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },

    url: "http://localhost:3000/api/todos",
  });
};

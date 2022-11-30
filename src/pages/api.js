import axios from "axios";

export const myApi = axios.create({
  baseURL: "https://nc-games-server-kp.herokuapp.com/api/",
});

export const getAllCategories = () => {
  return myApi.get("/categories").then((response) => {
    return response.data.categories;
  });
};

/* xport const getUsername = () => {
  return myApi.get("users/:username").then((response) => {
    return response.data.users;
  });
};
 */

import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5160/",
});

client.interceptors.response.use(undefined, ({ response }) => {
  const data = response.data;
  if (data.StatusCode) {
    return Promise.reject(data);
  }

  return data;
});

export default client;

import axios from "axios";

import { API_URL } from "@/constants/common";

const client = axios.create({
  baseURL: API_URL,
});

client.interceptors.response.use(undefined, ({ response }) => {
  const data = response.data;
  if (data.statusCode) {
    return Promise.reject(data);
  }

  return data;
});

export default client;

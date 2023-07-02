import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3f14ca540c3941bb99815488d2249aa4",
  },
});

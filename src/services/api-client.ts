import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "493aed9144e642a39bca2f62b6926733",
  },
});

import { useGetData } from "@/hooks/useStorage";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: `Bearer ${
      useGetData("token") !== null ? useGetData("token") : ""
    }`,
  },
});

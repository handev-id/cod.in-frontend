import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios";
import { AxiosError } from "axios";

type Props = {
  endpoint: string;
  params?: Record<string, unknown>;
  key: string;
};

export default function useGetApi<T>({ key, params = {}, endpoint }: Props) {
  const { data, isLoading, error } = useQuery<T, AxiosError>({
    queryKey: [key],
    queryFn: async () => {
      const { data } = await axiosInstance.get<T>(endpoint, { params });
      return data;
    },
  });

  return {
    data,
    isLoading,
    error,
  };
}

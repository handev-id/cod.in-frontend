import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axios";
import { AxiosError } from "axios";

export default function usePostApi<T, U>({ endpoint }: { endpoint: string }) {
  const { mutate, isLoading, error, data } = useMutation<U, AxiosError, T>({
    mutationFn: async (newData: T) => {
      const { data } = await axiosInstance.post<U>(endpoint, newData);
      return data;
    },
  });

  return {
    mutate,
    isLoading,
    error,
    data,
  };
}

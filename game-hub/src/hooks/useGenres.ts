import apiClient, { GetResponse } from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface GenreData {
  id: number;
  name: string;
  image_background: string;
}

const getGenres = () => {
  return apiClient.get<GetResponse<GenreData>>("/genres").then((response) => response.data);
};

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  });

export default useGenres;

import APIClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface GenreData {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<GenreData>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  });

export default useGenres;

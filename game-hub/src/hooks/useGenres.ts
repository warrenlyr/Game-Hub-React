import APIClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { GenreData } from "../entities/GenreData";

const apiClient = new APIClient<GenreData>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  });

export default useGenres;

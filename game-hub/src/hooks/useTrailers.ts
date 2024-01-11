import APIClient from "../services/apiClient";
import GameTrailer from "../entities/GameTrailer";
import { useQuery } from "@tanstack/react-query";

const useTrailers = (gameId: number | string) => {
  const apiClient = new APIClient<GameTrailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  });
};

export default useTrailers;

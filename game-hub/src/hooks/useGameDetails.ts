import APIClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import GameData from "../entities/GameData";

const apiClient = new APIClient<GameData>("/games");

const useGameDetails = (slug: string) =>
  useQuery({
    queryKey: ["gameDetails", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  });

export default useGameDetails;

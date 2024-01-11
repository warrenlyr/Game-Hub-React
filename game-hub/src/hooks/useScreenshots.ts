import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

const useScreenshots = (gameId: number | string) => {
  const apiClient = new APIClient<GameScreenshot>(
    `/games/${gameId}/screenshots`
  );

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  });
};

export default useScreenshots;

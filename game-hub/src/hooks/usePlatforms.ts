import { useQuery } from "@tanstack/react-query";
import apiClient, { GetResponse } from "../services/apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const getPlatforms = () => {
  return apiClient
    .get<GetResponse<Platform>>("/platforms/lists/parents")
    .then((response) => response.data);
};

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: getPlatforms,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  });

export default usePlatforms;

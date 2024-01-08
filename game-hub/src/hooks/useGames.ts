import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { GetResponse } from "../services/apiClient";
import { Platform } from "./usePlatforms";

export interface GameData {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const getGames = (endpoint: string, requestConfig?: any) => {
  return apiClient
    .get<GetResponse<GameData>>(endpoint, requestConfig)
    .then((response) => response.data);
};

const useGames = (gameQuery: GameQuery) =>
  // useData<GameData>(
  //   "/games",
  //   {
  //     params: {
  //       genres: gameQuery.genre?.id,
  //       platforms: gameQuery.platform?.id,
  //       ordering: gameQuery.sortOrder,
  //       search: gameQuery.searchText,
  //     },
  //   },
  //   [gameQuery]
  // );
  useQuery<GetResponse<GameData>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      getGames("/games", {
        params: {
          genres: gameQuery.genre?.id,
          parent_latforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  });

export default useGames;

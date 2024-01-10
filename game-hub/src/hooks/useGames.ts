import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { GetResponse } from "../services/apiClient";
import { Platform } from "./usePlatforms";
import useGameQueryStore from "../store";

export interface GameData {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const apiClient = new APIClient<GameData>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<GetResponse<GameData>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_latforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.next) {
        return allPages.length + 1;
      }
      return undefined;
    },
    staleTime: 1000 * 60 * 60 * 24, // 1 day
    initialPageParam: 1, // Add the initialPageParam property
  });
};

export default useGames;

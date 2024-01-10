import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {

  const {
    data,
    error,
    isLoading,
    // isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const fetchedGamesCount = data?.pages.reduce(
    (count, page) => count + page.results.length,
    0
  );

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        dataLength={fetchedGamesCount || 0}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<Spinner />}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;

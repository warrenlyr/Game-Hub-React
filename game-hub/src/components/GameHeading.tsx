import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const {data: genres} = useGenres();
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);

  const {data: platforms} = usePlatforms();
  const platform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  const heading = `${genre?.name || ""} ${
    platform?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginBottom={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
};

export default GameHeading;

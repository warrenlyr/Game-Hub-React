import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const {data: genres} = useGenres();
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);

  const genre = genres?.results.find((genre) => genre.id === selectedGenreId);

  const {data: platforms} = usePlatforms();
  const platform = platforms?.results.find(
    (platform) => platform.id === selectedPlatformId
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

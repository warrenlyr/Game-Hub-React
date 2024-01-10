import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import cropImageByUrl from "../services/imageCropByUrl";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore(s => s.setGenreId);

  if (error) return <Text>Unable to fetch data</Text>;
  if (isLoading) return <Spinner />;

  return (
    <List>
      <Heading fontSize='3xl' marginBottom={3}>Genres</Heading>
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              boxSize={10}
              borderRadius={8}
              src={cropImageByUrl(genre.image_background, 600, 400)}
              alt={genre.name}
              objectFit='cover'
            />
            <Button
              fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
              fontSize="lg"
              variant="link"
              onClick={() => setGenreId(genre.id)}
              whiteSpace='normal'
              textAlign='left'
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

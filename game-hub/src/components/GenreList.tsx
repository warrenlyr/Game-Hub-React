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
import useGenres, { GenreData } from "../hooks/useGenres";
import cropImageByUrl from "../services/imageCropByUrl";

interface GenreListProps {
  onSelecteGenre: (genre: GenreData) => void;
  selectedGenre: GenreData | null;
}

const GenreList = ({ onSelecteGenre: onSelectedGenre, selectedGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();

  if (error) return <Text>Unable to fetch data</Text>;
  if (isLoading) return <Spinner />;

  return (
    <List>
      <Heading fontSize='3xl' marginBottom={3}>Genres</Heading>
      {data.map((genre) => (
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
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              fontSize="lg"
              variant="link"
              onClick={() => onSelectedGenre(genre)}
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

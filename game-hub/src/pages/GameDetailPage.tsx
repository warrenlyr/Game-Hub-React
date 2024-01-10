import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Box, Heading } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  // Get the game id from the url
  const { slug } = useParams<{ slug: string }>();
  // Get the game details from the api
  const { data, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <p>Loading...</p>;

  if (error || !data) throw error;

  return (
    <Box padding={5}>
      <Heading>{data.name}</Heading>
      <ExpandableText>{data.description_raw}</ExpandableText>
      <GameAttributes game={data} />
    </Box>
  );
};

export default GameDetailPage;

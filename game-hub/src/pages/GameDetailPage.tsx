import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Box, Heading } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshot from "../components/GameScreenshot";

const GameDetailPage = () => {
  // Get the game id from the url
  const { slug } = useParams<{ slug: string }>();
  // Get the game details from the api
  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <p>Loading...</p>;

  if (error || !game) throw error;

  return (
    <Box padding={5}>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshot gameId={game.id} />
    </Box>
  );
};

export default GameDetailPage;

import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Box, Heading, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  // Get the game id from the url
  const { slug } = useParams<{ slug: string }>();
  // Get the game details from the api
  const { data, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <p>Loading...</p>;

  if (error || !data) throw error;

  return (
    <>
      <Box padding={5}>
          <Heading>{data.name}</Heading>
          <ExpandableText>{data.description_raw}</ExpandableText>
      </Box>
    </>
  );
};

export default GameDetailPage;

import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginBottom={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
};

export default GameHeading;

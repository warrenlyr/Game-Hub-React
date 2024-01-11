import useScreenshots from "../hooks/useScreenshots";
import { SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: string | number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return <div>Loading...</div>;

  if (error || !data) throw error;

  return (
    <SimpleGrid columns={{base: 1, md: 2}} spacing={5} paddingTop={3}>
        {data.results.map((screenshot) => (
            <img key={screenshot.id} src={screenshot.image} alt="screenshot" />
        ))}
    </SimpleGrid>
  )
};

export default GameScreenshot;

import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { GameData } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import cropImageByUrl from "../services/imageCropByUrl";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: GameData;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image
        src={cropImageByUrl(game.background_image, 600, 400)}
        alt={game.name}
      />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

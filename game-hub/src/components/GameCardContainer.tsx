import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box borderRadius={10} overflow="hidden" 
    transition='transform 0.3s ease'
    _hover={{transform: 'scale(1.03)'}}>
      {children}
    </Box>
  );
};

export default GameCardContainer;

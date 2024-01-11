import { HStack } from "@chakra-ui/react";
import { PiGameControllerFill } from "react-icons/pi";
import ColorModeSwitch from "./ColorModeSwitch";
import { IconContext } from "react-icons";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="0.75rem">
      <Link to='/'>
        <IconContext.Provider value={{ size: "2em" }}>
          <PiGameControllerFill />
        </IconContext.Provider>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

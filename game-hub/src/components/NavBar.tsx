import { HStack } from "@chakra-ui/react";
import { FaXTwitter } from "react-icons/fa6";
import ColorModeSwitch from "./ColorModeSwitch";
import { IconContext } from "react-icons";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="0.75rem">
      <Link to='/'>
        <IconContext.Provider value={{ size: "2em" }}>
          <FaXTwitter />
        </IconContext.Provider>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

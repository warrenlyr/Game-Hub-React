import { HStack } from "@chakra-ui/react";
import { FaXTwitter } from "react-icons/fa6";
import ColorModeSwitch from "./ColorModeSwitch";
import { IconContext } from "react-icons";
import SearchInput from "./SearchInput";

interface NavBarProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: NavBarProps) => {
  return (
    <HStack padding="0.75rem">
      <IconContext.Provider value={{ size: "2em" }}>
        <FaXTwitter />
      </IconContext.Provider>
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

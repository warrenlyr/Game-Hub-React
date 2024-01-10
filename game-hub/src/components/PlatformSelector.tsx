import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const [platform] = useState("Platforms");

  const setPlatformId = useGameQueryStore(s => s.setPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => {
              setPlatformId(platform.id)
            }}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;

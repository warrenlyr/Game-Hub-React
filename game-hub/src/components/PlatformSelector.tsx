import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { useState } from "react";

interface PlatformSelectorProps {
  onSelectePlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectePlatform }: PlatformSelectorProps) => {
  const { data, isLoading, error } = usePlatforms();
  const [platform, setPlatform] = useState("Platforms");

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
              onSelectePlatform(platform);
              setPlatform(platform.name);
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

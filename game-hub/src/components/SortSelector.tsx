import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const [sort] = useState("Relevance");

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  // name, released, added, created, updated, rating, metacritic
  const sortOrders = [
    { label: "Relevance", value: "" },
    { label: "Name", value: "name" },
    { label: "Date Released", value: "-released" },
    { label: "Date Added", value: "-added" },
    { label: "Date Created", value: "created" },
    { label: "Date Updated", value: "updated" },
    { label: "Rating", value: "-rating" },
    { label: "Popularity", value: "-metacritic" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort By: {sort}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            key={sortOrder.value}
            value={sortOrder.value}
            onClick={() => {
              setSortOrder(sortOrder.value);
            }}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

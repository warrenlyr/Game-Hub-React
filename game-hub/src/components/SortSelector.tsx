import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
  onSelectSort: (sort: string) => void;
}

const SortSelector = ({ onSelectSort }: SortSelectorProps) => {
    const [sort, setSort] = useState("Relevance");

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
                onSelectSort(sortOrder.value);
                setSort(sortOrder.label);
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

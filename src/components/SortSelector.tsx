import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/all";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrders: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrders }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrder.find((e) => e.value === sortOrders);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((menuItem) => (
          <MenuItem
            onClick={() => onSelectSortOrder(menuItem.value)}
            key={menuItem.value}
            value={menuItem.value}
          >
            {menuItem.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

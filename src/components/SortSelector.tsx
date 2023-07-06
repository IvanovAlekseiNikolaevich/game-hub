import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/all";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by relevance
      </MenuButton>
      <MenuList>
        <MenuItem>one</MenuItem>
        <MenuItem>two</MenuItem>
        <MenuItem>three</MenuItem>
        <MenuItem>4</MenuItem>
        <MenuItem>5</MenuItem>
        <MenuItem>6</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

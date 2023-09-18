import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { useContext } from "react";
import { BsChevronDown } from "react-icons/bs";
import { GameQueryContext } from "../App";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const { gameQuery, setGameQuery } = useContext(GameQueryContext);
  const sortOrder = gameQuery.sortOrder;

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>

      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() =>
              setGameQuery({ ...gameQuery, sortOrder: order.value })
            }
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

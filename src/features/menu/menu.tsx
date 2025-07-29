import { Flex } from "@chakra-ui/react";
import { useLoaderData } from "react-router";
import { getMenu } from "../../services/apiCoffemenu";
import MenuItem from "./menuItem";
import type { MenuItemTypes } from "../../types/menu";

export default function Menu() {
  const menu = useLoaderData() as MenuItemTypes[];
  return (
    <Flex gap="4" wrap="wrap" justifyItems="center" justifyContent="center">
      {menu.map((coffe) => (
        <MenuItem coffe={coffe} key={coffe.id} />
      ))}
    </Flex>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader(): Promise<MenuItemTypes[]> {
  const menu = await getMenu();
  return menu;
}

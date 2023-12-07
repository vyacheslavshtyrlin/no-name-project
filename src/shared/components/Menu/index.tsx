import React, { ReactElement, ReactNode } from "react";
import {
  Menu as MenuChakra,
  MenuButton,
  MenuList,
  MenuItem,
  MenuProps,
} from "@chakra-ui/react";

type MenuItemType = {
  key: string;
  name: string;
  icon?: ReactElement;
};

interface MenuInterface extends MenuProps {
  items: MenuItemType[];
  onSelect: (key: any) => void;
}

export const Menu = ({ items, onSelect, ...rest }: MenuInterface) => {
  return (
    <MenuChakra {...rest}>
      <MenuButton>{rest.children as any}</MenuButton>
      <MenuList>
        {items.map((item) => (
          <MenuItem
            icon={item.icon}
            onClick={() => onSelect(item.key)}
            key={item.key}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </MenuChakra>
  );
};

import React from "react";
import { Menu, routingConfig } from "@/shared";
import { Avatar } from "@chakra-ui/react";
import { ItemKeyType, menuItems } from "./utils";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "@/entities";

export const UserMenu = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleSelect = (key: ItemKeyType) => {
    switch (key) {
      case "profile":
        nav(routingConfig.profile.path);
        break;
      case "logout":
        dispatch(logout());
        break;
    }
  };
  return (
    <Menu onSelect={(key: ItemKeyType) => handleSelect(key)} items={menuItems}>
      <Avatar size="sm" />
    </Menu>
  );
};

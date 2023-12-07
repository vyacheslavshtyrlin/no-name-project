import React from "react";
import { FaPowerOff, FaUser } from "react-icons/fa";

export const menuItems = [
  { key: "profile", name: "Профиль", icon: <FaUser /> },
  { key: "logout", name: "Выйти", icon: <FaPowerOff /> },
];

export type ItemKeyType = 'profile' | 'logout'
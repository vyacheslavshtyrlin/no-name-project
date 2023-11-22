import React from "react";
import { FiUser } from "react-icons/fi";

export type MenuParentItem = {
  type: "parent";
  title: string;
  path: string;
  icon: React.ReactNode;
  children?: MenuChildItem[];
};

export type MenuChildItem = {
  type: "child";
  title: string;
  path: string;
};

export const menuItems: MenuParentItem[] = [
  {
    title: "item",
    type: "parent",
    path: "/test",
    icon: <FiUser />,
    children: [
      { title: "child item", type: "child", path: "/test" },
      { title: "child item", type: "child", path: "/test" },
      { title: "child item", type: "child", path: "/test" },
    ],
  },

  {
    title: "item1",
    type: "parent",
    icon: <FiUser />,
    path: "/test1",
  },
  {
    title: "item",
    type: "parent",
    path: "/test",
    icon: <FiUser />,
    children: [
      { title: "child item", type: "child", path: "/test" },
      { title: "child item", type: "child", path: "/test" },
      { title: "child item", type: "child", path: "/test" },
    ],
  },
];

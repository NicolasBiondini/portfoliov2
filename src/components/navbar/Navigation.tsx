import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

type Props = {
  toggle: () => void;
};

export const Navigation = ({ toggle }: Props) => (
  <motion.ul
    className="p-[25px] absolute top-[100px] w-[230px] m-0 z-40"
    variants={variants}
    animate={variants.open}
    exit={variants.closed}
  >
    {items.map((item, i) => (
      <MenuItem
        toggle={toggle}
        name={item.name}
        path={item.path}
        key={`${item.path} i${i}`}
      />
    ))}
  </motion.ul>
);

const items = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({
  name,
  path,
  toggle,
}: {
  name: string;
  path: string;
  toggle: () => void;
}) => {
  return (
    <motion.li
      className="p-0 m-0 mb-[40px] flex align-middle cursor-pointer place-items-center"
      variants={variants}
      initial={variants.closed}
      animate={variants.open}
      exit={variants.closed}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
    >
      <Link
        href={path}
        className={"font-mono text-2xl flex flex-row"}
        scroll={false}
      >
        <span className="text-white">{">"}</span>
        <p className=" dark:text-black pl-2 flex-1">{name}</p>
      </Link>
    </motion.li>
  );
};

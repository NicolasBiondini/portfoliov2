type Props = {};

import * as React from "react";
import { useRef } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useDimensions } from "../../hooks/use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Link from "next/link";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 260px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const NavBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className="w-full h-[80px] transition ease-out duration-500 bg-mainWithe dark:bg-black dark:text-mainWithe fixed top-0 left-0 flex place-items-center z-30">
      <Link
        href={"/"}
        scroll={false}
        className=" text-lg lg:text-xl ml-3 xl:ml-10 font-semibold font-mono cursor-pointer"
      >
        Nicolás Biondini
      </Link>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className={"absolute top-0 right-0 bottom-0 w-[300px] h-100 "}
      >
        <motion.div
          className="absolute top-0 bottom-0 right-0 w-[300px] bg-orange-600 h-screen z-30"
          variants={sidebar}
        />
        <AnimatePresence mode="wait">
          {isOpen && <Navigation toggle={() => toggleOpen()} />}
        </AnimatePresence>

        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </div>
  );
};

export default NavBar;

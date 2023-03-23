import { useState, useEffect, SetStateAction, Dispatch } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
  data: {
    title: string;
    skills: string[];
    id: number;
  }[];
};

function Acordion({ data }: Props) {
  const [childOpen, setChildOpen] = useState(1);

  return (
    <div>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <AcordionItem
                title={item.title}
                skills={item.skills}
                id={item.id}
                childOpen={childOpen}
                setChildOpen={setChildOpen}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

type PropsAcordionItem = {
  title: string;
  skills: string[];
  id: number;
  childOpen: number;
  setChildOpen: Dispatch<SetStateAction<number>>;
};

function AcordionItem({
  title,
  skills,
  id,
  childOpen,
  setChildOpen,
}: PropsAcordionItem) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (id === childOpen) {
      return setOpened(true);
    } else if (opened) {
      return setOpened(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [childOpen]);

  return (
    <div
      className={`cursor-pointer mt-4 text-black dark:text-mainWithe`}
      onClick={() => setChildOpen(id)}
    >
      <div className={`font-bold text-2xl flex flex-row items-center gap-2`}>
        <ChevronRightIcon
          className={`h-5 w-5 font-extrabold text-black dark:text-mainWithe mt-1 transition-all rotate-90 ${
            opened && "rotate-[0deg] text-orange-600 dark:text-orange-600"
          }`}
        />
        <div className={` transition-all ${opened && " text-orange-600 "}`}>
          {title}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {opened && <AcordionOpened skills={skills} />}
      </AnimatePresence>
    </div>
  );
}

function AcordionOpened({ skills }: { skills: string[] }) {
  return (
    <motion.ul
      key="content"
      initial="collapsed"
      animate="open"
      exit="collapsed"
      variants={{
        open: { opacity: 1, height: "auto" },
        collapsed: { opacity: 0, height: 0 },
      }}
      transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
      className={"ml-8 flex flex-col font-mono text-sm"}
    >
      {skills.map((skill) => {
        return (
          <motion.li
            key={skill}
            variants={{
              collapsed: { opacity: 0 },
              open: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.4 }}
            className={"mt-2 flex flex-row gap-1"}
          >
            <span className="font-sans text-orange-600 text-sm">{`>`}</span>
            {skill}
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

export default Acordion;

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import ClickMe from "./svg/ClickMe";
import ViewMore from "./svg/ViewMore";
import Wow from "./svg/Wow";
import Lfg from "./svg/Lfg";
import Omg from "./svg/Omg";
type Props = {
  rotate?: boolean;
  finalKey: string;
  index: number;
  project: cardProjectInfo;
};

function ProjectCard({ rotate, finalKey, index, project }: Props) {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      whileHover={{
        opacity: 1,
        transition: { duration: 0.4 },
      }}
      exit={{ opacity: 0, y: 300, transition: { duration: 0.8 } }}
      className="flex flex-col gap-4 lg:gap-12 lg:flex-row relative"
      onHoverStart={() => setShow(true)}
      onHoverEnd={() => setShow(false)}
    >
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0, y: -300 }}
            animate={
              rotate
                ? { opacity: 1, y: 0, rotate: -18 }
                : { opacity: 1, y: 0, rotate: 8 }
            }
            className={`hidden lg:flex absolute -top-28 xl:-top-24 right-96 ${
              rotate && "right-1 xl:-top-28 -top-20"
            }`}
          >
            <ClickMe />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={
              rotate
                ? { opacity: 1, y: 80, rotate: 15, x: 180 }
                : { opacity: 1, y: 0, rotate: -10 }
            }
            className={`hidden lg:flex absolute -bottom-28 right-52 xl:-bottom-24 z-0 ${
              rotate && "left-0 xl:-bottom-20"
            }`}
          >
            <ViewMore />
          </motion.div>
          {index === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, rotate: 10 }}
              className="hidden lg:flex absolute top-0 xl:top-56 right-0 xl:-left-36 2xl:-left-44"
            >
              <Wow />
            </motion.div>
          )}
          {index === 2 && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, rotate: -30 }}
              className="hidden lg:flex absolute top-0 left-0 "
            >
              <Lfg />
            </motion.div>
          )}
          {index === 3 && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, rotate: -10 }}
              className="hidden lg:flex absolute top-0 xl:bottom-36 right-0 xl:-left-36 2xl:-left-44"
            >
              <Omg />
            </motion.div>
          )}
        </>
      )}

      <Link
        className={`${rotate && "lg:order-2"}`}
        href={`/projects/${project.slug}`}
        scroll={false}
      >
        <div className=" flex small:w-[250px] small:h-[150px] w-[300px] h-[200px] md:w-[453px] md:h-[250px] lg:w-[453px] lg:h-[300px] xl:w-[553px] xl:h-[353px] relative overflow-hidden shadow-2xl z-10  ">
          <Image
            priority
            src={project.image}
            fill
            sizes="(max-width: 379px) 250px 150px,
            (min-width: 768px) 453px 250px, 
            (min-width: 1024px) 453px 300px, 
            (min-width: 1280px) 553px 353px"
            className="object-cover border-none -z-10 "
            alt={project.title}
          />
        </div>
      </Link>
      <div
        className={`flex small:max-w-[240px] flex-col justify-center gap-4 md:gap-8 ${
          rotate && "lg:order-1 lg:items-end lg:text-end"
        }`}
        key={finalKey}
      >
        <h1 className="text-3xl md:text-5xl font-bold">
          <span className="font-mono">
            0{index}
            <span className="text-orange-600 -ml-2">.</span>
          </span>{" "}
          {project.title}
        </h1>
        <p className="font-mono text-sm md:text-base max-w-[300px] md:max-w-sm">
          {project.description}
        </p>
        <Link
          href={`/projects/${project.slug}`}
          className={
            "font-mono z-10  text-dark dark:text-mainWithe hover:text-orange-600 dark:hover:text-orange-600 transition-all"
          }
          scroll={false}
        >
          <span className="text-orange-600">{">"}</span>
          <span className="underline transition-all ml-2">View More</span>
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectCard;

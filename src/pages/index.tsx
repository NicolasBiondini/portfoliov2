import { getAllProjects, getAllPublished } from "@/lib/notion";

import { motion } from "framer-motion";
import Globe from "@/components/Globe";
import SpinWheel from "@/components/SpinWheel";
import Carousel from "@/components/Carousel";
import Acordion from "@/components/Acordion";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Layout from "@/components/Layout";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeProvider";
import useScrollPosition from "@/hooks/useScollPosition";
import Me from "@/components/Me";
import Button from "@/components/Button";
import { post } from "@/types/post";
import BlogSection from "@/components/BlogSection";
import { getPoaps } from "@/lib/poap";
import PoapCarousel from "@/components/poapdisplay/PoapCarousel";
import { ModalContext } from "@/context/ModalProvider";
import PoapModal from "@/components/poapdisplay/PoapModal";
import Table from "@/components/svg/Table";
import Math from "@/components/svg/Math";
import Eth from "@/components/svg/Eth";

type Props = {
  projects: cardProjectInfo[];
  posts: post[];
  poaps: poap[];
};

export default function Home({ projects, posts, poaps }: Props) {
  const data = [
    {
      title: "Languages",
      skills: [
        "TypeScript",
        "JavaScript",
        "Solidity",
        "Rust",
        "Python",
        "SQL",
        "C",
        "HTML",
        "CSS",
      ],
      id: 1,
    },
    {
      title: "Technologies",
      skills: [
        "React Js",
        "Tailwind Css",
        "Framer Motion",
        "GraphQL",
        "Ethers.js",
        "React Query",
        "Redux Toolkit",
        "Node Js",
        "Express",
        "Jest",
        "React Testing Library",
        "Storybook",
        "Docker",
        "Docker Compose",
        "MongoDB",
        "PostgreSQL",
        "Git",
        "Linux",
      ],
      id: 2,
    },
    { title: "Frameworks", skills: ["Next Js", "Hardhat"], id: 3 },
    {
      title: "Related Knowledge",
      skills: ["Calculus", "Algebra & Geometry", "Ecommerce", "Marketing"],
      id: 4,
    },
  ];

  const { theme, changeTheme } = useContext(ThemeContext);
  const { showModal } = useContext(ModalContext);
  const yPosition = useScrollPosition();
  useEffect(() => {
    if (yPosition >= 1600 && theme !== "dark") {
      changeTheme("dark");
    }
    if (yPosition < 1600 && theme === "dark") {
      changeTheme("light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yPosition]);

  return (
    <Layout>
      {showModal && <PoapModal />}
      <div
        className={`h-full w-full flex flex-col justify-around items-center gap-24 overflow-x-hidden`}
      >
        <div className="h-full w-full pt-[80px] md:container flex flex-col justify-around pb-16">
          <div className="w-full h-[70vh] lg:h-full flex flex-col gap-10 mt-10 lg:flex-row justify-around place-items-center relative">
            <div className="flex flex-col gap-5 md:gap-10 w-full px-6 lg:w-3/5">
              <motion.h1
                animate={{
                  transition: {
                    delayChildren: 0.4,
                    staggerChildren: 0.1,
                  },
                }}
                className="text-2xl smaller:text-3xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold flex flex-col "
              >
                <div className="inline-block overflow-hidden">
                  <motion.span
                    initial={{ y: 100 }}
                    animate={{
                      y: 0,
                      transition: {
                        ease: [0.6, 0.01, 0.05, 0.95],
                        duration: 1,
                      },
                    }}
                    exit={{
                      y: 100,
                      transition: {
                        ease: [0.6, 0.01, 0.05, 0.95],
                        duration: 1,
                      },
                    }}
                    className="inline-block overflow-hidden "
                  >
                    Hi 👋,
                  </motion.span>
                </div>
                <div className="inline-block overflow-hidden">
                  <motion.span
                    initial={{ y: 100 }}
                    animate={{
                      y: 0,
                      transition: {
                        ease: [0.6, 0.01, 0.05, 0.95],
                        duration: 1,
                      },
                    }}
                    exit={{
                      y: 100,
                      transition: {
                        ease: [0.6, 0.01, 0.05, 0.95],
                        duration: 1,
                      },
                    }}
                    className="inline-block overflow-hidden"
                  >
                    {" I'm Nicolás Biondini and"}
                  </motion.span>
                </div>
                <div className="inline-block overflow-hidden">
                  <motion.span
                    initial={{ y: 100 }}
                    animate={{
                      y: 0,
                      transition: {
                        ease: [0.6, 0.01, 0.05, 0.95],
                        duration: 1,
                      },
                    }}
                    exit={{
                      y: 100,
                      transition: {
                        ease: [0.6, 0.01, 0.05, 0.95],
                        duration: 1,
                      },
                    }}
                    className="inline-block overflow-hidden"
                  >
                    {"I'm a"}{" "}
                    <span className=" relative">
                      <span className="z-10 relative"> Frontend Developer</span>
                      <motion.span
                        initial={{ x: 800 }}
                        animate={{ x: 0 }}
                        transition={{
                          delay: 0.5,
                          duration: 1,
                          linear: [0.17, 0.67, 0.83, 0.67],
                          from: 800,
                        }}
                        exit={{
                          x: 800,
                          transition: {
                            delay: 0.5,
                            duration: 1,
                            linear: [0.17, 0.67, 0.83, 0.67],
                            from: 0,
                          },
                        }}
                        className="w-full h-[60%] md:h-[50%] absolute top-4 sm:top-6 lg:top-7 xl:top-10 2xl:top-12 left-1 lg:left-2 bg-orange-400  z-0 -rotate-1"
                      ></motion.span>
                    </span>
                  </motion.span>
                </div>
              </motion.h1>
              <div className=" inline-block overflow-hidden">
                <motion.span
                  initial={{ y: 100 }}
                  animate={{
                    y: 0,
                    transition: {
                      ease: [0.6, 0.01, 0.05, 0.95],
                      duration: 1,
                    },
                  }}
                  exit={{
                    y: 100,
                    transition: {
                      ease: [0.6, 0.01, 0.05, 0.95],
                      duration: 1,
                    },
                  }}
                  className="font-semibold font-mono small:text-xs text-base lg:text-xl inline-block overflow-hidden "
                >
                  <span className="text-black">
                    ~<span className="text-orange-600">$ </span>
                  </span>
                  nicolasbiondiniwork@gmail.com
                  <span className="mr-2">{"  "}</span>
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.7,
                      repeat: Infinity,
                      linear: [0, 0, 0, 1],
                    }}
                    className="small:w-1 small:h-3 small:mt-[3px] w-2 h-4 mt-1 lg:mt-2 bg-black absolute"
                  ></motion.span>
                </motion.span>
              </div>
            </div>
            <motion.div
              initial={{ y: -200, opacity: 0.8 }}
              animate={{
                y: 0,
                opacity: 1,
                rotate: -16,
                transition: {
                  duration: 0.4,
                  delay: 1.5,
                  ease: "easeOut",
                },
              }}
              exit={{
                y: -200,
                opacity: 0,
                transition: {
                  ease: [0.6, 0.01, 0.05, 0.95],
                  duration: 1,
                  transition: {
                    duration: 0.4,
                    delay: 1.5,
                    ease: "easeOut",
                  },
                },
              }}
              className=" hidden lg:flex absolute lg:top-2 lg:right-64 xl:right-80 xl:top-1 2xl:top-14 "
            >
              <Me />
            </motion.div>
            <Globe />
          </div>
          <SpinWheel />
          <div className="flex flex-col lg:flex-row w-full px-6 gap-6 lg:gap-0">
            <div className="order-2 lg:order-1 lg:w-1/3 flex flex-col lg:gap-4 lg:px-1 xl:px-8">
              <Carousel text="- SKILLS - SKILLS - SKILLS - SKILLS " />
              <Acordion data={data} />
            </div>
            <div className="order-1 lg:order-2 lg:w-2/3 flex flex-col gap-8">
              <Carousel text="- ABOUT - ABOUT - ABOUT - ABOUT " />
              <div className="max-w-3xl font-light font-mono flex flex-col gap-8">
                <p className="relative">
                  My name is Nicolás Biondini, and I am a 24-year-old developer
                  from Argentina. I specialize in Front-End development, and
                  before that,I studied{" "}
                  <span className="relative">
                    <span className="w-[95%] h-[60%] absolute bottom-0 left-0 bg-orange-400 dark:bg-orange-600 z-0 -rotate-[2deg]"></span>
                    <span className="font-bold z-10 relative"> Economics</span>{" "}
                  </span>{" "}
                  at Universidad Nacional del Sur for three years.
                  <span className="absolute hidden xl:flex -right-20 2xl:-right-32 xl:-bottom-7 2xl:-bottom-5">
                    <Math />
                  </span>
                </p>
                <p>
                  My interest in technology has been a longstanding{" "}
                  <span className="relative">
                    <span className="w-[100%] h-[60%] absolute bottom-0 left-0 bg-orange-400 dark:bg-orange-600 z-0 rotate-[2deg]"></span>
                    <span className="font-bold z-10 relative"> passion</span>
                  </span>{" "}
                  of mine. During my first year of college, I began developing
                  an interest in tech businesses such as Silicon Valley and
                  <span className="relative">
                    <span className="w-[90%] h-[60%] absolute bottom-0 left-1 bg-orange-400 dark:bg-orange-600 z-0 -rotate-[2deg]"></span>
                    <span className="font-bold z-10 relative"> Startups. </span>
                  </span>
                  This led me to study finance, business models, marketing,
                  e-commerce, cryptocurrencies, blockchain, and all other
                  aspects of startup and tech companies in my own time.
                </p>
                <p className="relative">
                  My love and passion for tech companies continued to grow, and
                  I was excited to be a part of them. I possessed a basic
                  understanding of{" "}
                  <br className="hidden lg:inline-block xl:hidden" />
                  <span className="relative">
                    <span className="w-[95%] h-[60%] absolute bottom-0 left-0 bg-orange-400 dark:bg-orange-600 z-0 -rotate-[2deg]"></span>
                    <span className="font-bold z-10 relative"> business</span>{" "}
                  </span>{" "}
                  and{" "}
                  <br className="hidden md:inline-block lg:hidden xl:inline-block" />
                  <span className=" relative">
                    <span className=" w-[100%] h-[60%] absolute bottom-0 left-0 bg-orange-400 dark:bg-orange-600 z-10 -rotate-[0deg]"></span>
                    <span className="font-bold z-10 relative">marketing</span>
                  </span>{" "}
                  but was missing the crucial third leg of the table:{" "}
                  <span className="relative">
                    <span className="w-[90%] h-[60%] absolute bottom-0 left-0 bg-orange-400 dark:bg-orange-600 z-0 -rotate-[2deg]"></span>
                    <span className="font-bold z-10 relative"> coding. </span>
                  </span>{" "}
                  It was frustrating to understand concepts but not be able to
                  contribute to the real world due to a lack of understanding of
                  how tech works.
                  <span className="absolute hidden 2xl:flex -right-60 bottom-0">
                    <Table />
                  </span>
                </p>
                <p>
                  {
                    "That's why, after completing my third year of university, I decided to leave Economics and begin learning how to code. This occurred at the beginning of 2020, just during the pandemic. As a result, I committed myself to learn "
                  }
                  <br className="hidden xl:inline-block" />
                  <span className="relative">
                    <span className="w-[90%] h-[60%] absolute bottom-0 left-1 bg-orange-400 dark:bg-orange-600 z-0 -rotate-[2deg]"></span>
                    <span className="font-bold z-10 relative">
                      {" "}
                      10 hours a day{" "}
                    </span>
                  </span>{" "}
                  from Monday to Friday.
                </p>
                <p>
                  I began with a Python book but felt lost after completing it.
                  I then discovered a web development roadmap and started with{" "}
                  <br className="hidden  lg:inline-block xl:hidden" />
                  <span className="relative">
                    <span className="w-[100%] h-[60%] absolute bottom-0 left-2 bg-orange-400 dark:bg-orange-600 z-0 -rotate-[2deg]"></span>
                    <span className="font-bold z-10 relative">
                      {" "}
                      {"Harvard's CS50"}
                    </span>
                  </span>{" "}
                  course, an HTML and CSS book, Free Code Camp certifications,
                  and so on.
                </p>
                <p>
                  In 2022, my journey into the world of{" "}
                  <span className="relative">
                    <span className="w-[100%] h-[70%] absolute bottom-0 left-1 bg-orange-400 dark:bg-orange-600 z-0 rotate-[2deg]"></span>
                    <span className="font-bold z-10 relative">Web3</span>
                  </span>{" "}
                  began by attending meetups and events in Buenos Aires. I
                  quickly got involved in projects as a developer and was amazed
                  by the level of collaboration and innovation happening in the
                  space.
                </p>
                <p className="relative">
                  To further develop my skills, I took a course at{" "}
                  <span className="relative">
                    <span className="w-[100%] h-[70%] absolute bottom-0 left-1 bg-orange-400 dark:bg-orange-600 z-0 -rotate-[2deg]"></span>
                    <span className="font-bold z-10 relative">
                      Alchemy University
                    </span>
                  </span>{" "}
                  , which provided me with a solid foundation in Solidity and
                  the opportunity to experiment with writing my own contracts.
                  Being part of the Web3{" "}
                  <span className="relative">
                    <span className="w-[100%] h-[70%] absolute bottom-0 left-0 bg-orange-400 dark:bg-orange-600 z-0 -rotate-[1deg]"></span>
                    <span className="font-bold z-10 relative">community</span>
                  </span>{" "}
                  {
                    "has been incredibly rewarding, and I'm constantly learning from the people around me."
                  }
                  <span className=" hidden xl:flex absolute -left-48 bottom-10 rotate-3">
                    <Eth />
                  </span>
                </p>
                <p>
                  And here I am, feeling pretty good about my abilities and
                  having plenty of energy, motivation, and{" "}
                  <span className="relative">
                    <span className="w-[90%] h-[60%] absolute bottom-0 left-0 bg-orange-400 dark:bg-orange-600 z-0 -rotate-[2deg]"></span>
                    <span className="font-bold z-10 relative"> ambition </span>
                  </span>{" "}
                  to keep growing and learning each day.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Projects projects={projects} />
        <motion.span
          exit={{ opacity: 0, y: 300, transition: { duration: 0.8 } }}
          className=""
        >
          <Button text="View all my projects" path={"/projects"} />
        </motion.span>
        <BlogSection posts={posts} />
        <PoapCarousel poaps={poaps} />
        <Contact />
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await getAllProjects(3);
  const posts = await getAllPublished(3);
  const poaps = await getPoaps();

  return {
    props: {
      projects: data,
      posts: posts,
      poaps,
    },
    revalidate: 60,
  };
};

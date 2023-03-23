import Projects from "@/components/Projects";
import { getAllProjects } from "@/lib/notion";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Arrow from "@/components/svg/Arrow";
import Layout from "@/components/Layout";

type Props = {
  projects: cardProjectInfo[];
};

function ProjectsPage({ projects }: Props) {
  const [showArrow, setShowArrow] = useState(false);

  return (
    <Layout
      title={"Projects - Nicolás Biondini"}
      description={
        "Discover my latest web development and web3 projects! As an experienced developer, I have worked on a wide range of projects. Each project showcases my expertise in the latest technologies, including JavaScript, Typescript, Solidity, etc. Browse my portfolio to see how I can help bring your vision to life and create innovative and high-quality solutions."
      }
      keywords={
        "Web development, Web3, Blockchain, Solidity, JavaScript, HTML, UX/UI design, Smart contracts"
      }
      url={"https://nicolasbiondini.com/projects"}
    >
      <motion.div
        className="py-12 w-full"
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1,
          },
        }}
        exit={{ opacity: 0, y: 300, transition: { duration: 0.8 } }}
      >
        <Projects projects={projects} />
        <div className="py-36 w-full flex justify-center items-center">
          <Link href={"/"} scroll={false}>
            <motion.div
              className="self-start relative hover:text-orange-600 transition-all cursor-pointer text-white"
              onHoverStart={() => setShowArrow(true)}
              onHoverEnd={() => setShowArrow(false)}
            >
              <span className="flex flex-row gap-1 font-semibold font-mono text-2xl md:text-3xl items-center pl-5 relative">
                Come back to home
              </span>
              {showArrow && (
                <motion.div
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0, rotate: -3 }}
                  className="hidden md:flex absolute top-10 right-20"
                >
                  <Arrow />
                </motion.div>
              )}
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await getAllProjects();

  return {
    props: {
      projects: data,
    },
    revalidate: 60,
  };
};

export default ProjectsPage;

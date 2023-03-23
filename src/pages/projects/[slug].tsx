import Acordion from "@/components/Acordion";
import Carousel from "@/components/Carousel";
import Layout from "@/components/Layout";
import Markdown from "@/components/Markdown";
import { getAllProjects, getSingleProject } from "@/lib/notion";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";
import Arrow from "@/components/svg/Arrow";

type Props = {
  project: {
    metadata: project;
    markdown: any;
  };
};

function Project({ project }: Props) {
  const [showArrow, setShowArrow] = useState(false);

  const parseSkills = (
    backend?: string[],
    frontend?: string[],
    deploy?: string[]
  ) => {
    let array = [];

    if (frontend !== undefined && frontend.length >= 1) {
      array.push({ title: "Frontend", skills: frontend, id: 1 });
    }
    if (backend !== undefined && backend.length >= 1) {
      array.push({ title: "Backend", skills: backend, id: 2 });
    }
    if (deploy !== undefined && deploy.length >= 1) {
      array.push({ title: "Deploy", skills: deploy, id: 3 });
    }

    return array;
  };

  return (
    <Layout
      title={`${project.metadata.title} - Nicolás Biondini`}
      description={project.metadata.description}
      keywords={`${project.metadata.frontend.toString()}, ${project.metadata.backend.toString()}`}
      url={`https://nicolasbiondini.com/projects/${project.metadata.slug}`}
      imageUrl={project.metadata.image}
    >
      <div className="h-full pt-[80px] min-h-screen  w-full flex flex-col justify-around items-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              ease: [0.6, 0.01, 0.05, 0.95],
              duration: 1,
            },
          }}
          exit={{
            y: 100,
            opacity: 0,
            transition: {
              ease: [0.6, 0.01, 0.05, 0.95],
              duration: 1,
            },
          }}
          className="h-full w-full md:container flex flex-col justify-center pb-16 items-center pt-10 gap-12"
        >
          <Link href={"/projects"} scroll={false} className="self-start">
            <motion.div
              className="self-start relative hover:text-orange-600 transition-all cursor-pointer"
              onHoverStart={() => setShowArrow(true)}
              onHoverEnd={() => setShowArrow(false)}
            >
              <span className="flex flex-row gap-1 font-semibold font-mono text-2xl md:text-3xl    items-center pl-5 relative">
                <ChevronDoubleLeftIcon className="text-orange-600 w-5 h-5 md:h-8 md:w-8 " />
                Back
              </span>
              {showArrow && (
                <motion.div
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0, rotate: -3 }}
                  className="hidden md:flex absolute top-3 left-3"
                >
                  <Arrow />
                </motion.div>
              )}
            </motion.div>
          </Link>
          <div className="w-[290px] sm:w-[450px] md:w-[650px] lg:w-[753px] xl:w-[853px] flex flex-col gap-4">
            <div className="w-[290px] h-[180px] sm:w-[450px] sm:h-[300px] md:w-[650px] md:h-[400px] lg:w-[753px] lg:h-[450px] xl:w-[853px] xl:h-[553px] relative">
              <Image
                src={project.metadata.image}
                fill
                className="object-cover border-none z-10 "
                alt={project.metadata.title}
              />
            </div>
            <div className="flex w-full justify-between items-center">
              <h1 className="text-2xl smaller:text-3xl sm:text-5xl xl:text-6xl font-bold">
                {project.metadata.title}
              </h1>
              <div className="flex flex-col gap-1 font-mono ">
                {project.metadata.demo && (
                  <a
                    href={project.metadata.demo}
                    target="_blank"
                    className="flex flex-row gap-1 hover:text-orange-600 transition-all cursor-pointer"
                  >
                    <span className="text-orange-600">{">"}</span>Demo
                  </a>
                )}

                {project.metadata.github && (
                  <a
                    href={project.metadata.github}
                    target="_blank"
                    className="flex flex-row gap-1 hover:text-orange-600 transition-all cursor-pointer"
                  >
                    <span className="text-orange-600">{">"}</span>Repository
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl  lg:flex-row gap-8 justify-center items-start px-4 md:px-0">
            <div className="lg:w-1/3">
              <Carousel text="- TECHNOLOGIES - TECHNOLOGIES - TECHNOLOGIES " />

              <Acordion
                data={parseSkills(
                  project.metadata.backend,
                  project.metadata.frontend,
                  project.metadata.deploy
                )}
              />
            </div>
            <div className=" lg:w-2/3">
              <Carousel text="- ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT " />
              <div className="font-mono font-light flex flex-col gap-8 pt-4">
                <Markdown>{project.markdown}</Markdown>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const project = await getSingleProject(params?.slug);

  return {
    props: {
      project,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllProjects();
  const paths = posts.map(({ slug }: { slug: string }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default Project;

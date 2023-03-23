import { getAllPublished } from "@/lib/notion";
import { post } from "@/types/post";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Arrow from "@/components/svg/Arrow";
import { useState } from "react";
import Carousel from "@/components/Carousel";
import Layout from "@/components/Layout";

type Props = {
  posts: post[];
};

function Blog({ posts }: Props) {
  const [showArrow, setShowArrow] = useState(false);

  return (
    <Layout
      title={"Blog - Nicolás Biondini"}
      description={
        "Welcome to our web development and web3 blog page! Here, you'll find expert insights and practical tips on the latest trends, tools, and technologies shaping the world of web development, with a particular focus on the emerging field of web3. From blockchain-based applications to decentralized finance and more, our content is designed to help you stay up-to-date and informed on the latest developments in this fast-evolving field.."
      }
      keywords={"Web development, Web3, Blockchain, Solidity, JavaScript, HTML"}
      url={"https://nicolasbiondini.com/blog"}
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
        <div className=" flex flex-col w-full px-6 lg:gap-20 gap-6  dark:bg-black py-12 bg-mainWithe  justify-center items-center z-0 transition ease-out duration-500 text-black dark:text-mainWithe">
          <div className="md:container flex flex-col w-full lg:px-14 lg:gap-20 gap-6">
            <Carousel text="- BLOG - BLOG - BLOG " />
            <div className="w-full flex flex-col justify-center items-center  gap-16 lg:gap-22">
              {posts.map((post, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      opacity: 1,
                      transition: { duration: 0.4 },
                    }}
                    exit={{ opacity: 0, y: 300, transition: { duration: 0.8 } }}
                    key={`post${post.id} ${post.slug} ${index}`}
                    className={"w-full flex justify-center"}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      scroll={false}
                      className={"md:w-4/5"}
                    >
                      <div className=" sm:px-5 sm:py-5 sm:border-2 border-transparent hover:border-orange-600 transition-all cursor-pointer h-[450px] md:h-full relative flex flex-col md:flex-row gap-3  ">
                        <div className="small:w-[250px] small:h-[150px] w-[300px] h-[180px] lg:w-[220px] lg:h-[140px] xl:w-[300px] xl:h-[180px] relative overflow-hidden">
                          <Image
                            className="object-cover"
                            fill
                            alt={post.title}
                            src={post.thumbnail}
                          />
                        </div>
                        <div className=" small:max-w-[240px] max-w-[300px] md:max-w-none md:w-2/3 flex flex-col gap-3">
                          <h1 className="text-lg font-semibold">
                            {post.title}
                          </h1>
                          <p className="text-xs font-mono font-light">
                            {post.date}
                          </p>
                          <div className="flex flex-row gap-5 font-mono text-xs">
                            {post.tags.map((tag, index) => {
                              return (
                                <span
                                  className="relative"
                                  key={`${tag} ${index} ${post.id}+`}
                                >
                                  <span className="z-20 relative">{tag}</span>
                                  <span className="absolute h-[40%] top-2 -left-1 w-[110%] bg-orange-600 z-0 -rotate-3"></span>
                                </span>
                              );
                            })}
                          </div>
                          <p className="text-xs font-mono font-light md:max-w-md ">
                            {post.description}
                          </p>
                          <span
                            className={
                              "font-mono text-sm text-dark dark:text-mainWithe hover:text-orange-600 dark:hover:text-orange-600 transition-all absolute bottom-6 right-5 "
                            }
                          >
                            <span className="text-orange-600">{">"}</span>
                            <span className="underline transition-all ml-2">
                              View More
                            </span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="py-12 md:py-36 w-full flex justify-center items-center">
          <Link href={"/"} scroll={false}>
            <motion.div
              className="self-start relative hover:text-orange-600 transition-all cursor-pointer text-white"
              onHoverStart={() => setShowArrow(true)}
              onHoverEnd={() => setShowArrow(false)}
            >
              <span className="flex flex-row gap-1 font-semibold font-mono text-lg md:text-3xl items-center md:pl-5 relative">
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
  const data = await getAllPublished();

  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
};

export default Blog;

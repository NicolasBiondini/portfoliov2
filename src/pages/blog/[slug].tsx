import ReactMarkdown from "react-markdown";
import { getAllPublished, getSinglePost } from "@/lib/notion";
import Markdown from "@/components/Markdown";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";
import Arrow from "@/components/svg/Arrow";
import { useState } from "react";
import Image from "next/image";

const Post = ({ post }: { post: any }) => {
  const [showArrow, setShowArrow] = useState(false);

  return (
    <Layout
      title={post.metadata.title}
      description={post.metadata.description}
      keywords={post.metadata.tags.toString()}
      url={`https://nicolasbiondini.com/blog/${post.metadata.slug}`}
      imageUrl={post.metadata.thumbnail}
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
          <Link href={"/blog"} scroll={false} className="self-start">
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
          <div className="max-w-sm sm:max-w-none sm:w-[450px] md:w-[650px] lg:w-[753px] xl:w-[853px] flex flex-col gap-4">
            <div className="w-full max-w-sm sm:max-w-none h-[240px] sm:w-[450px] sm:h-[300px] md:w-[650px] md:h-[400px] lg:w-[753px] lg:h-[450px] xl:w-[853px] xl:h-[553px] relative">
              <Image
                src={post.metadata.thumbnail}
                fill
                className="object-cover border-none z-10 "
                alt={post.metadata.title}
              />
            </div>
            <div className="flex w-full justify-between items-center">
              <h1 className="text-2xl smaller:text-3xl sm:text-4xl xl:text-4xl font-bold">
                {post.metadata.title}
              </h1>
            </div>
            <p className="font-mono text-base font-light">
              {post.metadata.date}
            </p>
            <div className="flex flex-row gap-4">
              {post.metadata.tags.map((tag: string, index: number) => {
                return (
                  <span
                    className="relative"
                    key={`${tag} ${index} ${post.metadata.id}+`}
                  >
                    <span className="z-20 relative md:text-lg ">{tag}</span>
                    <span className="absolute h-[40%] top-2 -left-1 w-[110%] bg-orange-600 z-0 -rotate-2"></span>
                  </span>
                );
              })}
            </div>
          </div>
          <div className="flex w-[80%] h-[1px] sm:w-[450px] md:w-[650px] lg:w-[753px] xl:w-[853px] bg-orange-600"></div>
          <div className="flex flex-col w-full justify-center items-center px-4 md:px-0">
            <div className=" max-w-sm sm:max-w-none sm:w-[450px] md:w-[650px] lg:w-[753px] xl:w-[853px] font-mono font-light flex flex-col gap-8 pt-4">
              <Markdown>{post.markdown.parent}</Markdown>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const post = await getSinglePost(params?.slug);

  console.log(post);

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPublished();
  const paths = posts.map(({ slug }: { slug: string }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default Post;

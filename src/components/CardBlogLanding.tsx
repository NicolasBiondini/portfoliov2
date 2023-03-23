import { post } from "@/types/post";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = { post: post };

function CardBlogLanding({ post }: Props) {
  //const [show, setShow] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      whileHover={{
        opacity: 1,
        transition: { duration: 0.4 },
      }}
      exit={{ opacity: 0, y: 300, transition: { duration: 0.8 } }}
    >
      <Link href={`/blog/${post.slug}`} scroll={false}>
        <div className=" sm:px-5 sm:py-5 sm:border-2 border-transparent hover:border-orange-600 transition-all cursor-pointer h-[450px] relative flex flex-col gap-3">
          <div className="small:w-[250px] small:h-[150px]  w-[300px] h-[180px] lg:w-[220px] lg:h-[140px] xl:w-[300px] xl:h-[180px] relative overflow-hidden">
            <Image
              className="object-cover"
              fill
              alt={post.title}
              src={post.thumbnail}
            />
          </div>
          <div className="small:max-w-[240px] max-w-[300px] lg:max-w-[220px] xl:max-w-[300px] flex flex-col gap-5">
            <h1 className="text-lg font-semibold">{post.title}</h1>
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
            <p className="text-xs font-mono font-light">{post.description}</p>
            <span
              className={
                "font-mono text-sm text-dark dark:text-mainWithe hover:text-orange-600 dark:hover:text-orange-600 transition-all absolute bottom-6 right-5 "
              }
            >
              <span className="text-orange-600">{">"}</span>
              <span className="underline transition-all ml-2">View More</span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default CardBlogLanding;

import { post } from "@/types/post";
import { motion } from "framer-motion";
import Button from "./Button";
import CardBlogLanding from "./CardBlogLanding";
import Carousel from "./Carousel";

type Props = {
  posts: post[];
};

function BlogSection({ posts }: Props) {
  return (
    <div className="w-full h-full flex flex-col justify-start lg:justify-center items-center px-6 lg:gap-20 gap-6">
      <div className="md:container flex flex-col w-full lg:px-14 lg:gap-20 gap-6">
        <Carousel text="- POSTS - POSTS - POSTS - POSTS" />
        <div className="flex flex-row gap-8 lg:gap-5 xl:gap-8 justify-center flex-wrap">
          {posts.map((post, index) => {
            return (
              <span key={`${post.id} index${index} ${post.slug}`}>
                <CardBlogLanding post={post} />
              </span>
            );
          })}
        </div>
        <motion.span
          exit={{ opacity: 0, y: 300, transition: { duration: 0.8 } }}
          className="self-center"
        >
          <Button text="View all my posts" path="/blog" />
        </motion.span>
      </div>
    </div>
  );
}

export default BlogSection;

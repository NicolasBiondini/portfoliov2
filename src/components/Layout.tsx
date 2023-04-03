import { motion } from "framer-motion";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  imageUrl?: string;
};

function Layout({
  children,
  title,
  description,
  keywords,
  url,
  imageUrl,
}: Props) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Nicolás Biondini" />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <link rel="canonical" href="https://nicolasbiondini.com" />
        <title>{title}</title>
      </Head>
      <motion.section
        className={` flex flex-col align-middle justify-center items-center w-full transition ease-out duration-500 overflow-x-hidden overflow-y-hidden  dark:text-mainWithe `}
      >
        {children}
      </motion.section>
    </>
  );
}

Layout.defaultProps = {
  title: "Nicolás Biondini",
  description:
    "Nicolás Biondini is a talented front-end developer from Argentina, with a passion for web3 applications. Explore his personal website to discover a portfolio of innovative projects and insightful blog posts on the latest web development trends and technologies. With a focus on responsive design, cross-platform compatibility, and a user-centered approach, Nicolás' work showcases his expertise in the latest front-end development tools and frameworks, including JavaScript, React, and more. Whether you're looking to collaborate on a project or stay up-to-date on the latest web3 advancements, Nicolás Biondini's personal website is the perfect resource for you",
  keywords:
    "Front-end development, Web3 applications, Argentina, Portfolio, Blog posts, Responsive design, Nicolás Biondini, JavaScript, React, Front-end frameworks, Web3 advancements, Latest web development trends",
  url: "https://nicolasbiondini.com",
  imageUrl:
    "https://res.cloudinary.com/blogfilmania/image/upload/v1679586705/Captura_de_pantalla_2023-03-23_a_la_s_12.50.42_iblebz.png",
};

export default Layout;

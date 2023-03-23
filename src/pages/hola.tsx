import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

type Props = {};

function hola({}: Props) {
  return (
    <Layout>
      <div className="h-[100vh]">
        <h1>Hello from hola wachin</h1>
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
          className="hidden lg:flex  w-[260px] h-[260px] md:w-[360px] md:h-[360px] xl:w-[853px] xl:h-[853px] lg:my-20 2xl:my-32 relative overflow-hidden shadow-2xl -z-10 "
        >
          <Image
            src={
              "https://res.cloudinary.com/blogfilmania/image/upload/v1678372115/Copia_de_FprkejjXoAM_gX0_bgv885.jpg"
            }
            fill
            className="object-cover border-none -z-10"
            alt={"Nicolas Biondini"}
          />
        </motion.div>
      </div>
    </Layout>
  );
}

export default hola;

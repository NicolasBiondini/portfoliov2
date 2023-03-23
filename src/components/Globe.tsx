import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function Globe({}: Props) {
  return (
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
      className="hidden lg:flex rounded-r-[57%] rounded-t-[61%] rounded-l-[39%] rounded-b-[63%] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] xl:w-[453px] xl:h-[453px] lg:my-20 2xl:my-32 mr-4 relative overflow-hidden shadow-2xl z-10 "
    >
      <Image
        src={
          "https://res.cloudinary.com/blogfilmania/image/upload/v1678372115/Copia_de_FprkejjXoAM_gX0_bgv885.jpg"
        }
        sizes="(min-width: 1024px) 350px 350px,
        (min-width: 1280px) 453px 453px"
        fill
        priority
        className="object-cover border-none -z-10 "
        alt={"Nicolas Biondini"}
      />
    </motion.div>
  );
}

export default Globe;

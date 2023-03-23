import { motion } from "framer-motion";

type Props = {};

function SpinWheel({}: Props) {
  const text = "Keep scrolling-Keep scrolling-";

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
      className="flex justify-center items-center h-[250px] w-[250px] mb-8 lg:mb-28 z-10"
    >
      <div className="relative  h-[200px] w-[200px]  rounded-[50%] flex justify-center items-center ">
        <div className="absolute w-full h-full animate-[spin_10s_linear_infinite] font-bold font-mono">
          {text.split("").map((char: string, i: number) => {
            let deg = i * 12;
            return (
              <span
                key={`${i}-${char}`}
                className={`absolute left-[50%] origin-[0_100px]`}
                style={{ transform: `rotate(${deg}deg)` }}
              >
                {char}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default SpinWheel;

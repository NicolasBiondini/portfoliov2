import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Carousel from "./Carousel";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row w-full px-6 md:px-12 gap-6   min-h-[80vh] py-12 lg:py-0 lg:h-[70vh] lg:min-h-0 justify-center items-start lg:items-center z-0">
      <div className="flex flex-col lg:flex-row w-full xl:w-[85%] 2xl:w-[70%] justify-center items-start lg:items-center gap-20 lg:gap-52">
        <div className="flex flex-col gap-2 text-lessWithe lg:w-2/3 justify-center order-2 lg:order-1 ">
          <div className="flex flex-col gap-2">
            <span className="text-sm md:text-lg xl:text-xl font-semibold">
              {"I'm always searching for new challenges so"}
            </span>
            <h6 className="text-5xl md:text-6xl 2xl:text-7xl font-semibold">
              {"Let's connect!"}
            </h6>
            <p className="font-mono   flex flex-row items-center gap-1 mt-8">
              <span className="font-sans text-orange-600 text-xl mt-1">{`>`}</span>
              <span className="underline small:text-sm text-base lg:text-xl font-light">
                {" "}
                nicolasbiondiniwork@gmail.com
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-6 text-lessWithe  w-full lg:w-1/3 order-1 lg:order-2 lg:-mt-16">
          <Carousel text="- SOCIAL - SOCIAL - SOCIAL - SOCIAL " />

          <div className="flex flex-col gap-3">
            <a
              href="https://twitter.com/BiondiniNicolas"
              target={"_blank"}
              className="flex flex-row items-center gap-1 hover:text-orange-600 transition-all cursor-pointer "
            >
              <span className="font-sans text-orange-600 text-xl">{`>`}</span>
              <span className="font-mono underline">Twitter</span>
            </a>
            <a
              href="https://github.com/NicolasBiondini"
              target={"_blank"}
              className="flex flex-row items-center gap-1 hover:text-orange-600 transition-all cursor-pointer "
            >
              <span className="font-sans text-orange-600 text-xl">{`>`}</span>
              <span className="font-mono  underline">Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-biondini/"
              target={"_blank"}
              className="flex flex-row items-center gap-1 hover:text-orange-600 transition-all cursor-pointer "
            >
              <span className="font-sans text-orange-600 text-xl">{`>`}</span>
              <span className="font-mono underline">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/nicolasbiondini/"
              target={"_blank"}
              className="flex flex-row items-center gap-1 hover:text-orange-600 transition-all cursor-pointer "
            >
              <span className="font-sans text-orange-600 text-xl">{`>`}</span>
              <span className="font-mono underline">Instagram</span>
            </a>
            <a
              href="https://lenster.xyz/u/nbiondini"
              target={"_blank"}
              className="flex flex-row items-center gap-1 hover:text-orange-600 transition-all cursor-pointer "
            >
              <span className="font-sans text-orange-600 text-xl">{`>`}</span>
              <span className="font-mono underline">Lens</span>
            </a>
            <a
              href="https://dev.to/nicolasbiondini"
              target={"_blank"}
              className="flex flex-row items-center gap-1 hover:text-orange-600 transition-all cursor-pointer "
            >
              <span className="font-sans text-orange-600 text-xl">{`>`}</span>
              <span className="font-mono underline">Dev.to</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

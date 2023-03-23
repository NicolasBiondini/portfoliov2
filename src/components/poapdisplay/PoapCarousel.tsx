import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Marquee from "react-fast-marquee";
import Carousel from "../Carousel";
import Nbiondini from "../svg/Nbiondini";
import SomeOfMyPoaps from "../svg/SomeOfMyPoaps";
import Poap from "./Poap";

type Props = { poaps: poap[] };

function PoapCarousel({ poaps }: Props) {
  return (
    <div className="w-[110%] pt-24 xl:pt-32 flex flex-col  justify-center items-center relative">
      <div className="container md:ml-28 w-2/3 flex ">
        <SomeOfMyPoaps />
        <a href="https://poap.xyz/" target="_blank">
          <QuestionMarkCircleIcon className="w-6 h-6 text-orange-400 hover:text-white transition-all -ml-6 -rotate-3 cursor-pointer" />
        </a>
      </div>
      <div className="w-full ">
        <Marquee
          style={{
            width: "100%",
            height: "180px",
            rotate: "-10deg",
          }}
          gradient={false}
          speed={50}
          className={"z-10 "}
          pauseOnHover={true}
        >
          <div className="flex flex-row gap-5 pl-5">
            {poaps.map((poap, index) => {
              return <Poap key={`${poap.event.id} i ${index}`} poap={poap} />;
            })}
          </div>
        </Marquee>
      </div>
      <div className="absolute lg:right-96 -bottom-24">
        <Nbiondini />
      </div>
    </div>
  );
}

export default PoapCarousel;

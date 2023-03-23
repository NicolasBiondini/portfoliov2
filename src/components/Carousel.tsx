import Marquee from "react-fast-marquee";

type Props = {
  text: string;
};

function Carousel({ text }: Props) {
  return (
    <Marquee
      style={{
        width: "100px",
        height: "64px",
      }}
      gradient={false}
      speed={30}
    >
      <h6 className={`text-2xl font-bold z-10 pl-1`}>{text}</h6>
    </Marquee>
  );
}

export default Carousel;

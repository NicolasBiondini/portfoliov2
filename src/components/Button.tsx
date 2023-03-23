import Link from "next/link";
import React from "react";

type Props = {
  text: string;
  path: string;
};

function Button({ text, path }: Props) {
  return (
    <Link
      href={path}
      scroll={false}
      className={
        "text-base md:text-xl font-mono border-2 px-8 py-4 hover:text-orange-600  hover:border-orange-600 transition hover:shadow-[10px_10px_1px_0px] hover:shadow-orange-600"
      }
    >
      {text}
    </Link>
  );
}

export default Button;

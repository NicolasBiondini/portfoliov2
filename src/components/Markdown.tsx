// Markdown.tsx
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const Markdown = ({
  children,
  modal,
}: {
  children: string;
  modal?: boolean;
}) => {
  const MarkdownComponents: object = {
    p: (paragraph: { children?: boolean; node?: any }) => {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        const metastring = image.properties.alt;
        const alt = metastring?.replace(/ *\{[^)]*\} */g, "");
        const metaWidth = metastring.match(/{([^}]+)x/);
        const metaHeight = metastring.match(/x([^}]+)}/);
        const width = metaWidth ? metaWidth[1] : "768";
        const height = metaHeight ? metaHeight[1] : "432";
        const isPriority = metastring?.toLowerCase().match("{priority}");

        return (
          <div className="w-full">
            <Image
              src={image.properties.src}
              width={width}
              height={height}
              className="postImg"
              alt={alt}
              priority={isPriority}
            />
            {alt ? (
              <div
                className="text-sm italic font-sans font-medium"
                aria-label={alt}
              >
                {alt}
              </div>
            ) : null}
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    h2: (h2: { level: number; node: any; children: string[] }) => {
      return <h2 className="font-semibold text-2xl">{h2.children[0]}</h2>;
    },
    code: (code: { className: string; node: any; children: string[] }) => {
      return (
        <div className="lg:w-[80%] m-auto bg-orange-400 flex flex-col p-8 justify-center items-start rounded-lg overflow-auto ">
          <code className="text-lessBlack font-medium ">
            {code.children[0]}
          </code>
        </div>
      );
    },
  };

  return (
    <ReactMarkdown
      className={`${
        modal
          ? "max-h-[150px] md:max-h-[200px] z-10 overflow-y-auto"
          : "flex flex-col gap-10 "
      }`}
      components={MarkdownComponents}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;

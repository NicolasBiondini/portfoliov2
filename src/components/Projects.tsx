import Carousel from "./Carousel";
import ProjectCard from "./ProjectCard";
type Props = {
  projects: cardProjectInfo[];
};

function Projects({ projects }: Props) {
  return (
    <div className=" flex flex-col w-full px-6 lg:gap-20 gap-6  dark:bg-black py-12 bg-mainWithe  justify-center items-center z-0 transition ease-out duration-500 text-black dark:text-mainWithe">
      <div className="md:container flex flex-col w-full lg:px-14 lg:gap-20 gap-6">
        <Carousel text="- PROJECTS - PROJECTS - PROJECTS " />
        <div className="w-full flex flex-col justify-center items-center gap-16 lg:gap-44">
          {projects.map((project, index) => {
            return (
              <ProjectCard
                key={`${project.slug}${index}`}
                finalKey={project.slug}
                rotate={index === 1 ? true : false}
                index={index + 1}
                project={project}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;

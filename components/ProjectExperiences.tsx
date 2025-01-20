import { siteContent } from "@/config";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const ProjectExperiences = () => {
  return (
    <section id="projects">
      <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tighter text-white mb-8">
        Project Experiences
      </h1>

      {siteContent.project.map((project, index) => (
        <div
          className="mb-10 w-full grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 bg-gray-800 rounded-xl h-[580px] md:h-96 "
          key={index}
        >
          <div className="flex-1 px-6 pt-12">
            <h4 className="text-3xl font-serif font-semibold text-green-400 mb-1.5  ">
              {project.nameProject}
            </h4>
            <h3 className="text-2xl font-serif text-white font-medium mb-0.5">
              {project.summary}
            </h3>
            <div className="flex mt-6 pt-10">
              <a className="flex text-1xl" href={project.source}>
                Source <ArrowUpRight />
              </a>
              <a className=" flex text-1xl" href={project.preview}>
                Preview <ArrowUpRight />
              </a>
            </div>
          </div>
          <div className="flex items-end justify-end overflow-hidden">
            <Image
              className="w-[95%] sm:w-full h-full sm:h-[85%] object-none object-left-top rounded-md"
              alt="project"
              src={project.img}
              width={500}
              height={300}
            />
          </div>
        </div>
      ))}
    </section>
  );
};
export default ProjectExperiences;

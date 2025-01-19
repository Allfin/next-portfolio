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
          className="mb-10 relative overflow-hidden w-full grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2"
          key={index}
        >
          <div className="flex-1 justify-end">
            <h4 className="text-2xl font-serif font-semibold text-green-400 mb-1.5  ">
              {project.nameProject}
            </h4>
            <h3 className="text-1xl font-serif text-white font-medium mb-0.5">
              {project.summary}
            </h3>
            <div className="flex">
              <div className="flex mt-6">
                <a className="flex text-1xl" href={project.source}>
                  Source <ArrowUpRight />
                </a>
                <a className=" flex text-1xl" href={project.preview}>
                  Preview <ArrowUpRight />
                </a>
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <Image
              className="rounded-md"
              alt="project"
              src={project.img}
              width={736}
              height={483}
            />
          </div>
        </div>
      ))}
    </section>
  );
};
export default ProjectExperiences;

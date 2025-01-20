import { siteContent } from "@/config";
import { CircleCheck } from "lucide-react";

const Experience = () => {
  return (
    <section className="my-20">
      <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tighter text-white mb-8">
        Work Experience
      </h1>
      {siteContent.experience.map((exp) => (
        <div className="mb-10">
          <h3 className="text-2xl font-serif font-semibold text-white mb-1.5">
            {exp.company}
          </h3>
          <div className="flex flex-col items-start pb-5">
            <h4 className="text-2xl font-serif text-green-300 font-medium mb-0.5">
              {exp.position}
            </h4>
            <span className="text-sm text-white/70 pb-[2px]">
              {exp.startDate} — {exp.endDate}
            </span>
          </div>
          {Array.isArray(exp.summary) ? (
            <ul className="">
              {exp.summary.map((log, index) => (
                <li className="flex gap-2 p-1" key={index}>
                  <CircleCheck className="mt-1" size={"15px"} />
                  <span className="flex-1">{log}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-base text-neutral">{exp.summary}</p>
          )}
        </div>
      ))}
    </section>
  );
};
export default Experience;

import { siteContent } from "@/config";

const Skill = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="max-w-md mx-auto">
        <h1 className="text-center text-2xl md:text-3xl font-serif font-bold tracking-tighter text-white mb-8">
          The skills, tool and technology i use :
        </h1>
        <div className="flex justify-center gap-11 flex-wrap">
          {siteContent.icons.map((icon) => (
            <img
              src={icon.img}
              key={icon.name}
              alt={icon.name}
              width={40}
              height={40}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skill;

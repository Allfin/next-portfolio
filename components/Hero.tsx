import { SiteContent } from "@/config";

const Hero = () => {
  const { name, specialty, summary, email } = SiteContent.hero;
  return (
    <section className="py-24 md:py-32" id="#hero">
      <h1 className="text-6xl font-serif mb-1.5 sm:text-8xl md:text-9xl md:mb-0 text-white font-bold tracking-tightest">
        {name}
      </h1>
      <p className="text-3xl sm:text-5xl leading-[46px] md:text-6xl font-serif text-primary font-bold tracking-tighter mb-9 text-green-400">
        {specialty}
      </p>
      <p className="font-normal text-base md:text-lg mb-5 md:mb-16">
        {summary}
      </p>

      <a
        className="text-sm py-5 px-8 text-black inline-block font-medium leading-5 bg-green-400 rounded-full"
        href={`mailto:${email}`}
      >
        Get in Touch
      </a>
    </section>
  );
};
export default Hero;

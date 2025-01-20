import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectExperiences from "@/components/ProjectExperiences";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="max-w-3xl px-5 mx-auto">
        <Hero />
        <Skill />
        <Experience />
        <ProjectExperiences />
      </main>
    </div>
  );
}

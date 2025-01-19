import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="max-w-3xl px-5 mx-auto">
        <Hero />
      </main>
    </div>
  );
}

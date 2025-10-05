import Footer from "@/components/Footer";
import GithubGraph from "@/components/GithubGraph";
import Overview from "@/components/Overview";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="w-full sm:w-xl lg:w-2xl min-h-screen mx-auto font-sans px-2">
      <div className="flex flex-col gap-4 border-x border-muted-foreground/15 pt-10 pb-20 px-2 lg:px-4">

        {/* Overview */}
        <Overview />

        {/* Graph */}
        <GithubGraph />

        {/* Projects */}
        <Projects />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}

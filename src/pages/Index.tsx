import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    index: "01",
    category: "Residential",
    title: ["The", "Concrete", "Void"],
    image: project1,
    alt: "Brutalist concrete residential building with angular geometry",
  },
  {
    index: "02",
    category: "Cultural",
    title: ["Hollow", "Light", "Museum"],
    image: project2,
    alt: "Modern museum interior with vast gallery space and skylights",
    reversed: true,
  },
  {
    index: "03",
    category: "Commercial",
    title: ["Glass", "Meridian", "Tower"],
    image: project3,
    alt: "Angular glass office tower at dusk in urban skyline",
  },
];

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <section id="work" className="max-w-[1440px] mx-auto px-6 md:px-12 py-[20vh]">
        {projects.map((project) => (
          <ProjectCard key={project.index} {...project} />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Index;

import AnimatedCursor from "@/components/AnimatedCursor";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnimatedCursor />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Jatin Batra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

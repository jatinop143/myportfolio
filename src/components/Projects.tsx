import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import aiCounselor from "@/assets/ai-counselor.png";
import marketingAgency from "@/assets/marketing-agency.png";
import shoeBrand from "@/assets/shoe-brand.png";
import jewelleryShop from "@/assets/jewellery-shop.png";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "AI Counselor App",
      description: "An AI-powered counseling application providing intelligent guidance and support",
      tags: ["React", "AI", "Next.js"],
      gradient: "from-purple-500 to-pink-500",
      liveUrl: "https://codecraft001.vercel.app",
      image: aiCounselor,
    },
    {
      title: "Marketing Agency Website",
      description: "Fully responsive website for a modern marketing agency with sleek design",
      tags: ["React", "Tailwind CSS", "Responsive"],
      gradient: "from-blue-500 to-cyan-500",
      liveUrl: "https://marketing-projectbybf.netlify.app/",
      image: marketingAgency,
    },
    {
      title: "Shoe Brand Website",
      description: "E-commerce website showcasing premium shoe collections and brand identity",
      tags: ["React", "E-commerce", "Design"],
      gradient: "from-orange-500 to-red-500",
      liveUrl: "https://shoesproject-six.vercel.app",
      image: shoeBrand,
    },
    {
      title: "Jewellery Shop Website",
      description: "Elegant responsive website for a luxury jewellery brand with modern aesthetics",
      tags: ["React", "Responsive", "E-commerce"],
      gradient: "from-violet-500 to-purple-500",
      liveUrl: "https://marketingproject.vercel.app/",
      image: jewelleryShop,
    },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 block cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center pointer-events-none">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

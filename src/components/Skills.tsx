import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "React / Next.js", level: 95 },
    { name: "MongoDB", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Node.js", level: 85 },
    { name: "SQL", level: 85 },
    { name: "JavaScript", level: 90 },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {skill.name}
                  </h3>
                  <motion.span
                    className="text-primary font-semibold"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-primary rounded-full relative"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.1 + 1.2,
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              "React",
              "MongoDB",
              "Node.js",
              "Tailwind",
              "SQL",
              "Git",
              "JavaScript",
              "Express",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-card rounded-2xl p-6 border border-border text-center hover:border-primary transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  💎
                </div>
                <p className="text-sm font-medium text-foreground">{tech}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

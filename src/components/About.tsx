import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Heart } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code that stands the test of time",
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Creating visually stunning interfaces with attention to detail",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and efficiency in every project",
    },
    {
      icon: Heart,
      title: "User Focus",
      description: "Building experiences that users love and find intuitive",
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer who loves creating seamless digital experiences
            that combine functionality with beautiful design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 hover:shadow-card group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-card rounded-2xl p-8 border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              With several years of experience in web development, I specialize in creating
              modern, responsive applications using the latest technologies. I'm constantly
              learning and evolving with the ever-changing landscape of web development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, contributing
              to open-source projects, or enjoying a good cup of coffee while sketching out
              ideas for my next project.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

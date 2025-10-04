import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const [displayName, setDisplayName] = useState("");
  const [displayText, setDisplayText] = useState("");
  const fullName = "Jatin Batra";
  const fullText = "Creative Developer & Designer";
  const [isNameTypingComplete, setIsNameTypingComplete] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    // Type the name first
    let currentIndex = 0;
    const nameTypingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsNameTypingComplete(true);
        clearInterval(nameTypingInterval);
      }
    }, 100);

    return () => clearInterval(nameTypingInterval);
  }, []);

  useEffect(() => {
    // Start typing the subtitle after name is complete
    if (!isNameTypingComplete) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [isNameTypingComplete]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              {displayName}
              {!isNameTypingComplete && (
                <span className="inline-block w-1 h-16 md:h-20 bg-primary ml-2 animate-pulse" />
              )}
            </h1>
          </motion.div>

          <motion.div
            className="h-16 md:h-20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl text-muted-foreground font-light">
              {displayText}
              {!isTypingComplete && (
                <span className="inline-block w-1 h-8 bg-primary ml-1 animate-pulse" />
              )}
            </h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Crafting beautiful digital experiences with modern web technologies
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's Connect
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

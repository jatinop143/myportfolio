import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Instagram, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, text: "batraj2311@gmail.com", href: "mailto:batraj2311@gmail.com" },
    { icon: Phone, text: "6239028581", href: "tel:+916239028581" },
    { icon: MapPin, text: "Kharar, Punjab", href: "#" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/batra_jatin11/", label: "Instagram" },
    { icon: MessageCircle, href: "https://wa.me/917986976842", label: "WhatsApp" },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.text}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-foreground">{info.text}</span>
                    </motion.a>
                  );
                })}
              </div>

              <div className="pt-8">
                <h4 className="text-xl font-semibold mb-4 text-foreground">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-card border border-border hover:border-primary flex items-center justify-center transition-all duration-300 group"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                      >
                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-14 bg-card border-border focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-14 bg-card border-border focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[200px] bg-card border-border focus:border-primary transition-colors resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

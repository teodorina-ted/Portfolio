import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 border-t border-border">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-full rounded-2xl overflow-hidden shadow-sm aspect-[3/4] bg-secondary flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center text-4xl font-semibold text-muted-foreground">
                TL
              </div>
              <p className="text-sm text-muted-foreground">Teodorina L.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl mb-6 font-semibold tracking-tight">
            The Mind Behind the Data.
          </h2>
          <h3 className="text-xl text-foreground/80 mb-8 serif-italic">
            I bridge the gap between behavioral psychology and technical
            infrastructure.
          </h3>

          <p className="text-lg mb-6 leading-relaxed text-muted-foreground">
            My professional DNA is a unique hybrid. I began as a Marketing
            Strategist, decoding human behavior. Today, I am evolving, achieving
            my Senior Technician in DevOps diploma at ITS Olivetti, Cesena.
          </p>

          <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
            <div>
              <span className="label-micro">Passions</span>
              <p className="text-sm text-foreground/80">
                Data, AI, Behavioral Psychology, Travel.
              </p>
            </div>
            <div>
              <span className="label-micro">Hobbies</span>
              <p className="text-sm text-foreground/80">
                Cooking, Cinema, Fitness.
              </p>
            </div>
            <div>
              <span className="label-micro">Favorite Authors</span>
              <p className="text-sm text-foreground/80">
                Yuval Noah Harari, Robert Sapolsky.
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-sm text-muted-foreground">
                P.S. I write poems too.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="text-xl md:text-2xl font-semibold text-accent hover:underline transition"
            >
              We could always discuss in English, Russian, Romanian — or why not, Italian.
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

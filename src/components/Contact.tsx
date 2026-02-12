import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading mb-4">Let's Get in Touch</h2>
        <p className="mb-10 text-muted-foreground">
          Leave your details and an offer; I will respond with strategy and data.
        </p>
        <form
          action="https://formspree.io/f/your-id"
          method="POST"
          className="text-left space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="bg-card border border-border text-foreground px-4 py-4 rounded-xl w-full text-[15px] focus:outline-none focus:border-foreground transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="bg-card border border-border text-foreground px-4 py-4 rounded-xl w-full text-[15px] focus:outline-none focus:border-foreground transition"
            />
          </div>
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message / Offer"
            required
            className="bg-card border border-border text-foreground px-4 py-4 rounded-xl w-full text-[15px] focus:outline-none focus:border-foreground transition resize-none"
          />
          <button type="submit" className="visit-btn w-full">
            Send Inquiry
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xdkozzgn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="max-w-2xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
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

        {submitted ? (
          <div className="py-12 text-center">
            <p className="text-lg font-semibold text-accent mb-2">Thank you!</p>
            <p className="text-muted-foreground">Your message has been sent. I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="text-left space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
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
            <button type="submit" disabled={loading} className="visit-btn w-full disabled:opacity-50">
              {loading ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;

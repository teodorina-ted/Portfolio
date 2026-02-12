import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 nav-blur transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{ borderBottom: "1px solid hsl(var(--border))" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <span className="text-sm font-semibold tracking-tight uppercase">
          Teodorina L.
        </span>
        <div className="flex items-center gap-8 text-[11px] uppercase tracking-widest text-muted-foreground">
          <a
            href="#projects"
            className="hover:text-foreground transition hidden md:block"
          >
            Projects
          </a>
          <a
            href="#about"
            className="hover:text-foreground transition hidden md:block"
          >
            About
          </a>
          <a
            href="#contact"
            className="touch-btn"
          >
            Let's Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

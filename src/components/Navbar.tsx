import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{
        background: "hsl(var(--background) / 0.85)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        borderBottom: "1px solid hsl(var(--border))",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <span className="text-sm font-semibold tracking-tight uppercase text-foreground">
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
            href="/Portfolio/documents/TeodorinaLungu_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition hidden md:block"
          >
            CV
          </a>
          <a
            href="/Portfolio/documents/Certificato_Partita_Iva.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition hidden md:block"
          >
            P.IVA
          </a>
          <a href="#contact" className="touch-btn">
            Let's Get in Touch
          </a>
          <button
            onClick={() => setDark(!dark)}
            className="text-muted-foreground hover:text-foreground transition p-1"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

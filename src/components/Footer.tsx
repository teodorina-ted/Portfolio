const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-20 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-sm">
        <div>
          <h4 className="label-micro !text-footer-muted mb-6">Contact</h4>
          <p className="mb-2 text-footer-foreground/80 hover:text-footer-foreground transition">
            teodorina.business@gmail.com
          </p>
          <p className="mb-2 text-footer-foreground/80">+39 328 145 2170</p>
          <p className="text-footer-muted">Cesena, Italy, 47521</p>
        </div>

        <div>
          <h4 className="label-micro !text-footer-muted mb-6">Legal</h4>
          <a
            href="Certificato Partita Iva.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-footer-muted hover:text-footer-foreground transition mb-2 cursor-pointer"
          >
            P.IVA: 04825460407
          </a>
          <p className="text-footer-muted hover:text-footer-foreground transition mb-2 cursor-pointer">
            Terms &amp; Policies
          </p>
        </div>

        <div>
          <h4 className="label-micro !text-footer-muted mb-6">Connect</h4>
          <div className="flex gap-6 text-xl">
            <a
              href="https://wa.me/393281452170"
              target="_blank"
              rel="noopener noreferrer"
              className="text-footer-muted hover:text-green-500 transition"
            >
              <i className="fab fa-whatsapp" />
            </a>
            <a
              href="https://www.linkedin.com/in/teodorina-lungu-631577172/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-footer-muted hover:text-blue-500 transition"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://github.com/teodorina-ted"
              target="_blank"
              rel="noopener noreferrer"
              className="text-footer-muted hover:text-footer-foreground transition"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.instagram.com/teodorinated/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-footer-muted hover:text-pink-500 transition"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-footer-border mt-16 pt-8 text-center text-[10px] text-footer-muted uppercase tracking-widest">
        &copy; 2026 Teodorina L. | Built with Passion for AI &amp; DevOps Logic
      </div>
    </footer>
  );
};

export default Footer;

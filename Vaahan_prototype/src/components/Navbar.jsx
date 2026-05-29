import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Solutions" },
  { href: "#innovation", label: "Technology" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar({ theme, onThemeToggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrolled(window.scrollY > 24);
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} aria-hidden="true" />
      <a className="brand" href="#hero" aria-label="Vaahan International home">
        <span className="brand-mark">V</span>
        <span>
          Vaahan
          <small>International</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button className="theme-toggle" onClick={onThemeToggle} type="button" aria-label="Toggle dark mode">
          <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
        </button>
        <a className="button button-accent nav-cta" href="#contact">
          Get in Touch
        </a>
        <button className="menu-toggle" onClick={() => setOpen(true)} type="button" aria-label="Open menu">
          <Icon name="menu" size={22} />
        </button>
      </div>

      <div className={`mobile-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <button className="panel-close" onClick={() => setOpen(false)} type="button" aria-label="Close menu">
          <Icon name="close" size={24} />
        </button>
        <nav aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="button button-accent" href="#contact" onClick={() => setOpen(false)}>
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}

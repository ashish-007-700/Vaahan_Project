import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Innovation from "./components/Innovation.jsx";
import Navbar from "./components/Navbar.jsx";
import Services from "./components/Services.jsx";
import { useScrollReveal } from "./hooks/useScrollReveal.js";
import { useTheme } from "./hooks/useTheme.js";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  useScrollReveal();

  return (
    <>
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Services />
        <Innovation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

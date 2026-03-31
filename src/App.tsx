import { useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CV from "./components/CV";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import { useActiveSection } from "./hooks/useActiveSection";

const SECTION_IDS = ["hero", "resume", "skills", "projects", "contact"];

function AppContent() {
  const activeSectionId = useActiveSection();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!e.altKey || e.key < "1" || e.key > "5") return;
      const target = document.activeElement as HTMLElement;
      const tag = target?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;
      e.preventDefault();
      const index = parseInt(e.key, 10) - 1;
      const id = SECTION_IDS[index];
      if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="page-bg" aria-hidden="true" />
      <div className="page-bg-texture" aria-hidden="true" />
      <Nav activeSectionId={activeSectionId ?? undefined} />
      <main className="page-shell">
        <div className="page-columns">
          <section id="hero">
            <Hero />
          </section>
          <CV />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
      <BackToTop visible={activeSectionId !== null && activeSectionId !== "hero"} />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

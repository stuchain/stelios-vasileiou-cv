import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <Nav />
      <section id="hero">
        <Hero />
      </section>
      <About />
      <section id="cv">
        <h2>CV</h2>
        <p>Coming soon</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>Coming soon</p>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <p>Coming soon</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Coming soon</p>
      </section>
    </>
  );
}

export default App;

import react from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}

export default App;

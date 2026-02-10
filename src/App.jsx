import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { ScrollWrapper } from "./components/AutoScrollAction";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl relative">
        <Navbar />
        <Hero />
      <ScrollWrapper>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </ScrollWrapper>
    </div>
  )
};

export default App;

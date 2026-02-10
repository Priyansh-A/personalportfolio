import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { ScrollWrapper } from "./components/AutoScrollAction";
import Nav from "./sections/Nav";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl relative">
        <Nav   />
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

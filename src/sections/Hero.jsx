import HeroText from "../components/HeroText";
import { useMediaQuery } from "react-responsive";
import { BackgroundBeamsWithCollision } from "../components/BackgroundBeamsWithCollision";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <>
    <section className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-screen bg-black overflow-hidden" id="home">
      <BackgroundBeamsWithCollision className="h-screen"/>
    </section>
    <section className="flex justify-center min-h-screen overflow-hidden c-space">
      <HeroText />
    </section>
    </>
  );
};

export default Hero;
import { useRef } from "react";
import Card from "../components/Card";
import { FrameWorks } from "../components/FrameWorks";
import CopyEmailButton from "../components/CopyEmailButton";
import { EvervaultCard } from "../components/EvervaultCard";
const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-5rem -top-1rem md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Prem Raj Awasthi</p>
            <p className="subtext">
              I am a BSc.CSIT student. Currently in my final year of the undergrad program. I am currently looking for internship opportunities to finally start my journey in the corporate world working together with like minded people.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-linear-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              DRAG AND DROP
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              image="assets/logos/python.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "45deg", top: "80%", left: "90%" }}
              image="assets/logos/tailwind.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "22deg", top: "20%", left: "90%" }}
              image="assets/logos/github.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "45deg", top: "90%", left: "10%" }}
              image="assets/logos/postman.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              image="assets/logos/go.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              image="assets/logos/javascript.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              image="assets/logos/django.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "20%", left: "70%" }}
              image="assets/logos/docker.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/postgresql.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/fastapi.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-60deg", top: "40%", left: "50%" }}
              image="assets/logos/nginx.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3 relative w-full h-full min-h-400px] md:min-h-500px]">
        <div className="z-10 w-full h-full absolute inset-0">
        <EvervaultCard 
      text="I'm based in Nepal. Open to work."
      className="w-full h-full"
      textClassName="text-white/90"
        />
        </div>
</div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
          <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText text-2xl">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
              <FrameWorks />
            </div>
          </div>
          </div>
      </div>
    </section>
  );
};

export default About;
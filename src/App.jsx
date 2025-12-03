// src/App.jsx
import { Header } from "./components/Header";
import "./index.css";
import ClickSpark from "./components/Clickspark";
import Particles from "./components/Particles";
import ElectricBorder from "./components/ElectricBorder";

function App() {
  return (
    <div
      className="min-h-screen relative scroll-smooth bg-[#162a2a] flex flex-col items-center"
      style={{ width: "100%", position: "relative" }}
    >
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={300}
      >
        {/* Main content*/}
        <div className="flex flex-col items-center w-full h-auto border-2 border-red-500 p-5 relative overflow-hidden">
          {/* Particles  */}
          <div className="absolute inset-0 z-0 pointer-events-none border-2">
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={120}
              particleSpread={12}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

          {/* Header*/}
          <div className="w-full z-20 -mt-4">
            <Header />
          </div>

          {/* Content  */}
          <div
            className="
    flex lg:flex-row justify-between items-center
    text-yellow-200 w-full max-w-6xl flex-wrap md:justify-between
  p-5 relative z-10 border-2 mt-12"
            onDragStart={(e) => e.preventDefault()}
          >
            {/* TEXT */}
            <div className="flex flex-col space-y-4 w-full max-w-md p-2 md:mb-10 ">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-spacemono z-30 select-none">
                Devang
              </h1>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-spacemono z-30 select-none">
                Yadav
              </h2>

              {/* SOCIAL ICONS */}
              <div className="flex items-center p-1 justify-between w-full max-w-[15rem] select-none">
                <img
                  className="w-6 sm:w-7 md:w-8  transition duration-400 tilt-wobble-hover"
                  src="/github.svg"
                  draggable="false"
                  alt="GitHub"
                />
                <img
                  className="w-6 sm:w-7 md:w-8  transition duration-400 tilt-wobble-hover "
                  src="/linkedin.svg"
                  // draggable="false"
                  alt="LinkedIn"
                />
                <img
                  className="w-6 sm:w-7 md:w-8 transition tilt-wobble-hover duration-300"
                  src="/x.svg"
                  alt="X"
                />
                <img
                  className="w-6 sm:w-7 md:w-8 tilt-wobble-hover transition duration-400 "
                  src="/gmail.svg"
                  alt="Gmail"
                />
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex lg:w-auto lg:justify-end select-none pointer-events-none">
              <img
                src="/shougan_castle.png"
                alt="Profile"
                draggable="false"
                className="
        w-[38em] max-w-full h-auto object-cover rounded-tr-3xl
        rounded-bl-3xl rounded-tl-sm hover:scale-105 transition duration-300 select-none
        
      "
              />
            </div>

            <div className="flex flex-row  mt-16 font-jetbrains">
              <ElectricBorder
                color="#E619B8"
                speed={1}
                chaos={0.1}
                thickness={2}
                style={{ borderRadius: 8 }}
              >
                <div className="rounded-2xl">
                  <p style={{ margin: "0 0 0", opacity: 10, padding: 15 }}>
                    When I&apos;m not coding, I explore new frameworks,
                    experiment with UI/UX ideas, or dive into system design
                    concepts. I&apos;m always excited to collaborate, build
                    something meaningful, and keep pushing my craft forward.
                  </p>
                </div>
              </ElectricBorder>
            </div>
            {/* Skills */}
            <div className="flex flex-col  mt-32  font-mono w-full p-1">
              <h2 className="text-5xl">Stack </h2>
                <div className="flex flex-row  mt-5 flex-wrap gap-2">
                  <div className="flex flex-row  h-12 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border border-white/10">
                    <span>Javascript</span>
                    <img src="/skills/javascript.svg" alt="JS-icon" className="w-full h-full object-contain "/>
                  </div>
                  <div className="flex flex-row border-white h-12 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border border-white/10">
                    <span>Typescript</span>
                    <img src="/skills/typescript-icon.svg" alt="JS-icon" className="w-full h-full object-contain rounded-lg "/>
                  </div>
                  <div className="flex flex-row border-2 border-white h-12 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-white/10">
                    <span>Python</span>
                    <img src="/skills/python.svg" alt="JS-icon" className="w-full h-full object-contain"/>
                  </div>
                  <div className="flex flex-row border-2 border-white h-12 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300  border-white/10">
                    <span>React</span>
                    <img src="/skills/react.svg" alt="JS-icon" className="w-full h-full object-contain"/>
                  </div>

                  <div className="flex flex-row  border-white h-12 w-54 space-between items-center p-2 rounded-lg backdrop-blur-md bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border border-white/10">
                    <span>React Native</span>
                    <img src="/skills/react.svg" alt="JS-icon" className="w-15 h-full object-contain pl-5"/>
                  </div>
                  <div className="flex flex-row  border-white h-12 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border border-white/10">
                    <span>NextJS</span>
                    <img src="/skills/nextjs-icon.svg" alt="JS-icon" className="w-full h-full object-contain"/>
                  </div>
                  <div className="flex flex-row  border-white h-12 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border border-white/10">
                    <span>NodeJS</span>
                    <img src="/skills/nodejs-icon.svg" alt="JS-icon" className="w-full h-full object-contain"/>
                  </div>
                  <div className="flex flex-row  border-white h-12 w-50 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border border-white/10">
                    <span>Tailwind CSS</span>
                    <img src="/skills/tailwindcss-icon.svg" alt="JS-icon" className="w-50 h-full object-contain"/>
                  </div>

                </div>
            </div>
          </div>
        </div>
      </ClickSpark>
    </div>
  );
}

export default App;

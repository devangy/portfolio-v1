// src/App.jsx
import { Header } from "./components/Header"; // Import Header component
import "./index.css"; // Import Tailwind CSS styles
import Particles from "./components/Particles";
import ClickSpark from "./components/Clickspark";

function App() {
  return (
    <div
      className="min-h-screen relative scroll-smooth bg-[#16222A] overflow-y-auto flex flex-col items-center justify-center scrollbar-hide"
      style={{ width: "100%", height: "800px", position: "relative" }}
    >
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Content positioned above particles */}
          <div className="absolute top-0 left-0 right-0 z-20">
            <Header />
          </div>
          <div className="flex flex-col justify-center items-center w-full h-auto border-2 border-red-500 p-12">
            <div
              className="
    flex lg:flex-row justify-between items-center
    text-yellow-200 w-full max-w-7xl flex-wrap border-2 border-green-400 md:justify-between
  p-5 md:mt-28"
            >
              {/* TEXT */}
              <div className="flex flex-col space-y-4 w-full max-w-md border-2 border-orange-400 p-2 md:mb-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-spacemono z-30">
                  Devang
                </h1>

                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-spacemono z-30">
                  Yadav
                </h2>

                {/* SOCIAL ICONS */}
                <div className="flex items-center p-1 justify-between w-full max-w-[15rem] border-2">
                  <img className="w-6 sm:w-7 md:w-8" src="/github.svg" />
                  <img className="w-6 sm:w-7 md:w-8" src="/linkedin.svg" />
                  <img className="w-6 sm:w-7 md:w-8" src="/x.svg" />
                  <img className="w-6 sm:w-7 md:w-8" src="/gmail.svg" />
                </div>
              </div>

              {/* IMAGE */}
              <div className="flex  lg:w-auto lg:justify-end">
                <img
                  src="/shougan_castle.png"
                  alt="Profile"
                  className="
        w-[38em] max-w-full h-auto object-cover rounded-tr-3xl 
        rounded-bl-3xl rounded-tl-sm hover:scale-105 transition duration-300
      "
                />
              </div>

              <div className="flex flex-row border-2 p-5 mt-16 font-jetbrains">
              <p>
                When I’m not coding, I explore new frameworks, experiment with UI/UX ideas, or dive into system design concepts. I’m always excited to collaborate, build something meaningful, and keep pushing my craft forward.
              </p>
            </div>
            </div>
          </div>

        {/* Particles positioned absolutely as background */}
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={100}
          particleSpread={16}
          speed={1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={true}
        />
      </ClickSpark>
    </div>
  );
}

export default App;

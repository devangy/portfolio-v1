// src/App.jsx
import { Header } from "./components/Header"; // Import Header component
import "./index.css"; // Import Tailwind CSS styles
import Particles from "./components/Particles";
import ClickSpark from "./components/Clickspark";

function App() {
  return (
    <div
      className="min-h-screen relative scroll-smooth bg-[#16222A] overflow-hidden flex flex-col items-center justify-center"
      style={{ width: "100%", height: "600px", position: "relative" }}
    >
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Content positioned above particles */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center p-5">
          <div className="absolute top-0 left-0 right-0 z-20">
            <Header />
          </div>
          <div className="flex justify-center items-center w-full h-full border-2 border-red-500 p-12">
            <div
              className="flex flex-row lg:flex-row items-center justify-center
                                        text-yellow-200 w-full max-w-6xl mx-auto gap-10 -mb-11"
            >
              {/* TEXT */}
              <div className="flex flex-col space-y-5 w-full max-w-md text-center lg:text-left  border-t-zinc-200 mb-[10em] ml-[5rem]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-spacemono z-30">
                  Devang
                </h1>

                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-spacemono z-30">
                  Yadav
                </h2>

                {/* <h2 className="text-xl sm:text-2xl md:text-[2em] text-purple-500 font-spacemono">
                                    FullStack Developer
                                </h2>*/}

                {/* <h3 className="text-xl sm:text-2xl font-monospace">
                                    Caffeine {`==>`} Code
                                </h3>*/}
                <div className="flex flex-row mt-[10rem] border-2 border-red-500">
                  <div className="flex p-1 space-x-9 w-[18rem] h-[3rem] justify-around">
                    <img src="/github.svg"/>
                    <img src="/linkedin.svg"/>
                    <img src="/x.svg"/>
                    <img src="/gmail.svg"/>
                  </div>
                </div>
              </div>

              {/* IMAGE */}
                <img
                  src="/shougan_castle.png"
                  alt="Profile"
                  className="w-[30rem] h-[22rem] object-cover rounded-tr-3xl rounded-bl-3xl rounded-tl-sm 
                   hover:scale-105 transition duration-300"
                />
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

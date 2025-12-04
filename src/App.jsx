// src/App.jsx
import { Header } from "./components/Header";
import "./index.css";
import ClickSpark from "./components/Clickspark";
import Particles from "./components/Particles";
import ElectricBorder from "./components/ElectricBorder";
import { SquareArrowOutUpRight } from "lucide-react";


function App() {
  return (
    <div
      className="min-h-screen relative scroll-smooth bg-[#162a2a] flex flex-col items-center select-none"
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
        <div className="flex flex-col items-center w-full h-auto border-2 border-red-500 p-5 relative overflow-hidden antialiased">
          {/* Particles  */}
          <div className="absolute inset-0 z-0 pointer-events-none border-2">
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={200}
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
            <div className="flex flex-col space-y-8 w-full max-w-md p-2 md:mb-10 lg:-mt-[6em]">
              <h1 className="text-4xl sm:text-5xl md:text-7xl -ml-1 lg:text-[5rem] font-spacemono z-30  text-lime-100 rgb-fade-soft">
                Devang
              </h1>

              <h2 className="sm:text-5xl md:text-3xl lg:text-[2rem] font-jetbrains z-30 text-amber-100 ">
                Fullstack Dev
              </h2>

              {/* SOCIAL ICONS */}
              <div className="flex items-center p-1 justify-between w-full max-w-[15rem]">
                <img
                  className="w-6 sm:w-7 md:w-8  transition duration-400 tilt-wobble-hover"
                  src="/github.svg"
                  draggable="false"
                  alt="GitHub"
                />
                <img
                  className="w-6 sm:w-7 md:w-8  transition duration-400 tilt-wobble-hover"
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
                <div className=" text-slate-200 leading-relaxed font-jetbrains text-xl">
                  <p style={{ margin: "0 0 0", opacity: 50, padding: 20 }} className="mx-auto">
                 Hey!, My name is <span className="text-green-300">Devang Yadav</span> a fullstack developer based in <span className="text-red-200">Mumbai</span>, <span className="text-orange-300">In</span><span className="text-white">di</span><span className="text-green-300">a</span>.
                 My journey started in 2023 learning {"<html>"},CSS and eventually transitioning to Javascript and other frameworks for building web and mobile applications. One of the major resource that helped me a lot and im thankfull for was <span className=" text-blue-300">The Odin Project - a opensource curriculum</span> for web development, the struggle was real with Javascript section spending time thinking and tinkering around and understanding the concepts which at that time seemed hard but with persistency I overcame it. It helped me distinguish between project based learning and tutorial hell early on. I always wanted to build stuff whether it was apps, lego house or my own physique since I was little but never really got into it seriously until college instead that time was wasted playing Counter Strike 10k hours lol regrets but it was fun. I'm always learning new technologies and reading about finance,markets etc. My core interests lie in Blockhain as I think Decentralization and smart contracts are the future. Systems programming is something I wanna get into and write my own Operating System someday for fun something like Temple OS, Reverse engineering and malware analysis is another topic that I find interesting to read about. 
                  </p>
                </div>
              </ElectricBorder>
            </div>
            {/* Skills */}
            <div className="flex flex-col  mt-32  font-mono w-full p-1 ">
              <h2 className="text-4xl font-code text-yellow-100">
                {/* <span className="animate-bounce text-green-300">➜</span> */}
                Techstack
              </h2>
              <div className="flex flex-row  mt-5 flex-wrap gap-2 text-yellow-300 text-lg">
                <div className="flex flex-row  h-12 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/10">
                  <span>Javascript</span>
                  <img
                    src="/skills/javascript.svg"
                    alt="JS-icon"
                    className="w-full h-full object-contain "
                  />
                </div>
                <div className="flex flex-row border-white h-12 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/20">
                  <span>Typescript</span>
                  <img
                    src="/skills/typescript-icon.svg"
                    alt="JS-icon"
                    className="w-full h-full object-contain rounded-lg "
                  />
                </div>
                <div className="flex flex-row border-2 border-white h-12 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-white/20">
                  <span>Python</span>
                  <img
                    src="/skills/python.svg"
                    alt="JS-icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-row border-2 border-white h-12 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300  border-white/20 ">
                  <span>React</span>
                  <img
                    src="/skills/react.svg"
                    alt="JS-icon"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-row  border-white h-12 w-54 space-between items-center p-2 rounded-lg backdrop-blur-md bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/20">
                  <span>React Native</span>
                  <img
                    src="/skills/react.svg"
                    alt="JS-icon"
                    className="w-15 h-full object-contain pl-5"
                  />
                </div>
                <div className="flex flex-row  border-white h-12 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/20">
                  <span>NextJS</span>
                  <img
                    src="/skills/nextjs-icon.svg"
                    alt="JS-icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-row  border-white h-12 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/20">
                  <span>NodeJS</span>
                  <img
                    src="/skills/nodejs-icon.svg"
                    alt="JS-icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-row  border-white h-12 w-50 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/20">
                  <span>Tailwind CSS</span>
                  <img
                    src="/skills/tailwindcss-icon.svg"
                    alt="JS-icon"
                    className="w-50 h-full object-contain"
                  />
                </div>
              </div>
              {/* work experience */}
              <div className="flex flex-col font-code text-yellow-100 p-2 mt-52">
                <h3 className="text-4xl">Experience</h3>

                <div className="flex flex-col glass-card w-full h-64 mt-8 rounded-xl p-2 font-jetbrains leading-relaxed">
                  <div className="flex text-white leading-normal text-3xl w-full items-start ">
                    <div className="flex flex-row w-full items-center border-b border-white pb-2">
                      <div className="flex w-full gap-3 text-red-300">
                        <span className="text-emerald-300 animate-pulse">➜</span>
                        Vighnotech
                        <span className="ml-2 text-green-100 tilt-wobble-hover p-2 ">
                          <a
                            href={"https://vighnotech.com"}
                            target="_blank" // Opens the link in a new tab
                            rel="noopener noreferrer"
                            className="text-green-200 hover:text-green-500"
                          >
                            <SquareArrowOutUpRight
                              size={30}
                              link="https://chatgpt.com"
                              className="z-50  hover:scale-110"
                            />
                          </a>
                        </span>
                      </div>
                      <div className="flex justify-end min-w-0 text-nowrap text-blue-200 text-[0.8em] leading-relaxed">
                        [02-2025 - 07-2025]
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row mt-4 p-2 text-xl leading-relaxed text-green-300">
                    My professional experience covers a range of projects, from developing user-facing applications using React and React Native to architecting the underlying backend services and CRM systems with Node.js and PostgreSQL. I was primarily responsible for creating and sustaining business automation tools and custom CRM solutions that drove efficiency for clients in various industries.
                  </div>
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

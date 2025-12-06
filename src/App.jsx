// src/App.jsx
import { Header } from "./components/Header";
import "./index.css";
import ClickSpark from "./components/Clickspark";
import Particles from "./components/Particles";
import ElectricBorder from "./components/ElectricBorder";
import { SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";
import github from "./assets/github.svg";
import twitter from "./assets/x.svg";
import gmail from "./assets/gmail.svg";
import linkedin from "./assets/linkedin.svg";
import castle from "./assets/castle.png";
import js from "./assets/skills/javascript.svg";
import ts from "./assets/skills/typescript-icon.svg";
import node from "./assets/skills/nodejs-icon.svg";
import python from "./assets/skills/python.svg";
import react from "././assets/skills/react.svg";
import postgres from "./assets/skills/postgresql.svg";
import talwind from "./assets/skills/tailwindcss-icon.svg";
import nextjs from "./assets/skills/nextjs-icon.svg";

function App() {
  const [expandIntro, setIntro] = useState(true);

  return (
    <div
      className="min-h-screen relative scroll-smooth bg-[#162a2a] flex flex-col items-center select-none "
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
        <div className="flex flex-col items-center w-full h-auto border-2 border-red-500 p-5 relative overflow-hidden antialiased ">
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
            <div className="flex flex-col space-y-8 w-full max-w-md p-2 md:mb-10 lg:-mt-[6em] f">
              <h1 className="lg:rgb-fade-soft text-4xl sm:text-5xl md:text-7xl -ml-1 lg:text-[5rem] font-spacemono z-30  text-lime-100 ">
                Devang
              </h1>

              <h2 className="sm:text-5xl md:text-3xl lg:text-[2rem] font-jetbrains z-30 text-amber-100 ">
                Fullstack Dev
              </h2>

              {/* SOCIAL ICONS */}
              <div className="flex items-center p-1 justify-between w-full max-w-[15rem]">
                <img
                  className="w-6 sm:w-7 md:w-8  transition duration-400 tilt-wobble-hover"
                  src={github}
                  draggable="false"
                  alt="GitHub"
                />

                <img
                  className="w-6 sm:w-7 md:w-8  transition duration-400 tilt-wobble-hover"
                  src={linkedin}
                  // draggable="false"
                  alt="LinkedIn"
                />
                <img
                  className="w-8 sm:w-7 md:w-8 transition tilt-wobble-hover duration-400 "
                  src={twitter}
                  alt="X"
                />
                <img
                  className="w-6 sm:w-7 md:w-8 tilt-wobble-hover transition duration-400 "
                  src={gmail}
                  alt="Gmail"
                />
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex lg:w-auto lg:justify-end select-none pointer-events-none">
              <img
                src={castle}
                alt="castle_image"
                draggable="false"
                className="
        w-[38em] max-w-full h-auto object-cover rounded-tr-3xl
        rounded-bl-3xl rounded-tl-sm hover:scale-105 transition duration-300 select-none
        
      "
              />
            </div>

            <div className="flex flex-row  mt-16 font-jetbrains bg-[#1F2121]">
              <ElectricBorder
                color="#E619B8"
                speed={1}
                chaos={0.1}
                thickness={2}
                style={{ borderRadius: 8 }}
              >
                <div className="text-slate-200 leading-relaxed font-mono text-xl pr-2">
                  <p
                    style={{ margin: "0 0 0", padding: 20 }}
                    className="mx-auto"
                  >
                    Hey!, My name is{" "}
                    <span className="text-green-300">Devang Yadav</span> a
                    fullstack developer based in{" "}
                    <span className="text-red-300">Mumbai</span>,{" "}
                    <span className="text-orange-300">In</span>
                    <span className="text-white">di</span>
                    <span className="text-green-300">a</span>. My journey
                    started in 2023 learning {"<html>"}, CSS and eventually
                    transitioning to Javascript and other frameworks for
                    building web and mobile applications. One of the major
                    resource that helped me a lot and I'm thankful for was{" "}
                    <span className="text-blue-300">
                      The Odin Project - a opensource curriculum
                    </span>{" "}
                    for web development, the struggle was real with Javascript
                    section spending time thinking and tinkering around and
                    understanding the concepts which at that time seemed hard
                    but with persistency I overcame it.
                    {!expandIntro && (
                      <span
                        className="inline-flex w-32  mt-1 ml-2 bg-zinc-900 rounded-md justify-center items-center hover:text-green-300 hover:bg-zinc-950 cursor-pointer hover:scale-105 border-2"
                        onClick={() => setIntro(true)}
                      >
                        Expand...
                      </span>
                    )}
                    {expandIntro && (
                      <>
                        {" "}
                        It helped me distinguish between project based learning
                        and tutorial hell early on. I always wanted to build
                        stuff whether it was apps, lego house or my own physique
                        since I was little but never really got into it
                        seriously until college instead that time was wasted
                        playing Counter Strike 10k hours lol regrets but it was
                        fun. I'm always learning new technologies and reading
                        about finance, markets etc. My core interests lie in
                        Blockchain as I think Decentralization and smart
                        contracts are the future. Systems programming is
                        something I wanna get into and write my own Operating
                        System someday for fun something like Temple OS, Reverse
                        engineering and malware analysis is another topic that I
                        find interesting to read about.
                        <span
                          className="inline-flex border-2 w-20 text-xl ml-2 bg-zinc-900 rounded-lg justify-start p-2 h-10 items-center text-red-300 hover:bg-black hover:text-white cursor-pointer font-mono"
                          onClick={() => setIntro(false)}
                        >
                          {"Close"}
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </ElectricBorder>
            </div>

            {/* SKILLS */}
            <div className="flex flex-col  mt-32  font-mono w-full p-1 ">
              <h2 className="text-4xl font-code text-yellow-100">
                {/* <span className="animate-bounce text-green-300">➜</span> */}
                Techstack
              </h2>
              <div className="flex flex-row  mt-5 flex-wrap gap-2 text-purple-100 text-lg bg-transparent font-code leading-relaxed">
                <div className="flex flex-row  h-12 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>Javascript</span>
                  <img
                    src={js}
                    alt="JS-icon"
                    className="w-full h-full object-contain "
                  />
                </div>
                <div className="flex flex-row border-white h-12 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>Typescript</span>
                  <img
                    src={ts}
                    alt="JS-icon"
                    className="w-full h-full object-contain rounded-lg "
                  />
                </div>
                <div className="flex flex-row border-2 border-white h-12 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-white/80">
                  <span>Python</span>
                  <img
                    src={python}
                    alt="JS-icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-row border-2 border-white h-12 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300  border-white/80 ">
                  <span>React</span>
                  <img
                    src={react}
                    alt="JS-icon"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-row  border-white h-12 w-54 space-between items-center p-2 rounded-lg backdrop-blur-md bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>React Native</span>
                  <img
                    src={react}
                    alt="JS-icon"
                    className="w-15 h-full object-contain pl-5"
                  />
                </div>
                <div className="flex flex-row  border-white h-12 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>NextJS</span>
                  <img
                    src={nextjs}
                    alt="JS-icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-row  border-white h-12 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>NodeJS</span>
                  <img
                    src={node}
                    alt="JS-icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-row  border-white h-12 w-50 justify-center items-center gap-5 p-2 rounded-lg backdrop-blur-md bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>Tailwind CSS</span>
                  <img
                    src={talwind}
                    alt="JS-icon"
                    className="w-50 h-full object-contain"
                  />
                </div>
              </div>
              {/* EXPERIENCE */}
              <div className="flex flex-col font-code text-yellow-100 p-2 mt-52">
                <h3 className="text-4xl">Experience</h3>

                <div className="flex flex-col glass-card w-full h-64 mt-8 rounded-xl p-2 font-jetbrains leading-relaxed">
                  <div className="flex text-white leading-normal text-3xl w-full items-start ">
                    <div className="flex flex-row w-full items-center border-b border-white pb-2">
                      <div className="flex w-full gap-3 text-sky-100">
                        <span className="text-emerald-400 animate-pulse">
                          ➜
                        </span>
                        Vighnotech
                        <span className="ml-2 text-green-100 tilt-wobble-hover p-2 ">
                          <a
                            href={"https://vighnotech.com"}
                            target="_blank" // Opens the link in a new tab
                            rel="noopener noreferrer"
                            className="text-green-200 hover:text-green-200"
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
                    My professional experience covers a range of projects, from
                    developing user-facing applications using React and React
                    Native to architecting the underlying backend services and
                    CRM systems with Node.js and PostgreSQL. I was primarily
                    responsible for creating and sustaining business automation
                    tools and custom CRM solutions that drove efficiency for
                    clients in various industries.
                  </div>
                </div>
              </div>

              {/* PROJECTS  */}
              <div className="mt-20">
                <h4 className="flex text-4xl text-yellow-100 mb-8">Projects</h4>
                <div className="flex flex-row border-2 w-full h-[50rem] "></div>
              </div>
            </div>
          </div>
        </div>
      </ClickSpark>
    </div>
  );
}

export default App;

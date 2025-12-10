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
import js from "./assets/skills/javascript.svg";
import ts from "./assets/skills/typescript-icon.svg";
import node from "./assets/skills/nodejs-icon.svg";
import python from "./assets/skills/python.svg";
import react from "././assets/skills/react.svg";
import postgres from "./assets/skills/postgresql.svg";
import tailwind from "./assets/skills/tailwindcss-icon.svg";
import nextjs from "./assets/skills/nextjs-icon.svg";
import castle from "/public/castle.webp";
import { Meteors } from "./components/Meteors";

function App() {
  const [expandIntro, setIntro] = useState(true);

  return (
    <div
      className="min-h-screen relative bg-[#162a2a] flex flex-col items-center"
      style={{ width: "100%", position: "relative" }}
    >
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={300}
      >
        <div className="absolute inset-0 z-0 pointer-events-none border-2 ">
          <Particles
            particleColors={["#ffffff"]}
            particleCount={100}
            particleSpread={10}
            speed={0.11}
            particleBaseSize={220}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Main content*/}
        <div className="flex flex-col items-center w-full select-none">
          {/* Particles  */}

          {/* Header*/}
          <div className="w-full z-20 -mt-4">
            <Header />
          </div>

          {/* Content  */}
          <div
            className="
    flex lg:flex-row justify-between items-center
    text-yellow-200 w-full max-w-6xl flex-wrap md:justify-between
  p-5 relative z-10 border-2 mt-12  lg:space-y-12"
            // onDragStart={(e) => e.preventDefault()}
          >
            {/* TEXT */}

            <div className="flex flex-col space-y-8 w-full max-w-md p-2 md:mb-10 lg:-mt-[6em]">
              <h1 className="lg:rgb-fade-soft text-4xl sm:text-5xl md:text-7xl -ml-1 lg:text-[5.5rem] font-spacemono leading-loose z-30 text-lime-100 animate rgb-fade-soft">
                Devang
              </h1>

              <h2 className="sm:text-3xl md:text-3xl lg:text-[2rem] font-spacemono z-20 text-amber-100 ">
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
                  className="w-8 sm:w-7 md:w-8 transition tilt-wobble-hover duration-400  -z-50"
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
            <div className="flex lg:w-auto lg:justify-end select-none pointer-events-none ">
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

            <div className="flex  font-jetbrains bg-[#1F2121] mt-32">
              <ElectricBorder
                color="#E619B8"
                speed={1}
                chaos={0.1}
                thickness={2}
                style={{ borderRadius: 8 }}
                className="will-change-transform"
              >
                <div className="text-slate-200 leading-relaxed font-mono text-xl">
                  <p
                    style={{ margin: 0, padding: 20 }}
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
                    resource that helped me a lot and I&apos;m thankful for was{" "}
                    <span className="text-blue-300">
                      The Odin Project - a opensource curriculum
                    </span>{" "}
                    for web development, the struggle was real with Javascript
                    section spending time thinking and tinkering around and
                    understanding the concepts which at that time seemed hard
                    but with persistency I overcame it.
                    {!expandIntro && (
                      <span
                        className="inline-flex w-32  mt-1 ml-2 bg-zinc-900 rounded-lg justify-center items-center hover:text-green-300 hover:bg-zinc-950 cursor-pointer hover:scale-105 border "
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
                        fun. I&apos;m always learning new technologies and
                        reading about finance, markets etc. My core interests
                        lie in Blockchain as I think Decentralization and smart
                        contracts are the future. Systems programming is
                        something I wanna get into and write my own Operating
                        System someday for fun something like Temple OS, Reverse
                        engineering and malware analysis is another topic that I
                        find interesting to read about.
                        <span
                          className="inline-flex w-20 text-xl ml-2 bg-zinc-900 rounded-lg justify-start p-2 h-10 items-center text-red-400 hover:bg-black hover:text-white cursor-pointer font-mono border"
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
            <div className="flex flex-col font-mono w-full p-1 mt-24">
              <h2 className="text-4xl font-jetbrains text-yellow-100 ">
                {/* <span className="animate-bounce text-green-300">➜</span> */}
                Techstack
              </h2>
              <div className="flex flex-row  mt-5 flex-wrap gap-2 text-purple-100 text-lg bg-transparent font-code leading-relaxed">
                <div className="flex flex-row  h-12 justify-center items-center gap-5 p-2 rounded-lg  bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>Javascript</span>
                  <img
                    src={js}
                    alt="JS-icon"
                    className="w-full h-full object-contain "
                  />
                </div>
                <div className="flex flex-row border-white h-12 justify-center items-center gap-5 p-2 rounded-lg  bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>Typescript</span>
                  <img
                    src={ts}
                    alt="JS-icon"
                    className="w-full h-full object-contain rounded-lg "
                  />
                </div>
                <div className="flex flex-row border-2 border-white h-12 justify-center items-center gap-5 p-2 rounded-lg  bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-white/80">
                  <span>Python</span>
                  <img
                    src={python}
                    alt="JS-icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-row border-2 border-white h-12 justify-center items-center gap-5 p-2 rounded-lg  bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300  border-white/80 ">
                  <span>React</span>
                  <img
                    src={react}
                    alt="JS-icon"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-row  border-white h-12 w-54 space-between items-center p-2 rounded-lg  bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>React Native</span>
                  <img
                    src={react}
                    alt="JS-icon"
                    className="w-15 h-full object-contain pl-5"
                  />
                </div>
                <div className="flex flex-row  border-white h-12 justify-center items-center gap-5 p-2 rounded-lg bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>NextJS</span>
                  <img
                    src={nextjs}
                    alt="JS-icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-row  border-white h-12 justify-center items-center gap-5 p-2 rounded-lg  bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>NodeJS</span>
                  <img
                    src={node}
                    alt="JS-icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-row  border-white h-12 w-50 justify-center items-center gap-5 p-2 rounded-lg  bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>Tailwind CSS</span>
                  <img
                    src={tailwind}
                    alt="JS-icon"
                    className="w-50 h-full object-contain"
                  />
                </div>
                <div className="flex flex-row  border-white h-12 w-50 justify-center items-center gap-5 p-2 rounded-lg  bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>PostgreSQL</span>
                  <img
                    src={postgres}
                    alt="JS-icon"
                    className="w-50 h-full object-contain"
                  />
                </div>
              </div>
              {/* EXPERIENCE */}
              <div className="flex flex-col font-code text-yellow-100 p-2 mt-28">
                <h3 className="text-4xl font-jetbrains">Experience</h3>

                <div className="flex flex-col bg-slate-950 w-full  mt-8 rounded-xl p-2 font-jetbrains leading-relaxed md: h-auto">
                  <div className="flex text-white leading-normal text-4xl w-full items-start">
                    <div className="flex flex-row w-full items-center border-b border-white pb-2 ">
                      <div className="flex w-full gap-3 text-sky-100">
                        <span className="text-emerald-400 animate-pulse">
                          ➜
                        </span>
                        Vighnotech
                        <span className="ml-2 text-green-100 tilt-wobble-hover p-2">
                          <a
                            href={"https://vighnotech.com"}
                            target="_blank" // Opens the link in a new tab
                            rel="noopener noreferrer"
                            className="text-green-200 hover:text-green-200"
                          >
                            <SquareArrowOutUpRight
                              size={30}
                              link="https://chatgpt.com"
                              className="z-50  hover:scale-110 mt-1"
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

              {/* PROJECTS */}
              <div className="relative flex flex-col justify-around border-2 w-full h-[80rem] border-red-400 overflow-hidden p-2 mt-20">

                <h3 className="text-4xl text-yellow-100 -mt-28 ml-2">Projects</h3>

                <div className="flex flex-col space-x-3 w-full h-[22rem] relative overflow-hidden bg-[#121724] rounded-lg  border-2 -mt-56 ">
                  <div className="flex flex-row justify-between items-center text-white font-spacemono  w-full  z-10 ">
                    <div className="flex flex-row items-center justify-start p-2 border-b w-full ">
                      <span className="text-5xl ml-2">
                        Beacon
                        <a
                          href="https://chatgpt.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block align-middle"
                        >
                          <SquareArrowOutUpRight
                            size={32}
                            className="z-50 tilt-wobble-hover hover:scale-110 ml-10 -mt-1 hover:text-green-300 "
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="flex font-jetbrains text-green-300 text-xl p-2 leading-relaxed">
                    Beacon is a real-time chat application I built to explore websockets for bidirectional communication. It uses Socket.io to handle instant messaging with minimal latency.PostgreSQL database to persist message history, ensuring conversations aren&apos;t lost when a user refreshes. Implemented Github OAuth to handle authentication and seamless login. Designed Designed a mobile-first, responsive UI in React, optimizing the chat experience for performance and usability on both desktop and mobile devices.
                  </div>
                  <Meteors number={20} />
                </div>

                <div className="flex w-full h-[12rem] relative overflow-hidden bg-[#121724] rounded-lg p-5 border-2 -mt-48">
                  <h1 className="text-[3em] z-50 text-white font-spacemono">
                    DataLog
                  </h1>
                  <Meteors number={20} />
                </div>

                <div className="flex w-full h-[12rem] relative overflow-hidden bg-[#121724] rounded-lg p-5 border-2">
                  <h1 className="text-[3em] z-50 text-white font-spacemono">
                    LucidLines
                  </h1>
                  <Meteors number={20} />
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

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
import docker from "./assets/skills/docker.svg";
import fedora from "./assets/skills/fedora.svg";
import nginx from "./assets/skills/nginx.svg";
import redux from "./assets/skills/redux.svg";
import reactquery from "./assets/skills/react-query.svg";
import prisma from "./assets/skills/prisma.svg";
import aws from "./assets/skills/aws.svg";
import bash from "./assets/skills/bash.svg";
import go from "./assets/skills/go.svg";
import cloudflare from "./assets/skills/cloudflare.svg";

import castle from "./assets/images/shougan_castle.webp";
import { Meteors } from "./components/Meteors";

function App() {
  const [expandIntro, setIntro] = useState(true);

  return (
    <div
      className="min-h-screen relative bg-[#162a2a] flex flex-col items-center h-auto"
      style={{ width: "100%", position: "relative", }}
    >
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={300}
      >
        <div className="absolute inset-0 z-0 pointer-events-none ">
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
  p-5 relative z-10  mt-12  lg:space-y-12"
            // onDragStart={(e) => e.preventDefault()}
          >
            {/* TEXT */}

            <div className="flex flex-col space-y-8 w-full max-w-md p-2 md:mb-10 lg:-mt-[3em]">
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
                  onClick={() => window.open("https://github.com/devangy", "_blank")}
                />

                <img
                  className="w-6 sm:w-7 md:w-8  transition duration-400 tilt-wobble-hover"
                  src={linkedin}
                  // draggable="false"
                    alt="LinkedIn"
                    onClick={() => window.open("https://www.linkedin.com/in/devangy", "_blank")}
                  />
                  <img
                    className="w-8 sm:w-7 md:w-8 transition tilt-wobble-hover duration-400  -z-50"
                    src={twitter}
                    alt="X"
                    onClick={() => window.open("https://github.com/devangy", "_blank")}
                  />
                  <img
                    className="w-6 sm:w-7 md:w-8 tilt-wobble-hover transition duration-400 "
                    src={gmail}
                  alt="Gmail"
                  onClick={() => window.open("mailto:d3vang@gmail.com?subject=Subject&body=Body%20goes%20here", "_blank")}
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
                className="will-change-transform bg-black"
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
              <div className="flex flex-row  mt-5 flex-wrap gap-2 text-purple-100 text-lg bg-transparent font-code leading-relaxed  gap-y-3">
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
                <div className="flex flex-row border-2 border-white h-12 justify-center items-center gap-5 p-2 rounded-lg  bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-white/80">
                  <span>Golang</span>
                  <img
                    src={go}
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
                <div className="flex flex-row  border-white h-12 justify-center items-center gap-5 p-2 rounded-lg bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>Redux</span>
                  <img
                    src={redux}
                    alt="JS-icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-row  border-white h-12 text-nowrap justify-center items-center gap-5 p-2 rounded-lg bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80 ">
                  <span>React Query</span>
                  <img
                    src={reactquery}
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
                <div className="flex flex-row  border-white h-12 w-50 justify-center items-center gap-5 p-2 rounded-lg  bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>Prisma</span>
                  <img
                    src={prisma}
                    alt="JS-icon"
                    className="w-50 h-full object-contain"
                  />
                </div>
                <div className="flex flex-row  border-white h-12 w-50 justify-center items-center gap-5 p-2 rounded-lg  bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>Docker</span>
                  <img
                    src={docker}
                    alt="JS-icon"
                    className="w-50 h-full object-contain"
                  />
                </div>
                <div className="flex flex-row  border-white h-12 w-50 justify-center items-center gap-5 p-2 rounded-lg  bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>AWS</span>
                  <img
                    src={aws}
                    alt="JS-icon"
                    className="w-50 h-full object-contain"
                  />
                </div>
                <div className="flex flex-row  border-white h-12 w-50 justify-center items-center gap-5 p-2 rounded-lg  bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>Cloudflare</span>
                  <img
                    src={cloudflare}
                    alt="JS-icon"
                    className="w-50 h-full object-contain"
                  />
                </div>
                <div className="flex flex-row  border-white h-12 w-50 justify-center items-center gap-5 p-2 rounded-lg  bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>Fedora</span>
                  <img
                    src={fedora}
                    alt="JS-icon"
                    className="w-50 h-full object-contain"
                  />
                </div>
                <div className="flex flex-row  border-white h-12 w-50 justify-center items-center gap-5 p-2 rounded-lg  bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>Nginx</span>
                  <img
                    src={nginx}
                    alt="JS-icon"
                    className="w-50 h-full object-contain"
                  />
                </div>
                <div className="flex flex-row  border-white h-12 w-50 justify-center items-center gap-5 p-2 rounded-lg  bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
                  <span>Bash</span>
                  <img
                    src={bash}
                    alt="JS-icon"
                    className="w-50 h-full object-contain"
                  />
                </div>
              </div>
              {/* EXPERIENCE */}
              <div className="flex flex-col font-code text-yellow-100 p-2 mt-28">
                <h3 className="text-4xl font-jetbrains">Experience</h3>

                <div className="flex flex-col bg-slate-950 w-full  mt-8 rounded-xl p-2 font-jetbrains leading-relaxed md: h-auto border-2">
                  <div className="flex text-white leading-normal text-4xl w-full items-start ">
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
                              className="z-50  hover:scale-110 mt-1 text-white hover:text-green-300"
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
              <div className="relative flex flex-col  space-y-16  w-full h-[70rem]  overflow-hidden p-2  mt-20">

                <h3 className="text-4xl text-yellow-100 -mb-10">Projects</h3>

                <div className="flex flex-col space-x-3 w-full h-auto relative overflow-hidden justify-around bg-black rounded-lg  border-2 ">
                  <div className="flex flex-row justify-between items-center text-white font-spacemono  w-full  z-10 ">
                    <div className="flex flex-row items-center justify-start p-2 border-b w-full ">
                      <span className="text-[2.8em] ml-2 text-red-400">
                        Beacon
                        <a
                          href="https://github.com/devangy/Beacon"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block align-middle"
                        >
                          <SquareArrowOutUpRight
                            size={32}
                            className="z-50 tilt-wobble-hover hover:scale-110 ml-10 -mt-1 hover:text-green-300 text-white"
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="flex font-jetbrains text-green-300 text-xl p-2 leading-relaxed -ml-10">
                    Beacon is a real-time chat application I built to explore websockets for bidirectional communication. It uses Socket.io to handle instant messaging with minimal latency.PostgreSQL database to persist message history, ensuring conversations aren&apos;t lost when a user refreshes. Implemented Github OAuth to handle authentication and seamless login. Designed Designed a mobile-first, responsive UI in React, optimizing the chat experience for performance and usability on both desktop and mobile devices.
                  </div>
                  <Meteors number={20} />
                </div>

                <div className="flex flex-col space-x-3 w-full h-auto relative overflow-hidden bg-black rounded-lg  border-2 -mt-56 ">

                  <div className="flex flex-row justify-between items-center text-white font-spacemono  w-full  z-10 ">
                    <div className="flex flex-row items-center justify-start  text-[2.8em] p-3 border-b w-full ">
                      <span className="text-5xl ml-2 text-red-400">
                        DataLog
                        <a
                          href="https://github.com/devangy/market"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block align-middle"
                        >
                          <SquareArrowOutUpRight
                            size={32}
                            className="z-50 tilt-wobble-hover hover:scale-110 ml-10 -mt-1 hover:text-green-300 text-white "
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="flex font-jetbrains text-green-300 text-xl p-2 leading-relaxed">
                    DataLog is a Telegram Bot built with Golang and Telego. It provides notification alerts on new events with volume and whale alerts for tracking whale movements across two prediction markets Kalshi and Polymarket. It uses concurrent API polling system using goroutines, channels, and backoff retry logic to get contracts prices from both markets simultaneously. To prevent duplicates it uses a hashmap and automatically discards duplicates by comparing hashes.
                  </div>
                  <Meteors number={20} />
                </div>

                <div className="flex flex-col space-x-3 w-full h-auto relative overflow-hidden bg-black rounded-lg  border-2 -mt-56 ">
                  <div className="flex flex-row justify-between items-center text-white font-spacemono  w-full  z-10 ">
                    <div className="flex flex-row items-center justify-start text-[2.8em] p-3 border-b w-full ">
                      <span className="text-5xl ml-2 text-red-400">
                        LucidLines
                        <a
                          href="https://github.com/devangy/LucidLines"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block align-middle"
                        >
                          <SquareArrowOutUpRight
                            size={32}
                            className="z-50 tilt-wobble-hover hover:scale-110 ml-10 -mt-1 hover:text-green-300 text-white "
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="flex font-jetbrains text-green-300 text-xl p-2 leading-relaxed">
                  LucidLines is a full-stack blogging platform with powerful admin management tools. I built the backend with Node.js and Express, PostgreSQL and Prisma ORM for queries, focusing on creating clean, efficient RESTful APIs to handle user data and Cloudinary for image uploads. Implemented full CRUD functionality, enabling users to publish, edit, and delete blogs, as well as engage through comments and likes.
                  </div>
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

import { SquareArrowOutUpRight } from "lucide-react";
import { Meteors } from "./Meteors";

export const ProjectCard = ({ title, description, githubLink }) => {
  return (
    <div className="flex flex-col space-x-3 w-full h-auto relative overflow-hidden bg-black rounded-lg border-2">
      <div className="flex flex-row justify-between items-center text-white font-spacemono w-full z-10">
        <div className="flex flex-row items-center justify-start p-2 border-b w-full">
          <span className="text-[2.8em] ml-2 text-cyan-400">
            {title}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block align-middle"
            >
              <SquareArrowOutUpRight
                size={32}
                className="z-50 tilt-wobble-hover hover:scale-110 ml-10 -mt-1 hover:text-green-300 text-white border rounded-md"
              />
            </a>
          </span>
        </div>
      </div>
      <div className="flex font-jetbrains text-green-300 text-xl p-2 leading-relaxed">
        {description}
      </div>
      <Meteors number={20} />
    </div>
  );
};

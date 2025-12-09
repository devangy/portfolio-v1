import { useRef, useState } from "react";
import { motion } from "framer-motion";

export const Header = () => {
    return (
        <div className="py-10">
            <Navbar />
        </div>
    );
};

const Navbar = () => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 100,
    }); 

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="relative mx-auto h-15 flex items-center w-fit rounded-full hover:border-2 border-white-50 hover:shadow-custom bg-[#212121] brightness-100 contrast-25 font-jetbrains gap-6 pl-0.5 pr-0.5"
        >
            <Tab setPosition={setPosition}>Home</Tab>
            <span className="text-stone-50  brigtness-100 contrast-25 text-3xl font-jetbrains">
                {" ==> "}
            </span>
            <Tab setPosition={setPosition}>Projects</Tab>
            <span className="text-stone-50 brigtness-100 contrast-25 text-3xl font-jetbrains">
                {" ==> "}
            </span>
            <Tab setPosition={setPosition}>Work</Tab>
            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({ children, setPosition }) => {
    const ref = useRef(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width: width,
                    opacity: 1,
                });
            }}
            className="relative z-10 block cursor-pointer h-15 py-4 px-5 text-green-300  text-3xl hover:text-black"
        >
            {children}
        </li>
    );
};

// eslint-disable-next-line react/prop-types
const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 h-16 rounded-full bg-stone-50 "
        />
    );
};

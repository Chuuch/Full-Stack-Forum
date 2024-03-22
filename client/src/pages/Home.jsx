import { PiCode } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-10">
      <div className="absolute top-[350px] left-[220px] flex flex-col items-start  text-8xl">
        <TypeAnimation
          sequence={[
            "Welcome to DevTalk!",
            1000,
            "Web Development",
            1000,
            "Mobile Development",
            1000,
            "Blockchain",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          cursor="text-sky-500"
        />
        <p className="text-3xl pl-2 mt-4 text-gray-500">
          Made by developers, for developers. Here to learn, grow and help.
        </p>
      </div>
      <div className="flex flex-row items-center absolute left-[230px] top-[500px]">
        <PiCode size={240} className="text-sky-500 animate-pulse" />
      </div>
      <Stats />
    </div>
  );
};

export default Home;

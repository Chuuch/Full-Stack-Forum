import { PiCode } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-10">
      <div className="absolute top-[350px] lg:left-[220px] flex flex-col items-start md:left-[70px] md:text-6xl lg:text-8xl text-4xl">
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
        <p className="text-3xl md:w-full pl-2 mt-4 text-gray-500">
          Made by developers, for developers. Here to learn, grow and help.
        </p>
      </div>
      <div className="flex flex-row items-center absolute lg:left-[240px] md:left-[80px] left-[230px] top-[500px]">
        <PiCode className="text-sky-500 animate-pulse md:w-40 md:h-40" />
      </div>
      <div className="flex lg:left-[450px] md:left-[260px] md:top-[525px] absolute top-[560px] left-[520px]">
        <Stats />
      </div>
    </div>
  );
};

export default Home;

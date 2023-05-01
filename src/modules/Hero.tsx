import Button from "@/common/components/Button";
import { ReactElement } from "react";

type HeroProps = {
  text: string;
  subtext: string;
};

const Hero = ({ text, subtext }: HeroProps): ReactElement => {
  const style = {
    backgroundImage: `url("/assets/hero-background.jpg")`,
  };
  return (
    <section style={style} className="bg-cover">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-60"></div>

      <div className="w-full flex flex-col justify-center items-center gap-6 py-32 md:py-80 px-8 md:px-40 relative">
        <h1 className="text-white text-2xl md:text-5xl font-bold text-center">
          {text}
        </h1>
        <h3 className="text-white text-2xl md:text-3xl text-center">
          {subtext}
        </h3>
        <div className="w-full flex flex-col gap-4">
          <h4 className="text-white text-base md:text-xl text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
          <form className="w-full flex flex-col md:flex-row justify-center items-center gap-6 lg:px-48">
            <input
              type="text"
              className="flex-1 p-4 border-1 border-gray outline-none text-white bg-black opacity-60 focus:opacity-100 rounded-lg transition-all duration-200"
              placeholder="Email address"
            />
            <Button text="Get Started >" paddingX={3} paddingY={0.5} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;

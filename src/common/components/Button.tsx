import { ReactElement } from "react";

type ButtonProps = {
  text: string;
  paddingX: number;
  paddingY: number;
};

const Button = ({ text, paddingX, paddingY }: ButtonProps): ReactElement => {
  const style = {
    padding: `${paddingY}rem ${paddingX}rem`,
  };
  return (
    <button
      style={style}
      className="bg-red hover:bg-white hover:text-red text-base md:text-lg text-white rounded-sm transition-all duration-200"
    >
      {text}
    </button>
  );
};

export default Button;

import Link from "next/link";
import { ReactElement } from "react";

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps): ReactElement => {
  return (
    <div className="w-full py-4 px-8 md:px-32 flex justify-between items-center ">
      <h2 className="text-lg md:text-3xl text-white text-center font-semibold">
        {title}
      </h2>
      <Link className="text-red" href="/">
        More
      </Link>
    </div>
  );
};

export default Title;

import Link from "next/link";
import { ReactElement } from "react";

type LinkButtonProps = {
  title: string;
  href: string;
};

const LinkButton = ({ title, href }: LinkButtonProps): ReactElement => {
  return (
    <Link href={href} className=" text-gray-400 text-base underline">
      {title}
    </Link>
  );
};

export default LinkButton;

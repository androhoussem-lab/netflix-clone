import Button from "@/common/components/Button";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import Popup from "reactjs-popup";

const Navbar = (): ReactElement => {
  return (
    <nav className="w-full flex justify-between items-center px-8 md:px-32 py-4 z-20 fixed top-0 bg-transparent">
      <Link href="/">
        <Image src="/assets/logo.png" alt="logo" width={140} height={80} />
      </Link>
      <ul className="hidden list-none md:flex justify-center items-center gap-4">
        <li className="text-white hover:text-red transition-all duration-200">
          <Popup
            trigger={<h3 className="cursor-pointer">Categories</h3>}
            position="bottom left"
          >
            <ul className="bg-white list-none px-2 py-4 opacity-100 rounded-sm">
              <li className="text-gray-800  hover:text-red transition-all duration-200">
                <Link href="/">Popular</Link>
              </li>
              <li className="text-gray-800  hover:text-red transition-all duration-200">
                <Link href="/">Top-rated</Link>
              </li>
            </ul>
          </Popup>
        </li>
        <li className="text-white hover:text-red transition-all duration-200">
          <Link href="/">About</Link>
        </li>
      </ul>
      <Button text="Sign In" paddingX={1} paddingY={0.1} />
    </nav>
  );
};

export default Navbar;

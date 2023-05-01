import { ReactElement, ReactNode } from "react";
import Navbar from "@/modules/Navbar";
import Footer from "./Footer";

type SharedLayoutProps = {
  children: ReactNode;
};
const SharedLayout = ({ children }: SharedLayoutProps): ReactElement => {
  return (
    <section className="bg-black font-roboto">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default SharedLayout;

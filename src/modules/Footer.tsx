import LinkButton from "@/common/components/LinkButton";
import { ReactElement } from "react";

const Footer = (): ReactElement => {
  return (
    <section className="p-32">
      <div className="pb-16">
        <LinkButton title="Questions? Contact us." href="/" />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3">
        <LinkButton title="FAQ" href="/" />
        <LinkButton title="Media Center" href="/" />
        <LinkButton title="Ways to Watch" href="/" />
        <LinkButton title="Cookie Preferences" href="/" />
        <LinkButton title="Speed Test" href="/" />
        <LinkButton title="Help Center" href="/" />
        <LinkButton title="Investor Relations" href="/" />
        <LinkButton title="Terms of Use" href="/" />
        <LinkButton title="Corporate Information" href="/" />
        <LinkButton title="Legal Notices" href="/" />
        <LinkButton title="Account" href="/" />
        <LinkButton title="Jobs" href="/" />
        <LinkButton title="Privacy" href="/" />
        <LinkButton title="Contact Us" href="/" />
        <LinkButton title="Only on Netflix" href="/" />
      </div>
    </section>
  );
};

export default Footer;

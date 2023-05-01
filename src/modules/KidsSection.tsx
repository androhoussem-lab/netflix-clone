import Image from "next/image";
import { ReactElement } from "react";

type KidsSectionProps = {
  title: string;
  body: string;
  imagePath: string;
};

const KidsSection = ({
  title,
  body,
  imagePath,
}: KidsSectionProps): ReactElement => {
  return (
    <section className="w-full px-8 md:px-32 py-16 flex flex-col md:flex-row justify-center items-center">
      <Image src={imagePath} alt={title} width={600} height={600} />
      <div className="flex flex-col justify-center items-start gap-8">
        <h1 className="text-white text-2xl md:text-5xl font-bold text-start">
          {title}
        </h1>
        <h3 className="text-white text-2xl md:text-3xl text-start">{body}</h3>
      </div>
    </section>
  );
};

export default KidsSection;

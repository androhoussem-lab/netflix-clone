import { Fragment, ReactElement } from "react";
import Image from "next/image";
import { IMAGE_URL } from "@/consts/endpoints";
import Link from "next/link";

interface MovieProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    popularity: number;
    vote_average: number;
    vote_count: number;
  };
}

const Card = ({ movie }: MovieProps): ReactElement => {
  return (
    <Link href="/">
      <div className="w-full h-full">
        <Image
          src={`${IMAGE_URL}${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={400}
        />
      </div>
    </Link>
  );
};

export default Card;

import Card from "@/common/components/Card";
import { IMAGE_URL } from "@/consts/endpoints";
import Image from "next/image";
import { ReactElement, ReactNode } from "react";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
};

type MoviesProps = {
  movies: Movie[];
};

const Movies = ({ movies }: MoviesProps): ReactElement => {
  const moviesList = movies.map((movie: Movie) => {
    return <Card key={movie.id} movie={movie} />;
  });
  return (
    <section className="w-full px-8 md:px-32 pb-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {moviesList}
    </section>
  );
};

export default Movies;

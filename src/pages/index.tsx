import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ReactElement } from "react";
import { POPULAR } from "@/consts/endpoints";
import Movies from "@/modules/movies";
import Hero from "@/modules/Hero";
import KidsSection from "@/modules/KidsSection";
import Title from "@/common/components/Title";
import Divider from "@/common/components/Divider";

const Home = ({
  movies,
}: InferGetServerSidePropsType<typeof getServerSideProps>): ReactElement => {
  console.log(movies["results"]);

  return (
    <section className="bg-black">
      <Hero
        text="Unlimited movies, TV shows, and more."
        subtext="Plans now start at USD3.99/month."
      />
      <Divider />
      <Title title="Popular" />
      <Movies movies={movies["results"]} />
      <Divider />
      <KidsSection
        imagePath="/assets/kids.png"
        title="Create profiles for kids."
        body="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
      />
      <Divider />
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(POPULAR + 1);
  const movies = await response.json();
  return {
    props: {
      movies,
    },
  };
};

export default Home;

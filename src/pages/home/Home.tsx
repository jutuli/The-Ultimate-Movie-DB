import { useContext } from "react";
import { mainContext } from "../../context/MainProvider";
import { IMovie } from "../../interfaces/Interfaces";
import MovieCard from "../../components/movieCard/MovieCard";

const Home = () => {
  const { movieList } = useContext(mainContext) as { movieList: IMovie[] };

  return (
    <section className="home mx-10 lg:mx-20">
      <div className="movie-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {movieList.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default Home;

import { useContext } from "react";
import MovieCard from "../movieCard/MovieCard";
import { mainContext } from "../../context/MainProvider";
import { IMovie } from "../../interfaces/Interfaces";

const MovieList = () => {
  // accessing the global context to get the movie list
  const { movieList } = useContext(mainContext) as { movieList: IMovie[] };

  return (
    <div className="movie-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {movieList.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;

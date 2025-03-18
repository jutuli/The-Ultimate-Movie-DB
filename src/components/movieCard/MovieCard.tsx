import { Link } from "react-router-dom";
import { IMovie } from "../../interfaces/Interfaces";
import { genreColors } from "../../utils/helpers";
import { useContext } from "react";
import { mainContext } from "../../context/MainProvider";
import GenreBadge from "../genreBadge/GenreBadge";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  const context = useContext(mainContext);
  if (!context) throw new Error("useContext must be inside the MainProvider");
  const { setSelectedMovie } = context;

  return (
    <Link
      to={`/movies/${movie.title.replace(/\s+/g, "-")}`}
      onClick={() => setSelectedMovie(movie)}
    >
      <article
        key={movie.title}
        className="movie card card-border min-h-60 cursor-pointer shadow-sm"
      >
        <div className="card-body flex flex-grow flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="card-title mb-2">{movie.title}</h2>
            <p>Release: {movie.year}</p>
            <p>
              Director: <span className="font-bold">{movie.director}</span>
            </p>
            <p>Duration: {movie.duration}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {movie.genre.map((genre) => (
              <GenreBadge key={genre} genre={genre} />
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;

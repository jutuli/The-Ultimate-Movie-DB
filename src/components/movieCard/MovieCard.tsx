import { Link } from "react-router-dom";
import { IMovie } from "../../interfaces/Interfaces";
import { genreColors } from "../../utils/helpers";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  return (
    <Link to={`/movie/${movie.title.replace(/\s+/g, "-")}`}>
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
            {movie.genre.map((genre) => {
              return (
                <div
                  key={genre}
                  className={`genre badge bg-${genreColors[genre]} min-w-fit text-white`}
                >
                  {genre}
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;

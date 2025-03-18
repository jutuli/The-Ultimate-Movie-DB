import { Link } from "react-router-dom";
import { IMovie } from "../../interfaces/Interfaces";
import { genreColors } from "../../utils/helpers";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  return (
    <Link to={`/movie/${movie.title.replace(/\s+/g, "-")}`}>
      <article
        key={movie.title}
        className="movie card card-border cursor-pointer shadow-sm"
      >
        <div className="card-body">
          <h2 className="card-title">{movie.title}</h2>
          <p>Release: {movie.year}</p>
          <p>
            Director: <span className="font-bold">{movie.director}</span>
          </p>
          <p>Duration: {movie.duration}</p>
          <div className="flex flex-wrap gap-2">
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

import { useContext } from "react";
import { mainContext } from "../../context/MainProvider";
import { Link } from "react-router-dom";
import GenreBadge from "../../components/genreBadge/GenreBadge";

const Detail = () => {
  // accessing the global context to get the selected movie
  const context = useContext(mainContext);
  if (!context) throw new Error("useContext must be inside the MainProvider");
  const { selectedMovie } = context;

  return (
    <section className="movie-detail flex flex-col items-center justify-center px-10 py-10 pb-5 lg:px-20">
      {/* if no movie was selected (e.g. when entering a wrong url after /movies/), the userr is promted to return to the home page */}
      {!selectedMovie && (
        <div className="flex flex-col items-center justify-center">
          <p>No movie selected.</p>
        </div>
      )}
      {selectedMovie && (
        <div className="flex flex-col gap-2 rounded-lg p-10 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">{selectedMovie.title}</h2>
          <p className="mb-3 font-semibold">
            Users gave this movie{" "}
            <span className="font-bold">{selectedMovie.rate}</span>/10 ⭐️
          </p>
          <div className="mb-10 flex gap-2">
            {selectedMovie.genre.map((genre) => (
              <GenreBadge key={genre} genre={genre} />
            ))}
          </div>
          <p>🗓️ This movie was released in the year {selectedMovie.year}.</p>
          <p>🎬 It was directed by {selectedMovie.director}.</p>
          <p>⏱️ The movie will take you {selectedMovie.duration} to watch.</p>
          <p className="mt-6 text-lg font-semibold">
            Sit back, grab some popcorn and enjoy this movie! 🍿🎥
          </p>
        </div>
      )}
      <Link to="/">
        <button className="btn btn-primary mt-4">Go back to Home</button>
      </Link>
    </section>
  );
};

export default Detail;

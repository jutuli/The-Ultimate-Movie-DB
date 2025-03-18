import { createContext, useEffect, useState } from "react";
import { IMovie } from "../interfaces/Interfaces";
import movies from "../data/data";

export const mainContext = createContext<
  | {
      movieList: IMovie[];
      setSearchQuery: (searchQuery: string) => void;
      setSortBy: (sortBy: string) => void;
      selectedMovie: IMovie | null;
      setSelectedMovie: (movie: IMovie) => void;
    }
  | undefined
>(undefined);

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  // state to store the movie list
  const [movieList, setMovieList] = useState<IMovie[]>(movies);
  // state to store the search query
  const [searchQuery, setSearchQuery] = useState<string>("");
  // state to store the sort by value (default is new-to-old sorting of movies)
  const [sortBy, setSortBy] = useState<string>("new-to-old");
  // state to store the selected movie (needed to display the movie details page)
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);

  // handling the search query and sort by value changes to filter and sort the movies
  useEffect(() => {
    let filteredMovies = movies.filter((movie) => {
      return (
        // filtering the movies based on the search query (searching in title, director, genre, and year)
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.genre
          .join(" ")
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        movie.year.toString().includes(searchQuery)
      );
    });

    // applying the sorting based on the selected value of sort by
    switch (sortBy) {
      case "new-to-old":
        filteredMovies = filteredMovies.sort(
          (a, b) => Number(b.year) - Number(a.year),
        );
        break;
      case "old-to-new":
        filteredMovies = filteredMovies.sort(
          (a, b) => Number(a.year) - Number(b.year),
        );
        break;
      case "best-to-worst":
        filteredMovies = filteredMovies.sort(
          (a, b) => Number(b.rate) - Number(a.rate),
        );
        break;
      case "worst-to-best":
        filteredMovies = filteredMovies.sort(
          (a, b) => Number(a.rate) - Number(b.rate),
        );
        break;
      case "a-to-z":
        filteredMovies = filteredMovies.sort((a, b) =>
          a.title.localeCompare(b.title),
        );
        break;
      case "z-to-a":
        filteredMovies = filteredMovies.sort((a, b) =>
          b.title.localeCompare(a.title),
        );
        break;
      default:
        break;
    }

    // updating the movie list state with the filtered/sorted movies
    setMovieList(filteredMovies);
  }, [searchQuery, sortBy]);

  return (
    <>
      <mainContext.Provider
        value={{
          movieList,
          setSearchQuery,
          setSortBy,
          selectedMovie,
          setSelectedMovie,
        }}
      >
        {children}
      </mainContext.Provider>
    </>
  );
};

export default MainProvider;

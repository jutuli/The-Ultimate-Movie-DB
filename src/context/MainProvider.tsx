import { createContext, useEffect, useState } from "react";
import { IMovie } from "../interfaces/Interfaces";
import movies from "../data/data";

export const mainContext = createContext<
  | {
      movieList: IMovie[];
      setSearchQuery: (searchQuery: string) => void;
      setSortBy: (sortBy: string) => void;
    }
  | undefined
>(undefined);

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [movieList, setMovieList] = useState<IMovie[]>(movies);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("new-to-old");

  useEffect(() => {
    let filteredMovies = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.genre
          .join(" ")
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        movie.year.toString().includes(searchQuery)
      );
    });

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

    setMovieList(filteredMovies);
  }, [searchQuery, sortBy]);

  return (
    <>
      <mainContext.Provider
        value={{
          movieList,
          setSearchQuery,
          setSortBy,
        }}
      >
        {children}
      </mainContext.Provider>
    </>
  );
};

export default MainProvider;

import { createContext, useState } from "react";
import { IMovie } from "../interfaces/Interfaces";
import movies from "../data/data";

export const mainContext = createContext<
  | {
      movieList: IMovie[];
      setMovieList: React.Dispatch<React.SetStateAction<IMovie[]>>;
    }
  | undefined
>(undefined);

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [movieList, setMovieList] = useState<IMovie[]>(movies);

  return (
    <>
      <mainContext.Provider value={{ movieList, setMovieList }}>
        {children}
      </mainContext.Provider>
    </>
  );
};

export default MainProvider;

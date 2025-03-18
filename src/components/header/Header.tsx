import Search from "../search/Search";
import Sorting from "../sorting/Sorting";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className="text-default mx-10 my-10 flex flex-col gap-15 lg:mx-20">
      <h1 className="text-center text-5xl font-bold">The Ultimate Movie DB</h1>
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        {location.pathname === "/" && (
          <>
            <Search />
            <Sorting />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

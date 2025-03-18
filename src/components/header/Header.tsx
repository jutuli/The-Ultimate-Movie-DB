import Search from "../search/Search";
import Sorting from "../sorting/Sorting";

const Header = () => {
  return (
    <header className="text-default mx-20 my-10 flex flex-col gap-15">
      <h1 className="text-center text-5xl font-bold">The Ultimate Movie DB</h1>
      <div className="flex items-center justify-between">
        <Search />
        <Sorting />
      </div>
    </header>
  );
};

export default Header;

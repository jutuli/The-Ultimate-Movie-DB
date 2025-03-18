import { useContext, useRef } from "react";
import { mainContext } from "../../context/MainProvider";

const Search = () => {
  const context = useContext(mainContext);
  if (!context) throw new Error("useContext must be inside the MainProvider");
  const { setSearchQuery } = context;

  const searchRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchQuery = searchRef.current?.value;
    if (searchQuery) {
      setSearchQuery(searchQuery);
    } else {
      setSearchQuery("");
    }
  };

  return (
    <form
      className="search w-min-auto flex gap-2 lg:w-1/3"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="search"
        id="search-query"
        placeholder="Enter your search..."
        className="bg-default input flex-2"
        ref={searchRef}
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default Search;

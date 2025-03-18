import { useContext, useRef } from "react";
import { mainContext } from "../../context/MainProvider";

const Search = () => {
  // accessing the global context to set the search query
  const context = useContext(mainContext);
  if (!context) throw new Error("useContext must be inside the MainProvider");
  const { setSearchQuery } = context;

  // creating a reference for the input field
  const searchRef = useRef<HTMLInputElement>(null);

  // function to handle the search form submission and set the search query
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchQuery = searchRef.current?.value;
    if (searchQuery) {
      setSearchQuery(searchQuery); // setting the search query in the global context
    } else {
      setSearchQuery(""); // setting an empty string if the search query is empty (to show all movies)
    }
  };

  return (
    <form
      className="search w-min-auto flex w-full gap-2 lg:w-1/3"
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

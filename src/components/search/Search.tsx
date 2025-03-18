const Search = () => {
  return (
    <div className="search w-min-auto flex gap-2 lg:w-1/3">
      <input
        type="text"
        name="search"
        id="search-query"
        placeholder="Enter your search..."
        className="bg-default input flex-2"
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </div>
  );
};

export default Search;

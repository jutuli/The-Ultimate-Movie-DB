const Sorting = () => {
  return (
    <div className="sorting flex items-center justify-center">
      <select className="sort select">
        <option disabled={true}>Sort by...</option>
        <option>Date: Old to New</option>
        <option>Date: New to Old</option>
        <option>Rating: High to Low</option>
        <option>Rating: Low to High</option>
        <option>Name: A to Z</option>
        <option>Name: Z to A</option>
      </select>
    </div>
  );
};

export default Sorting;

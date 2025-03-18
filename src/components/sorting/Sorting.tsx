import { useContext } from "react";
import { mainContext } from "../../context/MainProvider";

const Sorting = () => {
  const context = useContext(mainContext);
  if (!context) throw new Error("useContext must be inside the MainProvider");
  const { setSortBy } = context;

  return (
    <div className="sorting flex items-center justify-center">
      <select
        className="sort select"
        onChange={(e) => {
          setSortBy(e.target.value);
        }}
      >
        <option disabled={true}>Sort by...</option>
        <option value="new-to-old">Date: New to Old</option>
        <option value="old-to-new">Date: Old to New</option>
        <option value="best-to-worst">Rating: High to Low</option>
        <option value="worst-to-best">Rating: Low to High</option>
        <option value="a-to-z">Name: A to Z</option>
        <option value="z-to-a">Name: Z to A</option>
      </select>
    </div>
  );
};

export default Sorting;

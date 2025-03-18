import { useContext } from "react";
import { mainContext } from "../../context/MainProvider";

const Sorting = () => {
  // accessing the global context to set the sort by value (sorting preference)
  const context = useContext(mainContext);
  if (!context) throw new Error("useContext must be inside the MainProvider");
  const { setSortBy } = context;

  return (
    <div className="sorting flex w-full items-center justify-end">
      <select
        className="sort select w-full md:w-auto"
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

import { genreColors } from "../../utils/helpers";

const GenreBadge = ({ genre }: { genre: string }) => {
  return (
    <div
      key={genre}
      className={`genre badge ${genreColors[genre]} min-w-fit text-white`}
    >
      {genre}
    </div>
  );
};

export default GenreBadge;

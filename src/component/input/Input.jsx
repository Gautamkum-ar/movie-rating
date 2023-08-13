import { useMovie } from "../../context/Context";

export const Input = () => {
  const { handleSearch } = useMovie();

  return (
    <input
      type="text"
      className="input"
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search movie by title,cast and director.."
    />
  );
};

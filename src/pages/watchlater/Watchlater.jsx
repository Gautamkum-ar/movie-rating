import { Card } from "../../component/card/Card";
import { useMovie } from "../../context/Context";

export const Watchlater = () => {
  const { watchLater } = useMovie();
  return (
    <div className="starred">
      <div className="starred__main">
        {watchLater.length < 1 ? (
          <h1>There is no movies yet</h1>
        ) : (
          <>
            {" "}
            {watchLater?.map((movie) => (
              <Card movie={movie} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

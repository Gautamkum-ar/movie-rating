import { Card } from "../../component/card/Card";
import { useMovie } from "../../context/Context";

import "../starrred/Starred.css";

export const Starred = () => {
  const { starredData } = useMovie();
  return (
    <div className="starred">
      <div className="starred__main">
        {starredData.length < 1 ? (
          <h1>There is no movies yet</h1>
        ) : (
          <>
            {" "}
            {starredData?.map((movie) => (
              <Card movie={movie} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

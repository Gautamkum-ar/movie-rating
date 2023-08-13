import { Link, useNavigate } from "react-router-dom";
import "../card/Card.css";
import { useMovie } from "../../context/Context";

export const Card = ({ movie }) => {
  const {
    addToStarred,
    isPresentInStarred,
    removeFromStarred,
    addToWatchLater,
    removeFromWatchLater,
    isPresentInWatchLater,
  } = useMovie();
  const { id, title, summary, imageURL } = movie;

  const navigate = useNavigate();
  return (
    <div className="card">
      <section className="img" onClick={() => navigate(`/details/${id}`)}>
        <img src={imageURL} alt={title} />
      </section>
      <section className="details">
        <h2>{title}</h2>
        <p>{summary.slice(0, 100)}</p>
        <section className="btns">
          <button
            onClick={() =>
              isPresentInStarred(id) ? removeFromStarred(id) : addToStarred(id)
            }
          >
            {isPresentInStarred(id) ? "Remove From Starred" : "Star"}
          </button>
          <button
            onClick={() =>
              isPresentInWatchLater(id)
                ? removeFromWatchLater(id)
                : addToWatchLater(id)
            }
          >
            {isPresentInWatchLater(id)
              ? "Remove From watchlater"
              : "Add to Watch later"}
          </button>
        </section>
      </section>
    </div>
  );
};

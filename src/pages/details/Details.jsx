import { useParams } from "react-router-dom";
import "../details/Details.css";
import { useMovie } from "../../context/Context";
import { movies } from "../../database/Database";

export const Details = () => {
  const { movieId } = useParams();
  const { addToStarred } = useMovie();

  const findMovies = movies.find((movie) => movie.id.toString() === movieId);

  const {
    id,
    title,
    summary,
    imageURL,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
  } = findMovies;
  return (
    <div className="movies__details">
      <div className="main__details">
        <section className="image">
          <img src={imageURL} alt="" />
        </section>
        <section className="details__movies">
          <h1>{title}</h1>
          <p>{summary}</p>
          <p>Year: {year}</p>
          <p>
            Genre:{" "}
            {genre.map((g) => (
              <span>{g}</span>
            ))}
          </p>
          <p>Rating: {rating}</p>
          <p>Director: {director}</p>
          <p>Writer: {writer}</p>
          <p>
            Cast:{" "}
            {cast.map((cast) => (
              <span>{cast}</span>
            ))}
          </p>
          <div className="btns">
            <button onClick={() => addToStarred(id)}>Star</button>
            <button>Add to Watch list</button>
          </div>
        </section>
      </div>
    </div>
  );
};

import { useState } from "react";
import { Card } from "../../component/card/Card";
import { movies, moviesGenre, rating, year } from "../../database/Database";
import "../home/Home.css";
import { useMovie } from "../../context/Context";
import { Modal } from "../../component/modal/Modal";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const { handleGenre, handleRating, handleReleaseYear, movieData } =
    useMovie();
  return (
    <div className="home__container">
      <div className="filters">
        <h1>Movies</h1>
        <select name="genre" onChange={(e) => handleGenre(e.target.value)}>
          <option value="All">All Genre</option>
          {moviesGenre.map((genre) => (
            <option value={genre}>{genre}</option>
          ))}
        </select>
        <select name="year" onChange={(e) => handleReleaseYear(e.target.value)}>
          <option value="All">Release Year</option>
          {year.map((year) => (
            <option value={year}>{year}</option>
          ))}
        </select>

        <select onChange={(e) => handleRating(e.target.value)}>
          <option value="All">Rating</option>
          {rating.map((elms) => (
            <option value={elms}>{elms}</option>
          ))}
        </select>
        <button onClick={() => setShowModal(true)}>Add a Movie</button>
      </div>
      <div className="home">
        {showModal && <Modal />}
        {movieData.length < 1 ? (
          <p>There is no movies for these filter</p>
        ) : (
          <>
            {" "}
            {movieData.map((movie) => (
              <Card movie={movie} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

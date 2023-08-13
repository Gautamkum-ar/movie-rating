import { createContext, useContext, useEffect, useState } from "react";
import { movies } from "../database/Database";

const MoviesContext = createContext();

export const ContextProvider = ({ children }) => {
  const [movieData, setMovieData] = useState(movies);
  const [starredData, setStarredData] = useState([]);
  const [watchLater, setWatchLater] = useState([]);
  const [filters, setFilters] = useState({
    genre: "All",
    year: "All",
    rating: "All",
  });

  // handle Search

  const handleSearch = (value) => {
    setMovieData(
      movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(value.toLowerCase()) ||
          movie.cast.find((elms) =>
            elms.toLocaleLowerCase().includes(value.toLocaleLowerCase())
          ) ||
          movie.director.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
    );
  };
  // filter genre
  const handleGenre = (value) => {
    if (value === "All") {
      setMovieData(movies);
    } else {
      setMovieData(
        movies.filter((movie) => movie.genre.find((elms) => elms === value))
      );
    }
  };

  // filter release year

  const handleReleaseYear = (value) => {
    if (value === "All") {
      setMovieData(movies);
    } else {
      setMovieData(
        movies.filter((movie) => movie.year.toString() === value.toString())
      );
    }
  };
  const handleRating = (value) => {
    if (value === "All") {
      setMovieData(movies);
    } else {
      setMovieData(
        movies.filter((movie) => movie.rating.toString() <= value.toString())
      );
    }
  };

  const addToStarred = (id) => {
    const findMovie = movies.find((movie) => movie.id === id);
    setStarredData([...starredData, findMovie]);
    sessionStorage.setItem("starred", JSON.stringify(starredData));
  };

  const isPresentInStarred = (id) => {
    const findMovie = starredData.find((movie) => movie.id === id);
    return findMovie ? true : false;
  };

  const removeFromStarred = (id) => {
    const findMovie = starredData.filter((movie) => movie.id !== id);
    setStarredData(findMovie);
  };
  const addToWatchLater = (id) => {
    const findMovie = movies.find((movie) => movie.id === id);
    setWatchLater([...starredData, findMovie]);
    sessionStorage.setItem("watchlater", JSON.stringify(watchLater));
  };

  const isPresentInWatchLater = (id) => {
    const findMovie = watchLater.find((movie) => movie.id === id);
    return findMovie ? true : false;
  };

  const removeFromWatchLater = (id) => {
    const findMovie = watchLater.filter((movie) => movie.id !== id);
    setWatchLater(findMovie);
  };

  // add new movie

  const addNewMovie = (data) => {
    const datas = [...movieData, data];
    setMovieData([...movies, { ...data }]);
    sessionStorage.setItem("data", JSON.stringify(datas));
  };

  useEffect(() => {
    const getData = JSON.parse(sessionStorage.getItem("data"));
    const watch = JSON.parse(sessionStorage.getItem("watchlater"));
    const star = JSON.parse(sessionStorage.getItem("starred"));
    if (getData) {
      setMovieData(getData);
    }
    if (watch) {
      setWatchLater(watch);
    }
    if (star) {
      setStarredData(star);
    }
  }, []);
  return (
    <MoviesContext.Provider
      value={{
        addNewMovie,
        handleGenre,
        handleRating,
        handleReleaseYear,
        movieData,
        setMovieData,
        handleSearch,
        addToStarred,
        starredData,
        isPresentInStarred,
        removeFromStarred,
        watchLater,
        addToWatchLater,
        removeFromWatchLater,
        isPresentInWatchLater,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovie = () => useContext(MoviesContext);

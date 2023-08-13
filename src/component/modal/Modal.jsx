import { useState } from "react";
import "../modal/Modal.css";
import { useMovie } from "../../context/Context";

export const Modal = () => {
  const { addNewMovie } = useMovie();
  const [userData, setUserData] = useState({
    title: "",
    year: 0,
    rating: "",
    genre: [],
    director: "",
    writer: "",
    cast: [],
    summary: "",
    imageURL: "",
  });
  return (
    <div className="modal">
      <div className="modal__main">
        <button className="dismis">Dismis</button>
        <h2>Add New Movie</h2>
        <input
          type="text"
          placeholder="Movie Title.."
          onChange={(e) => setUserData({ ...userData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Movie Genre.."
          onChange={(e) =>
            setUserData({ ...userData, genre: [e.target.value] })
          }
        />
        <input
          type="text"
          placeholder="Movie rating.."
          onChange={(e) => setUserData({ ...userData, rating: e.target.value })}
        />
        <input
          type="text"
          placeholder="Movie writer.."
          onChange={(e) => setUserData({ ...userData, writer: e.target.value })}
        />
        <input
          type="text"
          placeholder="Movie director.."
          onChange={(e) =>
            setUserData({ ...userData, director: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Movie cast.."
          onChange={(e) => setUserData({ ...userData, cast: [e.target.value] })}
        />
        <input
          type="text"
          placeholder="Movie summary.."
          onChange={(e) =>
            setUserData({ ...userData, summary: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Movie year.."
          onChange={(e) => setUserData({ ...userData, year: e.target.value })}
        />
        <input
          type="text"
          placeholder="Movie Image Url.."
          onChange={(e) =>
            setUserData({ ...userData, imageURL: e.target.value })
          }
        />
        <button className="submit" onClick={() => addNewMovie(userData)}>
          Add
        </button>
      </div>
    </div>
  );
};

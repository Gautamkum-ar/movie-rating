import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Navbar } from "./component/navbar/Navbar";
import { Details } from "./pages/details/Details";
import { Starred } from "./pages/starrred/Starred";
import { Watchlater } from "./pages/watchlater/Watchlater";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/watchLater" element={<Watchlater />} />
        <Route path="/details/:movieId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;

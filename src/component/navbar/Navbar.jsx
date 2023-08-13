import { Link } from "react-router-dom";
import { Input } from "../input/Input";
import "../navbar/Navbar.css";

const navlinks = [
  {
    id: 1,
    name: "Movies",
    route: "/",
  },
  { id: 2, name: "Watch List", route: "/watchlater" },
  {
    id: 3,
    name: "Starred movies",
    route: "/starred",
  },
];
export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>GMDB</h1>
      <Input />
      <ul className="links">
        {navlinks.map((elms) => (
          <Link key={elms.id} to={elms.route}>
            {elms.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

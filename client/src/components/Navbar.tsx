import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/news">News</Link>
      <Link to="/forum">Forum</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/register">Register</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;

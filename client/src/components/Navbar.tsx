import { FaDev } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserAvatar } from "./UserAvatar";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-3 bg-[#04102e] h-24 items-center">
      <div>
        <FaDev size={64} />
      </div>
      <div className="flex flex-row items-center justify-center gap-5 text-xl">
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/forum">Forum</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/register">Register</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <UserAvatar />
      </div>
    </nav>
  );
};

export default Navbar;

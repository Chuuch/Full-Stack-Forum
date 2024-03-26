import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaDev } from "react-icons/fa";
import SearchBar from "./SearchBar";
import UserDropdown from "./UserDropdown.jsx";
import Clock from "./Clock";
import NotificationsDropdown from "./NotificationsDropdown";
const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="flex flex-row sticky top-0 z-50 items-center justify-between p-3 bg-[#04102e] h-24">
      <div className="flex flex-row items-center justify-center gap-x-5 text-gray-400">
        <FaDev size={64} />
        <Clock />
      </div>
      <div className="lg:absolute lg:left-[700px] flex flex-row uppercase tracking-widest items-center justify-center gap-5 text-base">
        <Link to="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link to="/news" className="hover:text-gray-400">
          News
        </Link>
        <Link to="/forum" className="hover:text-gray-400">
          Forum
        </Link>
        <Link to="/about" className="hover:text-gray-400">
          About
        </Link>
        <Link to="/contact" className="hover:text-gray-400">
          Contact
        </Link>
        <Link to="/admin" className="hover:text-gray-400">
          Admin
        </Link>
      </div>
      <div className="flex items-center justify-center gap-x-1">
        <SearchBar />
        {currentUser ? (
          <>
            <NotificationsDropdown />
            <UserDropdown />
          </>
        ) : (
          <Link to="/register">Sign Up / Sign In</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

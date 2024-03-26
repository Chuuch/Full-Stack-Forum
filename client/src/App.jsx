import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import News from "./components/News.jsx";
import Forum from "./pages/Forum.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Admin from "./pages/Admin.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import EditPostModal from "./components/EditPostModal.jsx";
import PostDetails from "./pages/PostDetails.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/edit/:postId" element={<EditPostModal />} />
          <Route path="/forum/:postId" element={<PostDetails />} />
        </Route>
        <Route />
      </Routes>
      <Outlet />
    </Router>
  );
};

export default App;

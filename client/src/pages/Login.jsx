import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BsPersonLock } from "react-icons/bs";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";
import OAuth from "../components/OAuth.jsx";

const Login = () => {
  const [formData, setFormData] = useState({});
  const { loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
        toast.error("Something went wrong! Please try again.");
        return;
      }
      dispatch(signInSuccess(data));
      toast.success("Welcome back!");
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col h-fit items-center justify-center gap-y-24">
      <h1 className="text-5xl text-gray-400 font-light tracking-widest mt-24">
        WELCOME BACK
      </h1>
      <div className="flex flex-row items-center justify-center w-[720px] h-96 rounded-xl">
        <div className="flex flex-row gap-16 items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-3"
          >
            <h1 className="text-2xl font-light text-gray-400">Sign In</h1>
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              className="rounded-xl p-1 bg-gray-700 w-64 px-2 outline-none border-none focus:outline-gray-400"
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              className="rounded-xl p-1 bg-gray-700 w-64 px-2 outline-none border-none focus:outline-gray-400"
            />
            <div className="text-xs hover:text-gray-400 hover:underline cursor-pointer mr-32">
              <p className="flex text-left">Forgotten password?</p>
            </div>
            <button
              disabled={loading}
              type="submit"
              className="border border-gray-400 text-gray-400 transition-all rounded-xl w-full h-8 hover:border-gray-300 hover:text-gray-300"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
            <OAuth />
            <p>
              Don`t have an account?{" "}
              <Link to="/register" className="text-sky-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
          <div className="h-[300px] bg-gray-800 border border-gray-700" />
          <BsPersonLock size={240} />
        </div>
      </div>
    </div>
  );
};

export default Login;

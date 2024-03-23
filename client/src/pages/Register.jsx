import { SiHellofresh } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        setLoading(false);
        toast.error("Something went wrong! Please try again");
        return;
      }
      setLoading(false);
      toast.success("Thank you for signing up!");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col h-fit items-center justify-center gap-y-24 ">
      <div className="flex flex-col mt-24">
        <h1 className="text-5xl text-gray-400 font-light tracking-widest">
          JOIN THE COMMUNITY
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center w-[760px] h-[450px] rounded-xl">
        <div className="flex flex-row gap-16 items-center justify-center">
          <form
            className="flex flex-col justify-center items-center gap-3"
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl font-light text-gray-400">Sign Up</h1>
            <input
              type="text"
              placeholder="First Name"
              required
              id="firstName"
              onChange={handleChange}
              className="rounded-xl p-1 bg-gray-700 w-64 px-2 outline-none border-none focus:outline-gray-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              id="lastName"
              onChange={handleChange}
              className="rounded-xl p-1 bg-gray-700 w-64 px-2 outline-none border-none focus:outline-gray-400"
            />
            <input
              type="text"
              placeholder="Username"
              required
              id="username"
              onChange={handleChange}
              className="rounded-xl p-1 bg-gray-700 w-64 px-2 outline-none border-none focus:outline-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              required
              onChange={handleChange}
              className="rounded-xl p-1 bg-gray-700 w-64 px-2 outline-none border-none focus:outline-gray-400"
            />
            <input
              type="password"
              placeholder="Password"
              required
              id="password"
              onChange={handleChange}
              className="rounded-xl p-1 bg-gray-700 w-64 px-2 outline-none border-none focus:outline-gray-400"
            />
            <button
              className="border border-gray-400 text-gray-400 rounded-xl w-full h-8 hover:border-gray-300 hover:text-gray-300 transition-all"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
            <OAuth />
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-sky-500 hover:underline">
                Sign In
              </Link>
            </p>
          </form>
          <div className="h-[300px] bg-gray-800 border border-gray-700" />
          <SiHellofresh size={250} />
        </div>
      </div>
    </div>
  );
};

export default Register;

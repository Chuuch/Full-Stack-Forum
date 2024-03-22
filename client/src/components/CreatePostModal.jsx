import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const CreatePostModal = ({ isOpen, onClose }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    if (e.target.id === "title") {
      setFormData({
        ...formData,
        type: e.target.id,
      });
    }

    if (e.target.id === "content") {
      setFormData({
        ...formData,
        type: e.target.id,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
      setLoading(false);

      if (data.success === false) {
        setError(data.message);
      }
      navigate("/forum");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    isOpen && (
      <div className="fixed top-0 left-0 h-full w-full z-20">
        <div
          className="bg-black opacity-65 h-full w-full"
          onClick={onClose}
        ></div>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 absolute lg:top-80 lg:left-[680px] md:top-80 md:left-48 w-[580px] h-[340px] rounded-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="absolute top-2 right-2 cursor-pointer text-4xl p-2 text-gray-400 hover:text-gray-300 transition-all"
            onClick={onClose}
          >
            &times;
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2 opacity-100 text-gray-300">
            <p className="text-gray-400">Add a title to your post:</p>
            <input
              id="title"
              type="text"
              value={formData.title}
              required
              onChange={handleChange}
              className="bg-gray-700 rounded-md p-1 w-3/4 text-start outline-none focus:outline-gray-400"
            />
            <p className="text-gray-400">Type your post content here:</p>
            <input
              id="content"
              type="textarea"
              value={formData.content}
              required
              onChange={handleChange}
              style={{ paddingTop: "-5rem" }}
              className="bg-gray-700 rounded-md p-1 w-3/4 min-h-32 flex outline-none focus:outline-gray-400"
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-5">
            <button
              disabled={loading}
              type="submit"
              className="flex flex-col items-center justify-center px-4 text-lg border
              border-gray-400 text-gray-400 hover:border-gray-300 hover:text-gray-300
              rounded-md transition-all"
            >
              {loading ? "Submitting" : "Submit"}
            </button>
            {error && <p className="text-red-700 text-sm">{error}</p>}
          </div>
        </form>
      </div>
    )
  );
};

export default CreatePostModal;

/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
// eslint-disable-next-line react/prop-types
const EditPostModal = ({ isOpen, onClose, post }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.put(`/api/post/update/${post._id}`, {
        title,
        content,
      });

      if (!response.data.success) {
        setError(response.data.message);
        return;
      }

      if (currentUser._id !== post.userRef._id) {
        toast.error("You can only edit your own posts!");
        return;
      }

      toast.success("Post updated successfully!");
      onClose();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
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
          className="bg-gray-800 p-8 absolute lg:top-80 lg:left-[680px] md:top-80 md:left-48 w-[580px] h-[340px] rounded-md"
          onClick={(e) => e.stopPropagation()}
          onSubmit={handleEditSubmit}
        >
          <div
            className="absolute top-2 right-2 cursor-pointer text-4xl p-2 text-gray-400 hover:text-gray-300 transition-all"
            onClick={onClose}
          >
            &times;
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2 opacity-100 text-gray-300">
            <p className="text-gray-400">Edit your post title:</p>
            <input
              type="text"
              placeholder="Title"
              required
              value={title}
              onChange={handleTitleChange}
              className="bg-gray-700 rounded-sm p-1 w-3/4 text-start outline-none focus:outline-gray-400"
            />
            <p className="text-gray-400">Edit your post content:</p>
            <input
              type="text"
              required
              style={{ paddingTop: "-5rem" }}
              value={content}
              onChange={handleContentChange}
              className="bg-gray-700 rounded-sm p-1 w-3/4 min-h-32 flex outline-none focus:outline-gray-400"
            />
          </div>
          <div className="flex items-center justify-center mt-5">
            <button
              type="submit"
              className="flex items-center justify-center px-4 text-lg border
                border-gray-400 text-gray-400 hover:border-gray-300 hover:text-gray-300
                rounded-md transition-all"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    )
  );
};

export default EditPostModal;

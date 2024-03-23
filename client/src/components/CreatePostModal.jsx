import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const CreatePostModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          userRef: currentUser._id,
        }),
      });
      const responseData = await response.json();
      setLoading(false);

      if (!responseData) {
        console.log(responseData);
        toast.error("An error occurred! Please try again.");
        return;
      }

      toast.success("Post created!");
      reset();
      navigate("/forum");
    } catch (error) {
      console.error(error.message);
      setLoading(false);
      toast.error("An error occurred! Please try again.");
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
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-800 p-8 absolute lg:top-80 lg:left-[680px] md:top-80 md:left-48 w-[580px] min-h-[380px] rounded-md"
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
              type="text"
              placeholder="Title"
              {...register("title", {
                required: "Please fill in a post title",
              })}
              className="bg-gray-700 rounded-md p-1 w-3/4 text-start outline-none focus:outline-gray-400"
            />
            {errors.title && (
              <span className="text-red-500">{errors.title.message}</span>
            )}
            <p className="text-gray-400">Type your post content here:</p>
            <textarea
              type="text"
              placeholder="Content"
              {...register("content", {
                required: "Please enter post content",
              })}
              style={{ paddingTop: "-5rem" }}
              className="bg-gray-700 rounded-md p-1 w-3/4 min-h-32 flex outline-none focus:outline-gray-400"
            />
            {errors.content && (
              <span className="text-red-500">{errors.content.message}</span>
            )}
            <select
              {...register("category", {
                required: "Please select a category",
              })}
              className="flex items-center justify-center rounded-md bg-gray-700 p-2 mt-2"
            >
              <option value="">Select a category</option>
              <option value="JavaScript">JavaScript</option>
              <option value="TypeScript">TypeScript</option>
              <option value="Java">Java</option>
              <option value="C#">C#</option>
              <option value="C">C</option>
              <option value="C++">C++</option>
              <option value="Python">Python</option>
              <option value="Go">Go</option>
              <option value="Swift">Swift</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="PHP">PHP</option>
              <option value="Ruby">Ruby</option>
              <option value="Rust">Rust</option>
              <option value="Perl">Perl</option>
              <option value="SQL">SQL</option>
              <option value="NoSQL">NoSQL</option>
              <option value="Database">Database</option>
            </select>
            {errors.category && (
              <span className="text-red-500">{errors.category.message}</span>
            )}
          </div>
          <div className="flex flex-col items-center justify-center mt-3">
            <button
              disabled={loading}
              type="submit"
              className="flex flex-col items-center justify-center px-4 text-lg border
              border-gray-400 text-gray-400 hover:border-gray-300 hover:text-gray-300
              rounded-md transition-all"
            >
              {loading ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default CreatePostModal;

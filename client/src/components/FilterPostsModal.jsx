// eslint-disable-next-line react/prop-types
const FilterPostsModal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="fixed top-0 left-0 h-full w-full z-20">
        <div
          className="bg-black opacity-65 h-full w-full"
          onClick={onClose}
        ></div>
        <div
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
              type="text"
              required
              className="bg-gray-700 rounded-sm p-1 w-3/4 text-start outline-none focus:outline-gray-400"
            />
            <p className="text-gray-400">Type your post content here:</p>
            <input
              type="textarea"
              required
              style={{ paddingTop: "-5rem" }}
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
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default FilterPostsModal;

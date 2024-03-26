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
          className="bg-gray-800 p-8 absolute lg:top-80 lg:left-[680px] md:top-80 md:left-48 w-[580px] h-[240px] rounded-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="absolute top-2 right-2 cursor-pointer text-4xl p-2 text-gray-400 hover:text-gray-300 transition-all"
            onClick={onClose}
          >
            &times;
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2 opacity-100 text-gray-300 mt-8">
            <p className="text-gray-400">Filter posts by category:</p>
            <select className="flex items-center justify-center rounded-md bg-gray-700 p-2 mt-2">
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

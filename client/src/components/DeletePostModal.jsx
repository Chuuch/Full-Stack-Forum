// eslint-disable-next-line react/prop-types
const DeletePostModal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="fixed top-0 left-0 h-full w-full z-20">
        <div
          className="bg-black opacity-65 h-full w-full"
          onClick={onClose}
        ></div>
        <div
          className="bg-gray-800 p-8 absolute lg:top-80 lg:left-[680px] md:top-80 md:left-48 w-[580px] h-[200px] rounded-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="absolute top-2 right-2 cursor-pointer text-4xl p-2 text-gray-400 hover:text-gray-300 transition-all"
            onClick={onClose}
          >
            &times;
          </div>
          <div>
            <p className="flex items-center justify-center text-xl text-gray-300">
              Are you sure you want to permanently delete this post? This action
              is irreversible.
            </p>
          </div>
          <div className="flex items-center justify-center mt-10">
            <button
              type="submit"
              className="flex items-center justify-center px-4 text-lg border
                border-gray-400 text-gray-400 hover:border-gray-300 hover:text-gray-300
                rounded-md transition-all"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default DeletePostModal;

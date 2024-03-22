import SinglePost from "../components/SinglePost.jsx";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineFilterAlt } from "react-icons/md";
import { LiaSortSolid } from "react-icons/lia";
import Modal from "../components/Modal.jsx";
import { useState } from "react";

const Forum = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl text-gray-400 font-light tracking-widest mt-24">
        FORUM
      </h1>
      <div className="flex flex-row items-center justify-center text-gray-400 gap-x-4">
        <button
          onClick={openModal}
          className="flex flex-row items-center justify-center
        gap-x-2 mt-20 border border-gray-400 hover:border-gray-300 hover:text-gray-300 transition-all p-2 rounded-lg"
        >
          <IoAddCircleOutline size={25} />
          Add Post
        </button>
        <button
          className="flex flex-row items-center justify-center
       gap-x-2 mt-20 border border-gray-400 p-2 rounded-lg
       hover:border-gray-300 hover:text-gray-300 transition-all"
        >
          <MdOutlineFilterAlt size={25} />
          Filter Posts
        </button>
        <button
          className="flex flex-row items-center justify-center
       gap-x-2 mt-20 border border-gray-400 p-2 rounded-lg
       hover:border-gray-300 hover:text-gray-300 transition-all"
        >
          <LiaSortSolid size={25} />
          Sort Posts
        </button>
      </div>
      <div>
        <Modal isOpen={isModalOpen} onClose={closeModal}/>
      </div>
      <div className="mt-10">
        <SinglePost />
      </div>
    </div>
  );
};

export default Forum;

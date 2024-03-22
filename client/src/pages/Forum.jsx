import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineFilterAlt } from "react-icons/md";
import { LiaSortSolid } from "react-icons/lia";
import SinglePost from "../components/SinglePost.jsx";
import CreatePostModal from "../components/CreatePostModal.jsx";
import FilterPostsModal from "../components/FilterPostsModal.jsx";
import SortPostsModal from "../components/SortPostsModal.jsx";

const Forum = () => {
  const [isPostModalOpen, setPostModalOpen] = useState(false);
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);
  const [isSortModalOpen, setSortModalOpen] = useState(false);

  const openPostModal = () => {
    setPostModalOpen(true);
  };

  const closePostModal = () => {
    setPostModalOpen(false);
  };

  const openFilterModal = () => {
    setFilterModalOpen(true);
  };

  const closeFilterModal = () => {
    setFilterModalOpen(false);
  };

  const openSortModal = () => {
    setSortModalOpen(true);
  };

  const closeSortModal = () => {
    setSortModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl text-gray-400 font-light tracking-widest mt-24">
        FORUM
      </h1>
      <div className="flex flex-row items-center justify-center text-gray-400 gap-x-4">
        <button
          onClick={openPostModal}
          className="flex flex-row items-center justify-center
        gap-x-2 mt-20 border border-gray-400 hover:border-gray-300 hover:text-gray-300 transition-all p-2 rounded-lg"
        >
          <IoAddCircleOutline size={25} />
          Add Post
        </button>
        <button
          onClick={openFilterModal}
          className="flex flex-row items-center justify-center
       gap-x-2 mt-20 border border-gray-400 p-2 rounded-lg
       hover:border-gray-300 hover:text-gray-300 transition-all"
        >
          <MdOutlineFilterAlt size={25} />
          Filter Posts
        </button>
        <button
          onClick={openSortModal}
          className="flex flex-row items-center justify-center
       gap-x-2 mt-20 border border-gray-400 p-2 rounded-lg
       hover:border-gray-300 hover:text-gray-300 transition-all"
        >
          <LiaSortSolid size={25} />
          Sort Posts
        </button>
      </div>
      <div>
        <CreatePostModal isOpen={isPostModalOpen} onClose={closePostModal} />
        <FilterPostsModal
          isOpen={isFilterModalOpen}
          onClose={closeFilterModal}
        />
        <SortPostsModal isOpen={isSortModalOpen} onClose={closeSortModal} />
      </div>
      <div className="mt-10">
        <SinglePost />
      </div>
    </div>
  );
};

export default Forum;

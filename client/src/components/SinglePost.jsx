/* eslint-disable react/prop-types */
import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { GoInfo } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import EditPostModal from "./EditPostModal.jsx";
import DeletePostModal from "./DeletePostModal.jsx";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const SinglePost = ({ post }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <article className="flex flex-row bg-gray-800 rounded-lg w-[540px] h-[240px] shadow-md p-4">
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-col gap-y-4">
          <strong className="text-lg text-gray-400">{post.title}</strong>
          <p>{post.content}</p>
        </div>
        <div className="flex flex-col mt-14">
          <FaUserCircle size={32} className="text-gray-400" />
        </div>
        <p className="text-xs text-gray-500">
          posted by: {post.userRef.username}
        </p>
        <div className="flex flex-row items-center justify-center space-x-[360px] mt-3">
          <div className="flex flex-row items-center justify-center gap-x-2">
            <AiOutlineLike size={25} className="cursor-pointer" />
            <GoComment size={25} className="cursor-pointer" />
            <Link to={`/forum/${post._id}`}>
              <GoInfo size={25} />
            </Link>
          </div>
          <div className="flex gap-x-2">
            <CiEdit
              onClick={openEditModal}
              size={28}
              className="text-gray-200 cursor-pointer"
            />

            <MdDeleteOutline
              onClick={openDeleteModal}
              size={28}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <EditPostModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        post={post}
      />
      <DeletePostModal
        postId={post._id}
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
      />
    </article>
  );
};

export default SinglePost;

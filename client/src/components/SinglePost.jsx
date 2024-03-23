/* eslint-disable react/prop-types */
import UserAvatar from "../components/UserAvatar.jsx";
import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { GoInfo } from "react-icons/go";
import PostDropdown from "./PostDropdown.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

const SinglePost = ({ post }) => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await axios.get(`/api/user/${post.userRef}`);
        setAuthor(response.data);
      } catch (error) {
        console.error("Error fetching author:", error);
      }
    };
    fetchAuthor();
  }, [post.userRef]);

  return (
    <article className="flex flex-row bg-gray-800 rounded-lg w-[540px] h-[240px] shadow-md p-4">
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-col gap-y-4">
          <strong className="text-lg text-gray-400">{post.title}</strong>
          <p>{post.content}</p>
        </div>
        <div className="flex flex-col mt-6">
          <UserAvatar />
        </div>
        <p className="text-xs text-gray-500">posted by: {author.username}</p>
        <div className="flex flex-row items-center justify-center space-x-96">
          <div className="flex flex-row items-center justify-center gap-x-2">
            <AiOutlineLike size={25} className="cursor-pointer" />
            <GoComment size={25} className="cursor-pointer" />
            <GoInfo size={25} className="cursor-pointer" />
          </div>
          <div>
            <PostDropdown />
          </div>
        </div>
      </div>
    </article>
  );
};

export default SinglePost;

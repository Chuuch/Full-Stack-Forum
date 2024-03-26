import { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    const fetchPost = async (postId) => {
      try {
        const response = await fetch(`/api/post/get/${postId}`);

        if (response.ok) {
          const postData = await response.json();
          setPost(postData);
          console.log(postData);
        } else {
          throw new Error("Failed to fetch post");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost(postId);
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl text-gray-400 font-light tracking-widest mt-24">
        DETAILS
      </h1>
      <article className="flex flex-col items-start bg-gray-800 rounded-lg w-[540px] h-[240px] shadow-md p-4 mt-24">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col ">
            <strong className="text-lg text-gray-400">{post.title}</strong>
          </div>
          <div>
            <small>{post.category}</small>
            <p>{post.content}</p>
          </div>
          <div className="flex flex-col mt-16">
            <div className="flex flex-col">
              <FaUserCircle size={32} className="text-gray-400" />
            </div>
            <p className="text-xs text-gray-500">
              posted by: {post.userRef.username}
            </p>
          </div>
          <div className="flex flex-row items-center justify-center space-x-96">
            <div className="flex flex-row items-center justify-center gap-x-2">
              <AiOutlineLike size={25} className="cursor-pointer" />
              <GoComment size={25} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostDetails;

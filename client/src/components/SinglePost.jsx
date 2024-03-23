import UserAvatar from "../components/UserAvatar.jsx";
import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { GoInfo } from "react-icons/go";
import PostDropdown from "./PostDropdown.jsx";

const SinglePost = () => {
  return (
    <article className="flex flex-row bg-gray-800 rounded-lg w-[540px] h-[240px] shadow-md p-4">
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-col gap-y-4">
          <strong className="text-lg text-gray-400">Post title</strong>
          <p>
            This is where the post content will be placed. Should be a
            description of the post or problem the user has.
          </p>
        </div>
        <div className="flex flex-col mt-6">
          <UserAvatar />
        </div>
        <p className="text-xs text-gray-500">posted by: user</p>
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

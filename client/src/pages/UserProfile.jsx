import { IoMdCloudUpload } from "react-icons/io";
import { SiMonkeytie } from "react-icons/si";
import { RxAvatar } from "react-icons/rx";

const UserProfile = () => {
  return (
    <div className="h-fit flex flex-col items-center justify-center">
      <h1 className="mt-16 font-light text-5xl text-gray-400 tracking-widest">
        Account Settings
      </h1>
      <div className="flex flex-row mt-52 items-center justify-center gap-x-20">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-y-2">
            <div className="flex items-center justify-center">
              <RxAvatar size={126} />
            </div>
            <div>
              <img
                alt="Avatar"
                className="w-32 h-32 rounded-full self-center"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-x-5">
              <label htmlFor="avatar-upload">
                <input hidden type="file" accept="image/*" id="avatar-upload" />
                <IoMdCloudUpload size={32} className="flex cursor-pointer" />
              </label>

              <button
                id="photo-change"
                className="bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-600 hover:to-sky-400 rounded-xl px-4 py-1 font-sans w-fit self-center"
              >
                Save Photo
              </button>
            </div>
          </div>
          <div></div>

          <div className="space-y-4">
            <div className="mb-2">
              <label className="text-gray-400">Full name</label>
              <input
                type="displayName"
                disabled
                placeholder="Full Name"
                className="bg-gray-600 text-white rounded-xl px-2 py-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="text-gray-400">E-mail</label>
              <input
                type="email"
                placeholder="New E-mail"
                disabled
                className="bg-gray-600 text-white rounded-xl px-2 py-1 w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 mt-auto">
          <SiMonkeytie size={126} />
          <div className="space-y-4">
            <div>
              <label className="text-gray-400">Current password</label>
              <input
                type="password"
                placeholder="Current password"
                className="bg-gray-600 text-white rounded-xl px-2 py-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="text-gray-400">New password</label>
              <input
                type="password"
                placeholder="New password"
                className="bg-gray-600 text-white rounded-xl px-2 py-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="text-gray-400">Confirm new password</label>
              <input
                type="password"
                placeholder="Confirm new password"
                className="bg-gray-600 text-white rounded-xl px-2 py-1 w-full"
              />
            </div>
          </div>
          <button
            id="password-change"
            className="bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-600
						 hover:to-sky-400 rounded-xl px-4 py-1 mt-2 ml-0 font-sans"
          >
            Save Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

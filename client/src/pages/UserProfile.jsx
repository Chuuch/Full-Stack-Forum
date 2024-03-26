import { IoMdCloudUpload } from "react-icons/io";
import { SiMonkeytie } from "react-icons/si";
import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
  getStorage,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../config/config.js";
import { useDispatch } from "react-redux";
import { updateUserStart, updateUserFailure } from "../redux/user/userSlice.js";

const UserProfile = () => {
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePercent, setFilePercent] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePercent(Math.round(progress));
      },
      ( error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const response = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!data.success) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  return (
    <div className="h-fit flex flex-col items-center justify-center">
      <h1 className="mt-16 font-light text-5xl text-gray-400 tracking-widest">
        Account Settings
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row mt-52 items-center justify-center gap-x-20"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-y-2">
            <div className="flex flex-col items-center justify-center">
              <img
                onClick={() => fileRef.current.click()}
                src={formData.avatar || currentUser.avatar}
                alt="Avatar"
                className="w-32 h-32 rounded-full self-center"
              />
              <p className="text-sm self-center">
                {fileUploadError ? (
                  <span className="text-red-700">
                    Error Image upload (image must be less than 2 mb)
                  </span>
                ) : filePercent > 0 && filePercent < 100 ? (
                  <span className="text-slate-700">{`Uploading ${filePercent}%`}</span>
                ) : filePercent === 100 ? (
                  <span className="text-green-700">
                    Image successfully uploaded!
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-5">
              <label htmlFor="avatar-upload">
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  id="avatar-upload"
                  ref={fileRef}
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <IoMdCloudUpload size={32} className="flex cursor-pointer" />
              </label>

              <button
                id="photo-change"
                className="bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-600 hover:to-sky-400 rounded-xl px-4 py-1 font-sans w-fit self-center"
              >
                {loading ? "Loading..." : "Save Photo"}
              </button>
            </div>
            <p className="text-red-700 mt-5">{error ? error : ""}</p>
          </div>

          <div className="space-y-4">
            <div className="mb-2">
              <label className="text-gray-400">Username</label>
              <input
                type="username"
                placeholder="Username"
                defaultValue={currentUser.username}
                id="username"
                onChange={handleChange}
                className="bg-gray-600 text-white rounded-xl px-2 py-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="text-gray-400">E-mail</label>
              <input
                type="email"
                placeholder="E-mail"
                id="email"
                defaultValue={currentUser.email}
                onChange={handleChange}
                className="bg-gray-600 text-white rounded-xl px-2 py-1 w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 mt-auto">
          <SiMonkeytie size={126} />
          <div className="space-y-4">
            <div>
              <label className="text-gray-400">Password</label>
              <input
                type="password"
                placeholder="Password"
                onChange={handleChange}
                id="password"
                className="bg-gray-600 text-white rounded-xl px-2 py-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="text-gray-400">New password</label>
              <input
                type="password"
                placeholder="New password"
                onChange={handleChange}
                id="newPassword"
                className="bg-gray-600 text-white rounded-xl px-2 py-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="text-gray-400">Confirm new password</label>
              <input
                type="password"
                placeholder="Confirm new password"
                onChange={handleChange}
                id="confirmNewPassword"
                className="bg-gray-600 text-white rounded-xl px-2 py-1 w-full"
              />
            </div>
          </div>
          <button
            disabled={loading}
            id="password-change"
            className="bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-600
						 hover:to-sky-400 rounded-xl px-4 py-1 mt-2 ml-0 font-sans"
          >
            {loading ? "Loading..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;

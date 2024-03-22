import { FaUserCircle } from "react-icons/fa";

const UserAvatar = () => {
  // const [avatarURL, setAvatarURL] = useState('');

  // useEffect(() => {
  // 	const storage = getStorage();
  // 	const storageRef = ref(storage, `images/${uid}`);

  // 	getDownloadURL(storageRef)
  // 		.then((url) => {
  // 			setAvatarURL(url);
  // 		})
  // 		.catch((error) => {
  // 			console.error('Error getting download URL:', error);
  // 		});
  // }, [uid]);

  return (
    <div className="flex place-self-center my-auto cursor-pointer hover:bg-gray-800 opacity-75 rounded-full self-center w-10 h-10 z-1">
      <FaUserCircle className="cursor-pointer fill-gray-300 m-auto" size={32} />
    </div>
  );
};

export default UserAvatar;

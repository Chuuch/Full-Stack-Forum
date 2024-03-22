import UserDropdown from "./UserDropdown";

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
    <div>
      <UserDropdown />
    </div>
  );
};

export default UserAvatar;

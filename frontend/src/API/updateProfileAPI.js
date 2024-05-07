// import usersAPI from "./usersAPI";
// import { PUT } from "../utils/http";

// async function UploadProfileAPI({
//   setFormIsLoading,
//   setIsSuccessfullySend,
//   setServerError,
//   info,
//   isAdmin,
//   setAllUsers,
//   token,
//   setCurrentUser,
//   history,
// }) {
//   try {
//     setFormIsLoading(true);
//     setServerError("");

//     const { json } = await PUT(`/api/users/me`, info, token);

//     setFormIsLoading(false);

//     if (json.user) {
//       isAdmin && (await usersAPI({ token, setAllUsers }));

//       setCurrentUser(json.user);

//       setIsSuccessfullySend(true);
//       setTimeout(() => {
//         setIsSuccessfullySend(false);

//         history.push("/myAccount/myProfile");
//       }, 3000);

//       return;
//     }

//     setServerError(json.message);
//   } catch (err) {
//     console.log(err);
//   }
// }

// export default UploadProfileAPI;
import { useState } from 'react';
import usersAPI from './usersAPI'; // Adjust the import path as needed
import { PUT } from '../utils/http';

const UploadProfileAPI = async ({
  setFormIsLoading,
  setIsSuccessfullySend,
  setServerError,
  info,
  isAdmin,
  setAllUsers,
  token,
  setCurrentUser,
  history,
  onError
}) => {
  try {
    setFormIsLoading(true);
    setServerError('');

    const { json } = await PUT('/api/users/me', info, token);

    setFormIsLoading(false);

    if (json.user) {
      if (isAdmin) {
        await usersAPI({ token, setAllUsers });
      }

      setCurrentUser(json.user);

      setIsSuccessfullySend(true);
      setTimeout(() => {
        setIsSuccessfullySend(false);
        history.push('/myAccount/myProfile');
      }, 3000);
    } else {
      setServerError(json.message);
    }
  } catch (err) {
    console.error(err);
    onError('Failed to upload profile');
  }
};

export default UploadProfileAPI;

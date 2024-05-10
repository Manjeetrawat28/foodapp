// import usersAPI from "./usersAPI";

// import { POST } from "../utils/http";
// async function loginAPI({
//   info,
//   setIsLoading,
//   setServerError,
//   setIsLogin,
//   setToken,
//   setIsAdmin,
//   history,
//   setCurrentUser,
//   setAllUsers,
//   setIsFormLoading,
//   setIsModerator,
// }) {
//   try {
//     setIsFormLoading(true);

//     const { json } = await POST("/api/auth/login", info);

//     setIsFormLoading(false);

//     if (json.user) {
//       setServerError("");

//       setIsLoading(true);
//       const { token, roles, user } = json;

//       await setToken(token);

//       setCurrentUser(user);

//       setIsLogin();

//       if (roles[0].name === "admin") {
//         setIsAdmin(true);

//         await usersAPI({ setAllUsers, token });

//         setIsLoading(false);

//         return history.push("/dashboard/orders");
//       }
//       if (roles[0].name === "moderator") {
//         setIsModerator(true);
//         setIsLoading(false);
//         return history.push("/dashboard/myProducts");
//       }

//       setIsLoading(false);
//       return history.push("/menu");
//     }

//     setServerError(json.message);
//   } catch (err) {
//     console.log(err);

//     setIsLoading(false);
//     setServerError(
//       "A ocurrido un error en el servidor, por favor intente de nuevo"
//     );
//   }
// }
// export default loginAPI;
import { useState } from 'react';
import { POST } from '../utils/http';
import usersAPI from './usersAPI'; // Adjust the import path as needed

const loginAPI = async ({
  info,
  setIsLoading,
  setServerError,
  setIsLogin,
  setToken,
  setIsAdmin,
  history,
  setCurrentUser,
  setAllUsers,
  setIsFormLoading,
  setIsModerator,
}) => {
  try {
    setIsFormLoading(true);

    const { json } = await POST('/api/auth/login', info);

    setIsFormLoading(false);

    if (json.user) {
      setServerError('');

      setIsLoading(true);
      const { token, roles, user } = json;

      await setToken(token);

      setCurrentUser(user);

      setIsLogin();

      if (roles.some(role => role.name === 'admin')) {
        setIsAdmin(true);

        await usersAPI({ setAllUsers, token });

        setIsLoading(false);

        return history.push('/dashboard/orders');
      }
      if (roles.some(role => role.name === 'moderator')) {
        setIsModerator(true);
        setIsLoading(false);
        return history.push('/dashboard/myProducts');
      }

      setIsLoading(false);
      return history.push('/menu');
    }

    setServerError(json.message);
  } catch (err) {
    console.error(err);

    setIsLoading(false);
    setServerError(
      'An error has occurred on the server, please try again'
    );
  }
};

export default loginAPI;

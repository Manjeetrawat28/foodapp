// import { POST } from "../utils/http";

// async function singUpAPI({
//   setIsFormLoading,
//   setServerError,

//   history,
//   info,
// }) {
//   try {
//     const { response, json } = await POST("/api/auth/singUp", info);

//     setIsFormLoading(false);

//     if (json.email) {
//       setServerError("");

//       const { email } = json;

//       localStorage.setItem("toConfirmUser", email);

//       setTimeout(() => {
//         return history.push("/#/authentication/confirmation");
//       }, 1000);
//     }

//     if (response.status === 400) {
//       setServerError(json.message);
//       return;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// export default singUpAPI;
import { useState } from 'react';
import { POST } from '../utils/http';

const signUpAPI = async ({ setIsFormLoading, setServerError, history, info, onError }) => {
  try {
    setIsFormLoading(true);

    const { response, json } = await POST('/api/auth/signUp', info);

    setIsFormLoading(false);

    if (json.email) {
      setServerError('');

      const { email } = json;

      localStorage.setItem('toConfirmUser', email);

      setTimeout(() => {
        history.push('/authentication/confirmation');
      }, 1000);
    } else if (response.status === 400) {
      setServerError(json.message);
    }
  } catch (err) {
    console.error(err);
    onError('Failed to sign up');
  }
};

export default signUpAPI;

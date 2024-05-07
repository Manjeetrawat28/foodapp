// import { POST } from "../utils/http";
// async function resetPasswordAPI({
//   setIsFormLoading,
//   setServerError,
//   info,
//   token,
//   history,
// }) {
//   try {
//     setIsFormLoading(true);

//     const { response, json } = await POST(
//       `/api/auth/resetPassword/${token}`,
//       info
//     );

//     setIsFormLoading(false);

//     if (response.status >= 400) {
//       setServerError(json.message);
//       return;
//     } else {
//       return history.push("/authentication/login");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// export default resetPasswordAPI;
import { useState } from 'react';
import { POST } from '../utils/http';

const resetPasswordAPI = async ({ setIsFormLoading, setServerError, info, token, history, onError }) => {
  try {
    setIsFormLoading(true);

    const { response, json } = await POST(`/api/auth/resetPassword/${token}`, info);

    setIsFormLoading(false);

    if (response.status >= 400) {
      setServerError(json.message);
    } else {
      history.push('/authentication/login');
    }
  } catch (err) {
    console.error(err);
    onError('Failed to reset password');
  }
};

export default resetPasswordAPI;

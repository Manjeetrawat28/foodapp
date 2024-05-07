// import { POST } from "../utils/http";

// async function forgotPasswordAPI({
//   setIsFormLoading,
//   setServerError,
//   info,
//   setIsModalOpen,
// }) {
//   try {
//     setIsFormLoading(true);

//     const { response, json } = await POST("/api/auth/forgotPassword", info);

//     setIsFormLoading(false);

//     if (response.status >= 400) {
//       setServerError(json.message);
//       return;
//     }

//     setIsModalOpen(false);
//     return;
//   } catch (err) {
//     console.log(err);
//   }
// }

// export default forgotPasswordAPI;

import { useState } from 'react';
import { POST } from '../utils/http';

const forgotPasswordAPI = async ({ setIsFormLoading, setServerError, info, setIsModalOpen }) => {
  try {
    setIsFormLoading(true);

    const { response, json } = await POST('/api/auth/forgotPassword', info);

    setIsFormLoading(false);

    if (response.status >= 400) {
      setServerError(json.message);
    } else {
      setIsModalOpen(false);
    }
  } catch (err) {
    console.error(err);
    // Optionally, handle error state or display error message
  }
};

export default forgotPasswordAPI;

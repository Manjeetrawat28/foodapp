// import { GET } from "../utils/http";

// async function logoutAPI(onSuccess, onError) {
//   try {
//     const { json } = await GET("/api/auth/logout");

//     return onSuccess(json);
//   } catch (err) {
//     console.log(err);
//     onError(err);
//   }
// }

// export default logoutAPI;
import { useState } from 'react';
import { GET } from '../utils/http';

const logoutAPI = async (onSuccess, onError) => {
  try {
    const { json } = await GET('/api/auth/logout');

    onSuccess(json);
  } catch (err) {
    console.error(err);
    onError('Failed to log out');
  }
};

export default logoutAPI;

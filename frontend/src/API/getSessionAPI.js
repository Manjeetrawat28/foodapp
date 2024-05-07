// import { GET } from "../utils/http";

// async function getSessionAPI(onSuccess, onError) {
//   try {
//     const { json } = await GET("/api/auth/session");
//     if (json.token) {
//       return onSuccess(json);
//     }
//     onError(json);
//   } catch (err) {
//     console.log(err);
//     onError(err);
//   }
// }

// export default getSessionAPI;
import { useState } from 'react';
import { GET } from '../utils/http';

const getSessionAPI = async (onSuccess, onError) => {
  try {
    const { json } = await GET('/api/auth/session');
    if (json.token) {
      onSuccess(json);
    } else {
      onError('Token not found in session data');
    }
  } catch (err) {
    console.error(err);
    onError('Failed to fetch session data');
  }
};

export default getSessionAPI;

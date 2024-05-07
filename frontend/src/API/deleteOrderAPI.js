// import { DELETE } from "../utils/http";
// async function deleteOrderAPI({ token, id }) {
//   try {
//     await DELETE(`/api/orders/${id}`, token);
//   } catch (err) {
//     console.log(err);
//   }
// }

// export default deleteOrderAPI;
import { useState } from 'react';
import { DELETE } from '../utils/http';

const deleteOrderAPI = async ({ token, id, onSuccess, onError }) => {
  try {
    await DELETE(`/api/orders/${id}`, token);
    onSuccess(); // Call onSuccess callback if deletion is successful
  } catch (err) {
    console.error(err);
    onError('Something went wrong'); // Call onError callback if there's an error
  }
};

export default deleteOrderAPI;

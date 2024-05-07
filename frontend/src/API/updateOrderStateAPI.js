// import { PUT } from "../utils/http";

// export default async function updateOrderState({
//   token,
//   orderId,
//   stateName,
//   setIsLoading,
// }) {
//   try {
//     setIsLoading(true);
//     const info = { state: stateName };

//     await PUT(`/api/orders/${orderId}`, info, token);
//     setIsLoading(false);
//   } catch (err) {
//     console.log(err);
//   }
// }
import { useState } from 'react';
import { PUT } from '../utils/http';

const updateOrderState = async ({ token, orderId, stateName, setIsLoading, onError }) => {
  try {
    setIsLoading(true);
    const info = { state: stateName };

    await PUT(`/api/orders/${orderId}`, info, token);
    setIsLoading(false);
  } catch (err) {
    console.error(err);
    onError('Failed to update order state');
  }
};

export default updateOrderState;

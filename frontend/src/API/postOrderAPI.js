// import { POST } from "../utils/http";

// async function postOrderAPI({
//   resetTotalCost,
//   orderSpecifications,
//   token,
//   emptyCart,
//   setCartIsLoading,
//   toggleCart,
//   history,
// }) {
//   try {
//     const { response } = await POST("/api/orders", orderSpecifications, token);

//     setCartIsLoading(false);

//     if (response.status === 201) {
//       emptyCart();
//       resetTotalCost();
//       toggleCart(false);

//       return history.push("/myAccount/myOrders");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
// export default postOrderAPI;
import { useState } from 'react';
import { POST } from '../utils/http';

const postOrderAPI = async ({
  resetTotalCost,
  orderSpecifications,
  token,
  emptyCart,
  setCartIsLoading,
  toggleCart,
  history,
  onError,
}) => {
  try {
    const { response } = await POST('/api/orders', orderSpecifications, token);

    setCartIsLoading(false);

    if (response.status === 201) {
      emptyCart();
      resetTotalCost();
      toggleCart(false);

      history.push('/myAccount/myOrders');
    } else {
      onError('Failed to place order');
    }
  } catch (err) {
    console.error(err);
    onError('Something went wrong');
  }
};

export default postOrderAPI;

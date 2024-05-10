// import { POST } from "../utils/http";

// const newsletterSubscribtionAPI = async ({ info, setIsSuccessfullySend }) => {
//   try {
//     const { response } = await POST("/api/newsletter", info);

//     if (response.status === 200) {
//       setIsSuccessfullySend(true);

//       setTimeout(() => {
//         setIsSuccessfullySend(false);
//       }, 3000);
//     }
//     if (response.status === 500)
//       alert("Error en el servidor, vuelva a interntar");
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default newsletterSubscribtionAPI;
import { useState } from 'react';
import { POST } from '../utils/http';

const newsletterSubscriptionAPI = async ({ info, setIsSuccessfullySend, onError }) => {
  try {
    const { response } = await POST('/api/newsletter', info);

    if (response.status === 200) {
      setIsSuccessfullySend(true);

      setTimeout(() => {
        setIsSuccessfullySend(false);
      }, 3000);
    } else if (response.status === 500) {
      onError('Server error, try again');
    }
  } catch (err) {
    console.error(err);
    onError('Something went wrong');
  }
};

export default newsletterSubscriptionAPI;

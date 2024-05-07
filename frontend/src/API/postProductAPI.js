// import { POST } from "../utils/http";
// async function postProductAPI({
//   token,
//   e,
//   formData,
//   setIsSuccessfullySend,
//   setFormIsLoading,
// }) {
//   try {
//     const { response } = await POST(
//       "/api/products",
//       formData,
//       token,
//       "formData"
//     );
//     setFormIsLoading(false);

//     if (response.status === 201) {
//       setIsSuccessfullySend(true);
//       e.target.reset();

//       setTimeout(() => {
//         setIsSuccessfullySend(false);
//       }, 2000);
//       return;
//     }
//   } catch (err) {
//     setFormIsLoading(false);
//     console.log(err);
//   }
// }

// export default postProductAPI;
import { useState } from 'react';
import { POST } from '../utils/http';

const postProductAPI = async ({ token, formData, setIsSuccessfullySend, setFormIsLoading, onError }) => {
  try {
    const { response } = await POST('/api/products', formData, token, 'formData');
    setFormIsLoading(false);

    if (response.status === 201) {
      setIsSuccessfullySend(true);
      // Optionally, reset the form using other means as e.target.reset() might not work with React
      // e.target.reset();

      setTimeout(() => {
        setIsSuccessfullySend(false);
      }, 2000);
    } else {
      onError('Failed to post product');
    }
  } catch (err) {
    setFormIsLoading(false);
    console.error(err);
    onError('Something went wrong');
  }
};

export default postProductAPI;

// import { POST } from "../utils/http";

// const contactAPI = async ({ info, e }) => {
//   try {
//     const { response } = await POST("/api/contact", info);

//     if (response.status === 200) {
//       e.target.reset();
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default contactAPI;

import { useState } from 'react';
import { POST } from '../utils/http';

const contactAPI = async (info) => {
  try {
    const { response } = await POST('/api/contact', info);

    if (response.status === 200) {
      // Optionally handle success (e.g., show a success message)
      return true; // Return true to indicate success
    }
  } catch (err) {
    console.error(err);
    // Optionally handle error (e.g., display error message)
    return false; // Return false to indicate failure
  }
};

export default contactAPI;


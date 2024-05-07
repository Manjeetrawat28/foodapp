// import { POST } from "../utils/http";

// const accountConfirmationAPI = async ({
//   setIsSuccessfullySend,
//   setIsRequestLoading,
//   history,
// }) => {
//   setIsRequestLoading(true);

//   const info = { id: localStorage.getItem("toConfirmUser") };

//   try {
//     const { response } = await POST("/api/auth/confirmation", { email: info });

//     setIsRequestLoading(false);

//     if (response.status === 200) {
//       setIsSuccessfullySend(true);
//       localStorage.removeItem("toConfirmUser");
//       setTimeout(() => {
//         setIsSuccessfullySend(false);
//         history.push("/menu");
//       }, 3000);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default accountConfirmationAPI;

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { POST } from '../utils/http';

const AccountConfirmationAPI = () => {
  const [isSuccessfullySend, setIsSuccessfullySend] = useState(false);
  const [isRequestLoading, setIsRequestLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const confirmAccount = async () => {
      setIsRequestLoading(true);

      const info = { id: localStorage.getItem('toConfirmUser') };

      try {
        const { response } = await POST('/api/auth/confirmation', { email: info });

        setIsRequestLoading(false);

        if (response.status === 200) {
          setIsSuccessfullySend(true);
          localStorage.removeItem('toConfirmUser');
          setTimeout(() => {
            setIsSuccessfullySend(false);
            history.push('/menu');
          }, 3000);
        }
      } catch (err) {
        console.error(err);
        // Handle error (e.g., display error message)
      }
    };

    confirmAccount();
  }, []); // Empty dependency array to run effect only once

  return (
    <div>
      {/* You can render loading indicator or success message here */}
    </div>
  );
};

export default AccountConfirmationAPI;


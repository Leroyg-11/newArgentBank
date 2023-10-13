import React, { useState } from "react";
import ProfileUpdateForm from "../components/putUserName/ProfileUpdateForm";
import axios from "axios";
import { hostName } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { profileUser } from "../store/profileSlice";

const ProfileUpdatePage = () => {
  const getToken = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [freshUserName, setFreshUserName] = useState("");

  const handleUserNameUpdate = (newUserName) => {
    // Envoyez une requête pour mettre à jour le nom d'utilisateur avec Axios
    axios
      .put(
        `${hostName}/user/profile`,
        { userName: newUserName },
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      )
      .then((response) => {
        // Mettez à jour le profil de l'utilisateur dans Redux
        dispatch(profileUser());
        console.log(response.data.body.userName);
        setFreshUserName(response.data.body.userName);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la mise à jour du nom d'utilisateur",
          error
        );
      });
  };

  return (
    <div>
      <h1>
        Page de mise à jour du profil <p>{freshUserName}</p>
      </h1>
      <ProfileUpdateForm onUserNameUpdate={handleUserNameUpdate} />
    </div>
  );
};

export default ProfileUpdatePage;

// import React from "react";
// import ProfileUpdateForm from "../components/putUserName/ProfileUpdateForm";

// const ProfileUpdatePage = () => {
//   return (
//     <div>
//       <ProfileUpdateForm />
//     </div>
//   );
// };

// export default ProfileUpdatePage;

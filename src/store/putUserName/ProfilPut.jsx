// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { profileUser } from "../profileSlice";
// import ProfileUpdateForm from "../../components/putUserName/ProfileUpdateForm";
// import axios from "axios";
// import { hostName } from "../../api";

// const ProfilPut = () => {
//   const user = useSelector((state) => state.user.profile);
//   const getToken = useSelector((state) => state.user.user);
//   console.log(getToken);
//   const dispatch = useDispatch();

//   const handleUserNameUpdate = (newUserName) => {
//     // Envoyez une requête pour mettre à jour le nom d'utilisateur avec axios
//     axios
//       .put(
//         `${hostName}/user/profile`,
//         { userName: newUserName },
//         {
//           headers: {
//             Authorization: `Bearer ${getToken}`,
//           },
//         }
//       )
//       .then((response) => {
//         // Mettez à jour le profil de l'utilisateur dans Redux
//         dispatch(profileUser());
//       })
//       .catch((error) => {
//         console.error(
//           "Erreur lors de la mise à jour du nom d'utilisateur",
//           error
//         );
//       });
//   };

//   return (
//     <div>
//       <h1>Profil de l'utilisateur</h1>
//       <p>Email: {user.email}</p>
//       <p>Nom d'utilisateur: {user.userName}</p>

//       <ProfileUpdateForm onUserNameUpdate={handleUserNameUpdate} />
//     </div>
//   );
// };

// export default ProfilPut;

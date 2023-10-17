import React, { useState } from "react";
import "./ProfileUpdateForm.scss";
// import ProfilPut from "../../store/putUserName/ProfilPut";
import { useSelector } from "react-redux";

const ProfileUpdateForm = ({ onUserNameUpdate }) => {
  const [newUserName, setNewUserName] = useState("");
  const profileData = useSelector((state) => state.profile.user);
  console.log(profileData);

  const handleUserNameChange = (e) => {
    setNewUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Appeler la fonction pour mettre à jour le nom d'utilisateur ici
    onUserNameUpdate(newUserName);
  };

  const onSubmit = (e) => {
    console.log({ profileData });
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content ">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>put username</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Nouveau nom d'utilisateur:</label>
            <input
              type="text"
              value={newUserName}
              onChange={handleUserNameChange}
            />
          </div>

          <button onClick={onSubmit} type="submit" className="sign-in-button">
            Mettre à jour
          </button>
        </form>
      </section>
      {/* <div className="color-white">{profileData.email}</div> */}
    </main>
  );
};

export default ProfileUpdateForm;

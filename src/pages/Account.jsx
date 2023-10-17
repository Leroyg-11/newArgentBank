import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { profileUser } from "../store/profileSlice";
// import { logoutUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import AccountContent from "../components/AccountContent";
import AccountHead from "../components/AccountHead";
import { profileUser } from "../store/profileSlice";

const Account = (props) => {
  const [profileData, setProfileData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getToken = useSelector((state) => state.user.user);

  useEffect(() => {
    // Mettre à jour les données de l'utilisateur à chaque chargement de la page
    dispatch(profileUser(getToken));
  }, [dispatch, getToken]);

  const profileUserData = useSelector((state) => state.profile.user);
  console.log(profileUserData);

  // OKKK

  return (
    <main className="main bg-dark">
      {/* you're connectd ! <br />
      <br />
      <button>Press to get profile</button> */}
      <AccountHead
        // h1={profileUserData.firstName + " " + profileUserData.userName + " !"}
        h1={
          `${profileUserData ? profileUserData.firstName : ""}` +
          " " +
          `${profileUserData ? profileUserData.userName : ""}` +
          " !"
        }
      />
      <AccountContent
        h3="Argent Bank Checking (x8349)"
        pamount="$2,082.79"
        pdescription="Available Balance"
        button="View transactions"
      />
      <AccountContent
        h3="Argent Bank Savings (x6712)"
        pamount="$10,928.42"
        pdescription="Available Balance"
        button="View transactions"
      />
      <AccountContent
        h3="Argent Bank Credit Card (x8349)"
        pamount="$184.30"
        pdescription="Current Balance"
        button="View transactions"
      />
    </main>
  );
};

export default Account;

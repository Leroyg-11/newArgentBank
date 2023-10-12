import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileUser } from "../store/profileSlice";
import { logoutUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [profileData, setProfileData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const backToLog = () => {
    navigate("/login");
  };

  let handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  const token = useSelector((state) => state.user.user);
  console.log(token);

  // const playProfile = (e) => {
  //   e.preventDefault();
  //   dispatch(profileUser(token)).then((result) => {
  //     if (result.payload) {
  //       setProfileData(result.payload);
  //     }
  //   });
  // };

  // console.log(profileData);

  return (
    <div>
      you're connectd ! <br />
      <br />
      <button>Press to get profile</button>
      <button onClick={backToLog}>BACKTOLOG</button>
      <button onClick={handleLogout}>Deconnection</button>
      <div>
        {Object.keys(profileData).map((key) => (
          <div key={key}>
            <strong>{key}:</strong> {profileData[key]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;

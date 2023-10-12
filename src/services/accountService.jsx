import { useSelector } from "react-redux";
import { logoutUser, loginUser } from "../store/userSlice";

let login = (dispatch, userCredentials) => {
  dispatch(loginUser(userCredentials));
};

let token = () => {
  return useSelector((state) => state.user);
};

let getToken = (user) => {
  if (user === null) {
    return <Navigate to="/login" />;
  }
  return null; // Si l'utilisateur est authentifié
};

let isLogged = (user) => {
  return user !== null;
};

let logout = (dispatch) => {
  dispatch(logoutUser());
};

export const accountService = {
  login,
  getToken,
  isLogged,
  logout,
};

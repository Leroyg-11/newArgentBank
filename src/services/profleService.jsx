import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { profileUser } from "../store/profileSlice";

let token = () => {
  return useSelector((state) => state.user.user);
};
let getProfile = (token) => {
  const dispatch = useDispatch();
  dispatch(profileUser(token)).then((result) => {
    return result.payload;
  });
};

export const profileService = {
  token,
  getProfile,
};

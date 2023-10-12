import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { hostName } from "../api";
// import { loginUser } from "./userSlice";
// import { useSelector } from "react-redux";

export const profileUser = createAsyncThunk(
  "/user/profile",

  async (getToken) => {
    const request = await axios.post(
      `${hostName}/user/profile`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      }
    );
    const response = await request.data.body;
    // console.log(response); OKKK
    // dispatch({ type: GET_PORIFLE, payload: response });
    // localStorage.setItem("profil", JSON.stringify(response));
    return response;
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: null,
  },
  // reducers: {
  //   profileUser: (state, action) => {
  //     state.profile = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(profileUser.pending, (state) => {
        state.user = null;
      })
      .addCase(profileUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(profileUser.rejected, (state, action) => {
        state.user = null;
        console.log(action.error.message);
      });
  },
});

export default profileSlice.reducer;

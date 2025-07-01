import { InitialState, UserDataInterface } from "@/interface/redux.interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: InitialState = {
  isLoggedIn: false,
  userData: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    LoggedIn: (state, { payload }: { payload: UserDataInterface }) => {
      state.isLoggedIn = true;
      state.userData = payload;
    },
  },
});

export const {LoggedIn}=userSlice.actions;

export default userSlice.reducer;

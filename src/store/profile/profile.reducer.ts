import { createSlice } from "@reduxjs/toolkit";

export type ProfileState = {
  isProfileOpen: boolean;
};

export const INITIAL_STATE: ProfileState = {
  isProfileOpen: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState: INITIAL_STATE,
  reducers: {
    setIsProfileOpen(state, action) {
      state.isProfileOpen = action.payload;
    },
  },
});

export const {
  setIsProfileOpen,
} = profileSlice.actions;

export const profileReducer = profileSlice.reducer;

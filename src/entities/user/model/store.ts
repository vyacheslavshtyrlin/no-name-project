import { createSlice } from "@reduxjs/toolkit";
import { loginApi } from "@/entities/session";
import {
  APITYPES,
  LocalStorageKeys,
  removeLocalStorageItem,
  setLocalStorageObject,
} from "@/shared";

interface UserStateInterface {
  user: APITYPES.USER.T | null;
}

const initialState: UserStateInterface = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      removeLocalStorageItem(LocalStorageKeys.USER);
      loginApi.util.resetApiState();
      window.location.reload();
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      loginApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        setLocalStorageObject(LocalStorageKeys.USER, payload);
        window.location.reload();
      }
    );
  },
});

export const { logout } = userSlice.actions;

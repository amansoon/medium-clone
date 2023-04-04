import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignin: true,
  showLaunchpadMenu: false,
  isDialog: false,
  isSigninDialog: false,
  isFollowersDialog: false,
  isFollowingDialog: false,
  // search
};

// create a slice
export const appSlice = createSlice({
  name: "app",
  initialState,

  reducers: {
    setIsSignin: (state, action) => {
      state.isSignin = action.payload;
      state.isSigninDialog = !action.payload;
      state.isDialog = !action.payload;
    },

    setIsSigninDialog: (state, action) => {
      state.isSigninDialog = action.payload ;
      state.isDialog = action.payload;
    },

    setShowLaunchpadMenu: (state, action) => {
      // console.log(payload)                                                           
      state.showLaunchpadMenu = action.payload;
    },

    setIsDialog: (state, action) => {
      state.isDialog = action.payload;
    },

    setIsFollowersDialog: (state, action) => {
      state.isFollowersDialog = action.payload;
      state.isDialog = action.payload;
    },

    setIsFollowingDialog: (state, action) => {
      state.isFollowingDialog = action.payload;
      state.isDialog = action.payload;
    },
  },
});

// export the action
export const {
  setIsSignin,
  setShowLaunchpadMenu,
  setIsDialog,
  setIsSigninDialog,
  setIsFollowersDialog,
  setIsFollowingDialog,
} = appSlice.actions;

export default appSlice.reducer;

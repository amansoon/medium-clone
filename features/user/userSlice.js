import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Aman Ghanghoriya",
  username: "@amanghanghoriya2",
};

// create a slice
export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {},
});

// export the action
// export const {} = userSlice.actions;

export default userSlice.reducer;

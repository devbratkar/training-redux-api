import { createSlice } from "@reduxjs/toolkit";

// ============= This is an example to show why the "name" in slice is important.

const initialState = {
  loader: false,
  usersPosts: [],
};

const usersPostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    updatePosts: (state, action) => {
      console.log("USERS POST SLICE");

    },
  },
  extraReducers: {

  }
});

export const { } = usersPostSlice.actions;

export default usersPostSlice.reducer;
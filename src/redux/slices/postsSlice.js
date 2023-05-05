import { createSlice } from "@reduxjs/toolkit";
import { getAllPostsWithReturn } from "../async"

const initialState = {
  loader: false,
  posts: [],
};

const postSlice = createSlice({
  // This is basically used to create actions type.
  // Like for updatePosts action it will create a action type as "posts/updatePosts" - It is recommended to make this name uniques so that the actions does not clashes.
  name: 'posts',
  // Initial state of this slice.
  // The initial state that should be used when the reducer is called the first time.
  initialState,
  // Reducers are the functions that are going to be used to update the state of this slice.
  reducers: {
    // Add posts to the state
    // state => current state of this slice.
    // action => it contains the type of action that is performed and the payload or data to create logic and set into the state.
    updatePosts: (state, action) => {
      console.log("POST SLICE");

      const { payload } = action;
      state.posts = payload;
    },
  },
  // This is used to handle the asyncronous state changes.
  extraReducers: (builder) => {
    builder
      .addCase(getAllPostsWithReturn.pending, (state) => {
        state.loader = true;
      })
      .addCase(getAllPostsWithReturn.fulfilled, (state, action) => {
        state.loader = false;
        state.posts = action?.payload?.data;
      })
      .addCase(getAllPostsWithReturn.rejected, (state) => {
        state.loader = false;
        state.posts = [];
      })
  }
});

export const { updatePosts } = postSlice.actions;

export default postSlice.reducer;
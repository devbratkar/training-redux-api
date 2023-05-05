import { API } from '../../utils'
import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from '../../api/client/axiosClient'
import { updatePosts } from '../slices/postsSlice'

// We can handle the response in the extra reducer section.
export const getAllPostsWithReturn = createAsyncThunk(
  'Posts/Get_All_Posts_With_Return',
  async (payload, toolkit) => {
    return await request(API.ALL_POSTS, 'GET');
  })

// No need to handle this at any place.
export const getAllPostsWithoutReturn = createAsyncThunk(
  'Posts/Get_All_Posts_Without_Return',
  async (payload, toolkit) => {
    const response = await request(API.ALL_POSTS, 'GET');
    toolkit?.dispatch(updatePosts(response?.data))
  })
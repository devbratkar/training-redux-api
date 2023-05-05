import { client, request } from "./client/axiosClient";

import { API } from "../utils";
import axios from "axios";

// The name should be descriptive.
// Always do the error handling.
// Try to add the API endpoints in some constants so that there is not typing mistake.

// =========  BASIC
export const getAllPosts = async () => {
  try {
    return await axios.get('https://jsonplaceholder.typicode.com/posts');
  } catch (error) {
    return null;
  }
};

// =========  ADVANCE

// ========= Using Axios Request
export const getAllPostsUsingRequest = async () => {
  try {
    return await request(API.ALL_POSTS, 'GET');
  } catch (error) {
    return null;
  }
};


// ========= Using Axios Create
export const getAllPostsUsingCreate = async () => {
  try {
    return await client.get(API.ALL_POSTS);
  } catch (error) {
    return null;
  }
};
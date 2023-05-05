import { useDispatch, useSelector } from 'react-redux'

import React from 'react'
import { getAllPostsWithReturn } from '../../redux/async';
import { updatePosts } from '../../redux/slices/postsSlice';
import { useEffect } from 'react';

export const ReduxPage = () => {
  // A hook to access the redux store's state.
  // This hook takes a selector functionZZ as an argument. The selector is called with the store state.
  const { loader, posts } = useSelector((store) => store.posts);

  // A hook to access the redux `dispatch` function.
  const dispatch = useDispatch();

  // Dispatching 
  useEffect(() => {
    // Here the updatePosts is a "action" that is being called as a callback to the dispatch function.
    const data = [{ id: 1, post: 'new post' }];
    dispatch(updatePosts(data));

    // ===== ADVANCE
    // The above code is resolved to below code.
    // dispatch({
    //   type: "posts/updatePosts",
    //   payload: data,
    // });
  }, [])

  // Getting data
  useEffect(() => {
    dispatch(getAllPostsWithReturn());
  }, [])

  return (
    <div className='seperator-rule cols'>
      <h2>ReduxPage</h2>
      {loader ?
        <span>Loading....</span>
        :
        <ol>
          {posts?.map((item) => {
            return <li key={item?.id}>{item?.title}</li>
          })}
        </ol>
      }
    </div>
  )
}

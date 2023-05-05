import React, { useEffect } from 'react'
import { getAllPosts, getAllPostsUsingCreate, getAllPostsUsingRequest } from '../../api/posts'

import { useState } from 'react'

export const AxiosPage = () => {
  const [loader, setLoader] = useState(true);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await getAllPosts();
    // const response = await getAllPostsUsingCreate();
    // const response = await getAllPostsUsingRequest();
    if (response?.data) {
      setPosts(response?.data);
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <div className='cols'>
      <h2>AxiosPage</h2>
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

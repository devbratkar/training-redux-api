import './App.css';

import { getAllPosts, getAllPostsUsingCreate, getAllPostsUsingRequest } from './api/posts';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    getAllPosts();
    getAllPostsUsingCreate();
    getAllPostsUsingRequest();
  }, [])

  return <>React - Redux Toolkit and API Integration</>;
}

export default App;

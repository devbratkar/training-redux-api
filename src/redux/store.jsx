import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { Provider } from 'react-redux';
import postReducer from './slices/postsSlice';
import usersPostReducer from './slices/usersPostSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    usersPosts: usersPostReducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
});

// ADVANCED
export const AppProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
};
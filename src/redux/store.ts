import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './features/contact/contactApiSlice';
import { uploadApi } from './features/upload/uploadApiSlice';
import { MediaApi } from './features/media/MediaApiSlice';
import { categoryApi } from './features/category/categoryApiSlice';
import categories from './features/category/categories';
import technologies from './features/category/technologies';
import { postApi } from './features/post/postApi';
import { subscribeApi } from './features/subscriber/subscribeApiSlice';
import productActions from './features/productActions/productActions';

export const store = configureStore({
  reducer: {
    categories: categories.reducer,
    technologies: technologies.reducer,
    productActions:productActions.reducer,

    // api slices can be added here
    [contactApi.reducerPath]: contactApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [uploadApi.reducerPath]: uploadApi.reducer,
    [MediaApi.reducerPath]: MediaApi.reducer,
    [subscribeApi.reducerPath]: subscribeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postApi.middleware)
      .concat(uploadApi.middleware)
      .concat(MediaApi.middleware)
      .concat(categoryApi.middleware)
      .concat(subscribeApi.middleware)
      .concat(contactApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

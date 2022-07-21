import { configureStore } from '@reduxjs/toolkit';
import BooksReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: BooksReducer,
    category: categoriesReducer,
  },
});

export default store;

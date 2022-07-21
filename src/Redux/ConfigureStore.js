/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';
import BooksReducer from './books/books.js';
import categoriesReducer from './categories/categories.js';

const store = configureStore({
  reducer: {
    books: BooksReducer,
    category: categoriesReducer,
  },
});

export default store;

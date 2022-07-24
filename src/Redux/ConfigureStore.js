/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';
import BooksReducer from './Books/Books.js';
import categoriesReducer from './Categories/Categories.js';

const store = configureStore({
  reducer: {
    books: BooksReducer,
    category: categoriesReducer,
  },
});

export default store;
